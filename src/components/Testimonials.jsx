import { useState, useEffect, useCallback } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

export default function Testimonials() {
  const { t } = useLanguage()
  const [refSec, visSec] = useScrollAnimation(0.1)
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const items = t('testimonials.items')
  const count  = Array.isArray(items) ? items.length : 0

  const next = useCallback(() => setActive(a => (a + 1) % count), [count])
  const prev = useCallback(() => setActive(a => (a - 1 + count) % count), [count])

  // Auto-advance
  useEffect(() => {
    if (isPaused || count < 2) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next, isPaused, count])

  if (!Array.isArray(items) || count === 0) return null

  const current = items[active]

  return (
    <section id="testimonials" className="bg-coal-800 py-24 lg:py-32 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 stripe-subtle opacity-20 pointer-events-none" />

      <div
        ref={refSec}
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ── Header ── */}
        <div className="text-center mb-14 lg:mb-16">
          <div className={`anim-up ${visSec ? 'anim-show' : ''}`}>
            <span className="section-eyebrow justify-center">
              <span className="w-8 h-px bg-primary-500 inline-block" />
              {t('testimonials.eyebrow')}
              <span className="w-8 h-px bg-primary-500 inline-block" />
            </span>
          </div>
          <h2 className={`anim-up ${visSec ? 'anim-show' : ''} section-heading-light mt-2`}
              style={{ transitionDelay: visSec ? '80ms' : '0ms' }}>
            {t('testimonials.heading')}
          </h2>
        </div>

        {/* ── Testimonial card ── */}
        <div className={`anim-scale ${visSec ? 'anim-show' : ''} relative bg-coal-700 p-8 sm:p-12 lg:p-16`}
             style={{ transitionDelay: visSec ? '200ms' : '0ms' }}>

          {/* Warning tape top */}
          <div className="absolute top-0 inset-x-0 h-2 stripe-yellow opacity-40" />

          {/* Large decorative quote mark */}
          <div className="absolute top-8 left-8 sm:top-10 sm:left-10
                          font-display font-black text-[8rem] sm:text-[10rem] leading-none
                          text-primary-500/10 select-none pointer-events-none">
            "
          </div>

          {/* Quote */}
          <div className="relative z-10">
            <p className="font-sans text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed
                          text-center max-w-3xl mx-auto mb-10">
              "{current.quote}"
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-16 bg-coal-500" />
              <span className="w-2 h-2 bg-primary-500 rotate-45 flex-shrink-0" />
              <span className="h-px w-16 bg-coal-500" />
            </div>

            {/* Client info */}
            <div className="text-center">
              <p className="font-display font-black text-white text-base sm:text-lg uppercase tracking-widest">
                {current.name}
              </p>
              <p className="font-sans text-primary-500 text-sm mt-1">{current.role}</p>
            </div>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className={`anim-up ${visSec ? 'anim-show' : ''} flex items-center justify-between mt-8`}
             style={{ transitionDelay: visSec ? '320ms' : '0ms' }}>
          {/* Prev */}
          <button onClick={prev} aria-label="Previous"
            className="w-10 h-10 border border-coal-500 text-gray-400 flex items-center justify-center
                       hover:border-primary-500 hover:text-primary-500 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-3">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`transition-all duration-300 ${
                  i === active
                    ? 'w-8 h-2 bg-primary-500'
                    : 'w-2 h-2 bg-coal-500 hover:bg-coal-400 rotate-45'
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button onClick={next} aria-label="Next"
            className="w-10 h-10 border border-coal-500 text-gray-400 flex items-center justify-center
                       hover:border-primary-500 hover:text-primary-500 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
