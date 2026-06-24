import useScrollAnimation from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

function ServiceCard({ item, index, isVisible }) {
  return (
    <div
      className={`anim-up ${isVisible ? 'anim-show' : ''}
                  relative bg-white border border-stone-200 p-6 sm:p-7
                  hover:border-primary-500/60 hover:shadow-lg hover:-translate-y-1
                  transition-all duration-300 group overflow-hidden cursor-default`}
      style={{ transitionDelay: isVisible ? `${index * 70}ms` : '0ms' }}
    >
      {/* Warning-tape corner — appears on hover */}
      <div className="absolute top-0 right-0 w-14 h-5 stripe-yellow opacity-0
                      group-hover:opacity-60 transition-opacity duration-300" />

      {/* Yellow bottom-right triangle accent */}
      <div
        className="absolute bottom-0 right-0 w-16 h-16 bg-primary-500/0
                   group-hover:bg-primary-500/8 transition-colors duration-300"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />

      {/* Icon */}
      <div className="w-12 h-12 bg-coal-900 border border-coal-700 flex items-center
                      justify-center text-xl mb-5
                      group-hover:bg-primary-500 group-hover:border-primary-500
                      transition-all duration-300">
        <span>{item.icon}</span>
      </div>

      <h3 className="font-display font-black text-coal-900 text-lg sm:text-xl uppercase
                     tracking-wide leading-tight mb-3 group-hover:text-coal-900">
        {item.title}
      </h3>
      <p className="font-sans text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag, i) => (
          <span
            key={i}
            className="font-display font-bold text-[10px] tracking-[0.12em] uppercase
                       border border-stone-200 text-gray-500 px-2 py-0.5
                       group-hover:border-primary-500/40 group-hover:text-primary-600
                       transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Services() {
  const { t } = useLanguage()
  const [refHead, visHead] = useScrollAnimation(0.1)
  const [refGrid, visGrid] = useScrollAnimation(0.06)
  const items = t('services.items')

  return (
    <section id="services" className="bg-stone-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div ref={refHead} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
          <div>
            <div className={`anim-up ${visHead ? 'anim-show' : ''}`}>
              <span className="section-eyebrow">
                <span className="w-8 h-px bg-primary-500 inline-block" />
                {t('services.eyebrow')}
              </span>
            </div>
            <h2 className={`anim-up ${visHead ? 'anim-show' : ''} section-heading-dark mt-2 whitespace-pre-line`}
                style={{ transitionDelay: visHead ? '80ms' : '0ms' }}>
              {t('services.heading')}
            </h2>
          </div>
          <p className={`anim-up ${visHead ? 'anim-show' : ''} text-gray-600 text-sm sm:text-base leading-relaxed
                         max-w-sm font-sans`}
             style={{ transitionDelay: visHead ? '160ms' : '0ms' }}>
            {t('services.sub')}
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div ref={refGrid} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {Array.isArray(items) && items.map((item, i) => (
            <ServiceCard key={i} item={item} index={i} isVisible={visGrid} />
          ))}
        </div>
      </div>
    </section>
  )
}
