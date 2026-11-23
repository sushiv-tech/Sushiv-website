import React from 'react'
import { Star, Quote, Info } from 'lucide-react'
import { reviewsData } from '@/lib/data/reviews'
import { ScrollReveal } from '@/components/motion/ScrollReveal'

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          aria-hidden="true"
          className={`w-4 h-4 ${n <= rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const hasSamples = reviewsData.some((r) => r.isSample)

  return (
    <section className="py-24 border-t border-border-light relative" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Client Feedback
            </span>
            <h2
              id="reviews-heading"
              className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-2"
            >
              What working with us feels like.
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Communication, delivery and support, in the words of the teams we build for.
            </p>
            {hasSamples && (
              <p className="mt-5 inline-flex items-start gap-2 text-left text-xs sm:text-sm text-slate-600 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <strong className="text-slate-800">Sample feedback.</strong> These are illustrative
                  examples shown while we collect verified reviews from our clients.
                </span>
              </p>
            )}
          </ScrollReveal>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-6xl mx-auto [&>*]:mb-6">
          {reviewsData.map((review, idx) => (
            <ScrollReveal key={review.id} delay={(idx % 3) * 0.07} className="break-inside-avoid">
              <figure className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between gap-3">
                  <Stars rating={review.rating} />
                  {review.isSample && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                      Sample
                    </span>
                  )}
                </div>

                <Quote className="w-6 h-6 text-blue-200 mt-4" aria-hidden="true" />
                <blockquote className="mt-1 text-sm text-slate-700 leading-relaxed">
                  {review.quote}
                </blockquote>

                <figcaption className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center text-sm font-bold shrink-0"
                    aria-hidden="true"
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-slate-900">{review.name}</div>
                    <div className="text-xs text-slate-500 leading-snug">
                      {review.role}, {review.business}, {review.city}
                    </div>
                    <div className="text-[11px] font-semibold text-blue-600 mt-0.5">
                      {review.service}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
