import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/schema'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: 'Validation failed', details: parsed.error.format() },
        { status: 400 }
      )
    }

    const d = parsed.data

    // 1. Honeypot check — if a bot filled the hidden website field, silently succeed without storing
    if (d.website && d.website.length > 0) {
      console.warn('[contact] Honeypot triggered, ignoring submission.')
      return NextResponse.json({ ok: true })
    }

    // 2. Server-side storage & email notification
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY
    const resendApiKey = process.env.RESEND_API_KEY

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
      dbOk = true
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
    } else {
      mailOk = true
    }

    // Return success if at least one succeeded (or mock succeeded)
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
