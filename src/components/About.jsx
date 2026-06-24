import useScrollAnimation from '../hooks/useScrollAnimation'
import { useLanguage } from '../context/LanguageContext'

function Highlight({ label, desc, index, isVisible }) {
  return (
    <div
      className={`anim-up ${isVisible ? 'anim-show' : ''} flex items-start gap-4
                  border-l-2 border-primary-500 pl-4 py-1`}
      style={{ transitionDelay: isVisible ? `${index * 120 + 200}ms` : '0ms' }}
    >
      <div>
        <p className="font-display font-bold text-coal-900 text-sm tracking-wide uppercase">{label}</p>
        <p className="text-gray-600 text-sm mt-0.5 font-sans">{desc}</p>
      </div>
    </div>
  )
}

export default function About() {
  const { t } = useLanguage()
  const [refL, visL] = useScrollAnimation(0.1)
  const [refR, visR] = useScrollAnimation(0.1)
  const highlights    = t('about.highlights')

  return (
    <section id="about" className="bg-stone-100 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Image block ── */}
          <div
            ref={refL}
            className={`anim-left ${visL ? 'anim-show' : ''} relative`}
          >
            {/* Offset yellow border frame */}
            <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border-2 border-primary-500/40 pointer-events-none z-0" />

            {/* Warning-tape accent strip — top-right corner */}
            <div className="absolute -top-2 right-8 w-24 h-5 stripe-yellow opacity-80 z-10" />

            {/* Main image placeholder */}
            <div className="relative z-10 aspect-[4/3] bg-coal-700 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
              <svg className="w-14 h-14 text-coal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="font-display font-bold text-xs tracking-[0.2em] text-coal-300 uppercase mt-3">
                {t('about.imagePlaceholder')}
              </p>
              <p className="font-sans text-coal-400 text-xs mt-1">800 × 600 px</p>

              {/* Bottom-right yellow triangle */}
              <div
                className="absolute bottom-0 right-0 w-20 h-20 bg-primary-500/20"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
              />
            </div>

            {/* Bottom stats badge */}
            <div className="absolute -bottom-6 -right-6 bg-coal-900 text-white px-6 py-5 z-20 shadow-xl">
              <p className="font-display font-black text-3xl text-primary-500 leading-none">ISO</p>
              <p className="font-display font-bold text-xs tracking-widest text-gray-400 mt-1 uppercase">9001:2015</p>
              <p className="font-display font-bold text-xs tracking-widest text-gray-400 uppercase">Certified</p>
            </div>
          </div>

          {/* ── Right: Text content ── */}
          <div ref={refR}>
            <div className={`anim-right ${visR ? 'anim-show' : ''}`}>
              <span className="section-eyebrow">
                <span className="w-8 h-px bg-primary-500 inline-block" />
                {t('about.eyebrow')}
              </span>
              <h2 className="section-heading-dark mt-2">{t('about.heading')}</h2>
            </div>

            <div className={`anim-up ${visR ? 'anim-show' : ''} mt-6 space-y-4`}
                 style={{ transitionDelay: visR ? '120ms' : '0ms' }}>
              <p className="text-gray-700 text-base leading-relaxed font-sans">{t('about.p1')}</p>
              <p className="text-gray-700 text-base leading-relaxed font-sans">{t('about.p2')}</p>
            </div>

            {/* Highlights */}
            <div className="mt-8 space-y-4">
              {Array.isArray(highlights) && highlights.map((h, i) => (
                <Highlight key={i} index={i} isVisible={visR} label={h.label} desc={h.desc} />
              ))}
            </div>

            {/* CTA link */}
            <div className={`anim-up ${visR ? 'anim-show' : ''} mt-10`}
                 style={{ transitionDelay: visR ? '500ms' : '0ms' }}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-yellow"
              >
                {t('nav.contact')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
