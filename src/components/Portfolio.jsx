import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

const CATEGORY_COLORS = {
  commercial:     'bg-blue-500/20 text-blue-300 border-blue-500/30',
  infrastructure: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  industrial:     'bg-purple-500/20 text-purple-300 border-purple-500/30',
  residential:    'bg-green-500/20 text-green-300 border-green-500/30',
}

// Deterministic placeholder colors per project index
const PLACEHOLDER_COLORS = [
  'from-coal-700 to-coal-600',
  'from-coal-700 to-slate-700',
  'from-coal-700 to-stone-700',
  'from-coal-600 to-coal-800',
  'from-slate-700 to-coal-700',
  'from-stone-700 to-coal-700',
]

function ProjectCard({ item, index, isVisible }) {
  const [hovered, setHovered] = useState(false)
  const catColor = CATEGORY_COLORS[item.category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'
  const bgClass  = PLACEHOLDER_COLORS[index % PLACEHOLDER_COLORS.length]

  return (
    <div
      className={`anim-scale ${isVisible ? 'anim-show' : ''}
                  relative overflow-hidden group cursor-default`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image placeholder */}
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${bgClass} flex flex-col
                       items-center justify-center overflow-hidden`}>
        <svg className="w-12 h-12 text-coal-400" fill="none" viewBox="0 0 24 24"
             stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <p className="font-display font-bold text-[11px] tracking-[0.2em] text-coal-300 uppercase mt-3">
          PROJECT PHOTO
        </p>
        <p className="font-sans text-coal-400 text-xs mt-1">800 × 600 px</p>

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-coal-900/80 flex flex-col items-center justify-center p-6
                         transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <p className="font-display font-black text-white text-center text-sm sm:text-base uppercase
                        tracking-wide leading-tight mb-3">{item.title}</p>
          <p className="font-sans text-gray-300 text-xs sm:text-sm text-center leading-relaxed">{item.desc}</p>
          <div className="mt-4 h-px w-12 bg-primary-500" />
        </div>

        {/* Warning tape top edge on hover */}
        <div className={`absolute top-0 inset-x-0 h-3 stripe-yellow transition-opacity duration-300
                         ${hovered ? 'opacity-80' : 'opacity-0'}`} />
      </div>

      {/* Card footer */}
      <div className="bg-coal-700 px-4 py-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-display font-bold text-white text-sm sm:text-base uppercase
                        tracking-wide leading-tight truncate">{item.title}</p>
          <p className="font-sans text-gray-500 text-xs mt-0.5 flex items-center gap-1.5">
            <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {item.location}
          </p>
        </div>
        <div className="flex-shrink-0 flex flex-col items-end gap-1.5">
          <span className={`font-display font-bold text-[10px] tracking-[0.1em] uppercase
                            border px-2 py-0.5 ${catColor}`}>
            {item.category}
          </span>
          <span className="font-display font-bold text-primary-500 text-xs">{item.year}</span>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const { t } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')
  const [refHead, visHead] = useScrollAnimation(0.1)
  const [refGrid, visGrid] = useScrollAnimation(0.06)

  const filters = t('portfolio.filters')
  const rawItems = t('portfolio.items')
  const items = Array.isArray(rawItems)
    ? (activeFilter === 'all' ? rawItems : rawItems.filter(p => p.category === activeFilter))
    : []

  const filterKeys = filters ? Object.keys(filters) : []

  return (
    <section id="portfolio" className="bg-coal-900 py-24 lg:py-32 relative overflow-hidden">
      {/* Background stripe */}
      <div className="absolute inset-y-0 left-0 w-32 stripe-subtle opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div ref={refHead} className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className={`anim-up ${visHead ? 'anim-show' : ''}`}>
              <span className="section-eyebrow">
                <span className="w-8 h-px bg-primary-500 inline-block" />
                {t('portfolio.eyebrow')}
              </span>
            </div>
            <h2 className={`anim-up ${visHead ? 'anim-show' : ''} section-heading-light mt-2 whitespace-pre-line`}
                style={{ transitionDelay: visHead ? '80ms' : '0ms' }}>
              {t('portfolio.heading')}
            </h2>
          </div>
          <p className={`anim-up ${visHead ? 'anim-show' : ''} text-gray-500 text-sm leading-relaxed
                         max-w-xs font-sans`}
             style={{ transitionDelay: visHead ? '160ms' : '0ms' }}>
            {t('portfolio.sub')}
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div className={`anim-up ${visHead ? 'anim-show' : ''} flex flex-wrap gap-2 mb-10`}
             style={{ transitionDelay: visHead ? '240ms' : '0ms' }}>
          {filterKeys.map(key => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`font-display font-bold text-xs tracking-[0.15em] uppercase px-4 py-2
                          border transition-all duration-200
                          ${activeFilter === key
                            ? 'bg-primary-500 text-coal-900 border-primary-500'
                            : 'border-coal-600 text-gray-400 hover:border-coal-400 hover:text-white'}`}
            >
              {filters[key]}
            </button>
          ))}
        </div>

        {/* ── Grid ── */}
        <div ref={refGrid} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {items.map((item, i) => (
            <ProjectCard key={`${activeFilter}-${i}`} item={item} index={i} isVisible={visGrid} />
          ))}
        </div>
      </div>
    </section>
  )
}
