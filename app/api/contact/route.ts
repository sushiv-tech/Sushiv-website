import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/schema'

export async function POST(req: Request) {
  try {
    let body: unknown
    try {
      body = await req.json()
    } catch {
      return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 })
    }
    // 1. Honeypot first: a bot that filled the hidden field gets a silent success, never a validation error
    const hp = (body as { website?: unknown } | null)?.website
    if (typeof hp === 'string' && hp.length > 0) {
      console.warn('[contact] Honeypot triggered, ignoring submission.')
      return NextResponse.json({ ok: true })
    }

    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: 'Validation failed', details: parsed.error.format() },
        { status: 400 }
      )
    }

    const d = parsed.data

    // 2. Server-side storage & email notification
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const resendApiKey = process.env.RESEND_API_KEY

    // Unconfigured services only count as "success" outside production, so a missing
    // env var can never make the form look like it worked while the lead is lost.
    const isMockMode = process.env.NODE_ENV !== 'production'

    let dbOk = false
    let mailOk = false

    // Attempt Supabase insert if credentials are provided
    if (supabaseUrl && supabaseKey) {
      try {
        const { createClient } = await import('@supabase/supabase-js')
        const supabase = createClient(supabaseUrl, supabaseKey, {
          auth: { persistSession: false },
        })

        const { error } = await supabase.from('contact_submissions').insert({
          service_type: d.serviceType,
          description: d.description,
          timeline: d.timeline || null,
          name: d.name,
          email: d.email,
          phone: d.phone || null,
          company: d.company || null,
          preferred_contact: d.preferredContact,
          source_page: d.sourcePage || null,
          created_at: new Date().toISOString(),
        })

        if (!error) {
          dbOk = true
        } else {
          console.error('[contact] Supabase insert error:', error)
        }
      } catch (err) {
        console.error('[contact] Supabase client error:', err)
      }
    } else {
      // In dev / preview without Supabase configured yet
      console.log('[contact] New Lead Submission Received (Local/Mock Mode):', {
        name: d.name,
        email: d.email,
        phone: d.phone,
        company: d.company,
        service: d.serviceType,
        timeline: d.timeline,
        description: d.description,
        preferredContact: d.preferredContact,
      })
      dbOk = isMockMode
    }

    // Attempt Resend email dispatch if configured
    if (resendApiKey) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(resendApiKey)
        const contactEmail = process.env.CONTACT_EMAIL || 'admin@sushiv.in'
        const fromEmail = process.env.EMAIL_FROM || 'Sushiv Website <onboarding@resend.dev>'

        const emailResult = await resend.emails.send({
          from: fromEmail,
          to: [contactEmail],
          replyTo: d.email,
          subject: `New Project Inquiry from ${d.name} (${d.serviceType})`,
          text: `
Name: ${d.name}
Email: ${d.email}
Phone: ${d.phone || 'Not provided'}
Company: ${d.company || 'Not provided'}
Service: ${d.serviceType}
Timeline: ${d.timeline || 'Flexible'}
Preferred Contact: ${d.preferredContact}
Source Page: ${d.sourcePage || '/'}

Description:
${d.description}
          `.trim(),
        })

        if (emailResult.data) {
          mailOk = true
        } else if (emailResult.error) {
          console.error('[contact] Resend error:', emailResult.error)
        }
      } catch (err) {
        console.error('[contact] Resend error:', err)
      }
    } else if (isMockMode) {
      mailOk = true
    } else {
      console.error('[contact] RESEND_API_KEY is not set — no email was sent.')
    }

    // Return success only if a real channel (DB or email) succeeded; mock mode is dev-only
    if (dbOk || mailOk) {
      return NextResponse.json({ ok: true })
    }

    return NextResponse.json(
      { ok: false, error: 'Could not process submission. Please use WhatsApp for direct support.' },
      { status: 500 }
    )
  } catch (error) {
    console.error('[contact] API route fatal error:', error)
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
