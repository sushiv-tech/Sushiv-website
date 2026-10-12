'use client'

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Loader2,
  Mail,
  Phone,
} from 'lucide-react'
import {
  contactSchema,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  type ContactFormData,
} from '@/lib/schema'
import { buildWhatsAppLink } from '@/lib/whatsapp'
import { Button } from '@/components/ui/Button'

export function ContactForm() {
  const searchParams = useSearchParams()
  const initialService = searchParams.get('service') || ''

  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onTouched',
    defaultValues: {
      serviceType: initialService || SERVICE_OPTIONS[0],
      description: '',
      timeline: TIMELINE_OPTIONS[1],
      name: '',
      email: '',
      phone: '',
      company: '',
      preferredContact: 'email',
      website: '', // honeypot
    },
  })

  // Synchronize initial query param if changed
  useEffect(() => {
    if (initialService) {
      setValue('serviceType', initialService)
    }
  }, [initialService, setValue])

  const selectedService = watch('serviceType')
  const selectedTimeline = watch('timeline')
  const selectedContactMode = watch('preferredContact')

  const handleNextStep = async () => {
    if (step === 1) {
      const valid = await trigger(['serviceType'])
      if (valid) setStep(2)
    } else if (step === 2) {
      const valid = await trigger(['description', 'timeline'])
      if (valid) setStep(3)
    }
  }

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const payload = {
        ...data,
        sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/contact',
      }

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = await res.json()

      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Submission failed. Please message us on WhatsApp.')
      }

      setSubmittedData(data)
      setIsSuccess(true)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An error occurred while submitting.'
      setErrorMessage(msg)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ── Success State ──
  if (isSuccess && submittedData) {
    const whatsappLink = buildWhatsAppLink({
      name: submittedData.name,
      serviceType: submittedData.serviceType,
      description: submittedData.description,
      timeline: submittedData.timeline,
    })

    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-emerald-300 text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Thank you, {submittedData.name}!
          </h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            We have received your project details. A solution architect from our Pune office will review your requirements and reach out within 1 business day.
          </p>
        </div>

        <div className="pt-4 max-w-sm mx-auto space-y-3">
          <p className="text-xs text-slate-500 font-medium">
            Need an immediate response? Connect directly:
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Continue on WhatsApp with Pre-filled Brief</span>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 relative">
      {/* Step Indicator Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
          <span className={step >= 1 ? 'text-blue-600 font-bold' : ''}>1. Service</span>
          <span className={step >= 2 ? 'text-blue-600 font-bold' : ''}>2. Scope & Timeline</span>
          <span className={step >= 3 ? 'text-blue-600 font-bold' : ''}>3. Contact Info</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-600 h-full transition-all duration-300 rounded-full"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Hidden Honeypot to block spam bots */}
        <input
          type="text"
          {...register('website')}
          tabIndex={-1}
          autoComplete="off"
          style={{ display: 'none' }}
        />

        {/* ── STEP 1: Select Service ── */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                What are you looking to build?
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Select the primary service capability you need assistance with.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICE_OPTIONS.map((svc) => (
                <button
                  key={svc}
                  type="button"
                  onClick={() => setValue('serviceType', svc)}
                  className={`text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                    selectedService === svc
                      ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-sm'
                      : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {svc}
                </button>
              ))}
            </div>
            {errors.serviceType && (
              <p className="text-xs text-rose-600 font-medium">{errors.serviceType.message}</p>
            )}

            <div className="pt-4 flex justify-end">
              <Button type="button" onClick={handleNextStep} variant="primary" size="md">
                <span>Next: Project Details</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Description & Timeline ── */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Tell us about your project
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Share what problem you are solving or what features you have in mind.
              </p>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="description" className="text-xs font-semibold text-slate-700 block">
                Project Overview / Requirements *
              </label>
              <textarea
                id="description"
                rows={4}
                {...register('description')}
                placeholder="e.g. We need a custom web and mobile platform with payment processing, role-based access, and automated client notifications..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors"
              />
              {errors.description && (
                <p className="text-xs text-rose-600 font-medium">{errors.description.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-700 block">
                Target Launch Timeline
              </span>
              <div className="grid grid-cols-2 gap-2">
                {TIMELINE_OPTIONS.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setValue('timeline', time)}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-all ${
                      selectedTimeline === time
                        ? 'bg-blue-600 border-blue-600 text-white font-bold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Button type="button" onClick={() => setStep(1)} variant="ghost" size="md">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                <span>Back</span>
              </Button>

              <Button type="button" onClick={handleNextStep} variant="primary" size="md">
                <span>Next: Contact Details</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        )}

        {/* ── STEP 3: Contact Details & Submit ── */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                How should we reach you?
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                We will send the architectural brief and consultation invite here.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-semibold text-slate-700">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
                {errors.name && <p className="text-xs text-rose-600 font-medium">{errors.name.message}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                  Work Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="name@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
                {errors.email && <p className="text-xs text-rose-600 font-medium">{errors.email.message}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="text-xs font-semibold text-slate-700">
                  Phone / WhatsApp (Optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="company" className="text-xs font-semibold text-slate-700">
                  Company / Project Name (Optional)
                </label>
                <input
                  id="company"
                  type="text"
                  {...register('company')}
                  placeholder="e.g. Acme Corp"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Preferred contact channel */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-semibold text-slate-700 block">
                Preferred Mode of Response
              </span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'email', label: 'Email', icon: <Mail className="w-3.5 h-3.5" /> },
                  { id: 'whatsapp', label: 'WhatsApp', icon: <MessageCircle className="w-3.5 h-3.5" /> },
                  { id: 'call', label: 'Phone Call', icon: <Phone className="w-3.5 h-3.5" /> },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setValue('preferredContact', mode.id as 'email' | 'whatsapp' | 'call')}
                    className={`flex items-center justify-center gap-1.5 p-2.5 rounded-xl border text-xs font-medium transition-all ${
                      selectedContactMode === mode.id
                        ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {mode.icon}
                    <span>{mode.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2 text-xs text-rose-700 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="pt-4 flex items-center justify-between">
              <Button type="button" onClick={() => setStep(2)} variant="ghost" size="md">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                <span>Back</span>
              </Button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center font-bold text-sm px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/30 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    <span>Submitting Brief...</span>
                  </>
                ) : (
                  <>
                    <span>Submit & Request Call</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
