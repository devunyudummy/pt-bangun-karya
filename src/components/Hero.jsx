import { useLanguage } from '../context/LanguageContext'
import  heroImage from '../assets/images/hero.webp'

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

/* Reusable placeholder block */
function ImgPlaceholder({ label, size = '1200×800 px', ratio = 'aspect-[4/3]', className = '' }) {
  return (
    <div className={`${ratio} ${className} bg-coal-700 flex flex-col items-center justify-center gap-3 group`}>
      <svg className="w-12 h-12 text-coal-400 group-hover:text-coal-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <div className="text-center">
        <p className="font-display font-bold text-xs tracking-[0.2em] text-coal-300 uppercase">{label}</p>
        <p className="font-sans text-coal-400 text-xs mt-1">{size}</p>
      </div>
    </div>
  )
}

export default function Hero() {
  const { lang, t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-coal-900">

      {/* ── Background layers ── */}
      {/* Subtle diagonal-line pattern */}
      <div className="absolute inset-0 stripe-subtle pointer-events-none" />

      {/* Ambient yellow glow — bottom-left */}
      <div className="absolute -bottom-32 -left-32 w-2/5 h-3/5 rounded-full
                      bg-primary-500/10 blur-[96px] pointer-events-none" />

      {/* Right-side image column — bleeds off-screen, partially visible */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[48%] pointer-events-none">
        <img src={heroImage} alt="Hero" className="h-full w-full object-cover object-center" />
        {/* <ImgPlaceholder label="Foto Proyek / Hero" size="1200 × 900 px" ratio="h-full w-full" className="!aspect-auto" /> */}
        {/* gradient overlay fades image into dark bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-coal-900 via-coal-900/70 to-coal-900/10" />
        {/* top & bottom fades */}
        {/* <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-coal-900 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-coal-900 to-transparent" /> */}
      </div>

      {/* Warning-tape strip — right edge decoration */}
      {/* <div className="absolute top-0 right-0 w-16 md:w-20 h-full stripe-yellow opacity-[0.07] pointer-events-none" /> */}

      {/* ── Main content ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="max-w-2xl xl:max-w-3xl">

          {/* Eyebrow */}
          <div className="hero-1 flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-primary-500 flex-shrink-0" />
            <span className="section-eyebrow !mb-0">{t('hero.eyebrow')}</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display font-black uppercase leading-[0.82] overflow-hidden">
            <span className="hero-2 block text-[clamp(3rem,10vw,8rem)] text-white">
              {t('hero.line1')}
            </span>
            <span className="hero-3 block text-[clamp(3rem,10vw,8rem)] text-primary-500">
              {t('hero.line2')}
            </span>
            <span className="hero-4 block text-[clamp(3rem,10vw,8rem)] text-white/[0.75] select-none">
              {t('hero.line3')}
            </span>
          </h1>

          {/* Divider line */}
          <div className="hero-4 flex items-center gap-4 mt-8 mb-8">
            <span className="h-px w-16 bg-primary-500/60" />
            <span className="h-px flex-1 max-w-xs bg-coal-600" />
          </div>

          {/* Sub text */}
          <p className="hero-5 text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
            {t('hero.sub')}
          </p>

          {/* CTAs */}
          <div className="hero-5 flex flex-wrap gap-4 mt-10">
            <button onClick={() => scrollTo('portfolio')} className="btn-yellow">
              {t('hero.cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-outline-white">
              {t('hero.ctaSecondary')}
            </button>
          </div>

          {/* Badge */}
          <div className="hero-6 mt-14 inline-flex items-center gap-5 border border-coal-600
                          bg-coal-800/60 backdrop-blur-sm px-5 py-4">
            <div>
              <p className="font-display font-black text-4xl text-primary-500 leading-none">20<span className="text-2xl">+</span></p>
              <p className="font-display font-semibold text-xs tracking-widest text-gray-400 uppercase mt-1">
                {t('hero.badge')}
              </p>
            </div>
            <div className="w-px h-10 bg-coal-600" />
            <div>
              <p className="font-display font-black text-4xl text-white leading-none">350<span className="text-2xl">+</span></p>
              <p className="font-display font-semibold text-xs tracking-widest text-gray-400 uppercase mt-1">
                {lang === 'id' ? 'Proyek Selesai' : 'Projects Done'}
              </p>
            </div>
            <div className="w-px h-10 bg-coal-600" />
            <div>
              <p className="font-display font-black text-4xl text-white leading-none">80<span className="text-2xl">+</span></p>
              <p className="font-display font-semibold text-xs tracking-widest text-gray-400 uppercase mt-1">
                {lang === 'id' ? 'Klien Puas' : 'Happy Clients'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-display text-[10px] tracking-[0.25em] text-coal-300 uppercase">
          {t('hero.scroll')}
        </span>
        <div className="relative w-px h-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-500 to-transparent animate-scroll-dot" />
        </div>
      </div>
    </section>
  )
}
