import useScrollAnimation from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

function LogoPlaceholder({ name, i }) {
  // Alternate slightly different shades
  const bgs = ['bg-stone-200', 'bg-white', 'bg-stone-50']
  const bg  = bgs[i % bgs.length]
  return (
    <div className={`${bg} border border-stone-200 h-16 flex items-center justify-center px-6
                     hover:border-primary-500/40 hover:shadow-md
                     transition-all duration-200 group flex-shrink-0 min-w-[160px]`}>
      <span className="font-display font-bold text-[11px] tracking-[0.12em] uppercase
                       text-gray-400 group-hover:text-gray-600 transition-colors text-center leading-tight">
        {name}
      </span>
    </div>
  )
}

export default function Partners() {
  const { t } = useLanguage()
  const [refHead, visHead] = useScrollAnimation(0.1)
  const [refGrid, visGrid] = useScrollAnimation(0.1)

  const logos = t('partners.logos')
  const doubled = Array.isArray(logos) ? [...logos, ...logos] : []

  return (
    <section id="partners" className="bg-stone-100 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div ref={refHead} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className={`anim-up ${visHead ? 'anim-show' : ''}`}>
              <span className="section-eyebrow">
                <span className="w-8 h-px bg-primary-500 inline-block" />
                {t('partners.eyebrow')}
              </span>
            </div>
            <h2 className={`anim-up ${visHead ? 'anim-show' : ''} section-heading-dark mt-2 whitespace-pre-line`}
                style={{ transitionDelay: visHead ? '80ms' : '0ms' }}>
              {t('partners.heading')}
            </h2>
          </div>
          <p className={`anim-up ${visHead ? 'anim-show' : ''} text-gray-600 text-sm leading-relaxed
                         max-w-xs font-sans`}
             style={{ transitionDelay: visHead ? '160ms' : '0ms' }}>
            {t('partners.sub')}
          </p>
        </div>
      </div>

      {/* ── Marquee (full-width) ── */}
      <div className={`anim-up ${visHead ? 'anim-show' : ''} relative mb-14 overflow-hidden`}
           style={{ transitionDelay: visHead ? '240ms' : '0ms' }}>
        {/* Left / right fades */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-stone-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-stone-100 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 marquee-track animate-marquee">
          {doubled.map((name, i) => (
            <LogoPlaceholder key={i} name={name} i={i} />
          ))}
        </div>
      </div>

      {/* ── Static 3×4 grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className={`anim-up ${visHead ? 'anim-show' : ''} font-display font-bold text-[10px]
                       tracking-[0.3em] uppercase text-gray-400 text-center mb-6`}
           style={{ transitionDelay: visHead ? '320ms' : '0ms' }}>
          {t('partners.eyebrow')}
        </p>

        <div ref={refGrid} className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {Array.isArray(logos) && logos.map((name, i) => (
            <div
              key={i}
              className={`anim-scale ${visGrid ? 'anim-show' : ''}
                          bg-white border border-stone-200 h-14 flex items-center justify-center px-3
                          hover:border-primary-500/40 hover:shadow-sm transition-all duration-200 group`}
              style={{ transitionDelay: visGrid ? `${i * 50}ms` : '0ms' }}
            >
              <span className="font-display font-bold text-[9px] tracking-[0.1em] uppercase
                               text-gray-400 group-hover:text-gray-600 text-center leading-tight transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
