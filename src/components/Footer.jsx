import { useLanguage } from '../context/LanguageContext'

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const NAV_LINKS = [
  { id: 'home',      key: 'nav.home' },
  { id: 'about',     key: 'nav.about' },
  { id: 'vision',    key: 'nav.vision' },
  { id: 'services',  key: 'nav.services' },
  { id: 'portfolio', key: 'nav.portfolio' },
  { id: 'partners',  key: 'nav.partners' },
  { id: 'contact',   key: 'nav.contact' },
]

export default function Footer() {
  const { t } = useLanguage()
  const serviceLinks = t('footer.serviceLinks')

  return (
    <footer className="bg-coal-950 border-t border-coal-800">

      {/* ── Warning tape strip at very top ── */}
      <div className="h-2 stripe-yellow opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 mb-12">

          {/* ── Col 1: Brand ── */}
          <div className="col-span-2 md:col-span-1">
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-3 mb-5 group"
            >
              <div className="w-10 h-10 bg-primary-500 flex items-center justify-center
                              font-display font-black text-coal-900 text-base
                              group-hover:bg-primary-400 transition-colors">
                BK
              </div>
              <div className="leading-none">
                <p className="font-display font-bold text-white text-sm tracking-widest">PT. BANGUN</p>
                <p className="font-display font-bold text-primary-500 text-sm tracking-widest">KARYA</p>
              </div>
            </button>

            <p className="font-sans text-gray-500 text-sm leading-relaxed whitespace-pre-line mb-6">
              {t('footer.tagline')}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { label: 'LinkedIn', icon: 'in', href: '#' },
                { label: 'Instagram', icon: 'ig', href: '#' },
                { label: 'YouTube', icon: 'yt', href: '#' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 border border-coal-600 flex items-center justify-center
                             font-display font-black text-[10px] text-coal-300
                             hover:border-primary-500 hover:text-primary-500
                             transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick links ── */}
          <div>
            <p className="font-display font-black text-xs tracking-[0.25em] uppercase
                          text-primary-500 mb-5">
              {t('footer.quickLinks')}
            </p>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ id, key }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="font-sans text-sm text-gray-500 hover:text-white
                               hover:translate-x-1 transition-all duration-200 text-left"
                  >
                    {t(key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <p className="font-display font-black text-xs tracking-[0.25em] uppercase
                          text-primary-500 mb-5">
              {t('footer.servicesTitle')}
            </p>
            <ul className="space-y-3">
              {Array.isArray(serviceLinks) && serviceLinks.map((label, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo('services')}
                    className="font-sans text-sm text-gray-500 hover:text-white
                               hover:translate-x-1 transition-all duration-200 text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <p className="font-display font-black text-xs tracking-[0.25em] uppercase
                          text-primary-500 mb-5">
              {t('footer.contactTitle')}
            </p>
            <ul className="space-y-4">
              <li className="font-sans text-sm text-gray-500 leading-relaxed">
                {t('contact.address').split('\n').map((l, i) => <span key={i} className="block">{l}</span>)}
              </li>
              <li>
                <a href={`tel:${t('contact.phone')}`}
                   className="font-sans text-sm text-gray-500 hover:text-primary-500 transition-colors">
                  {t('contact.phone')}
                </a>
              </li>
              <li>
                <a href={`mailto:${t('contact.email')}`}
                   className="font-sans text-sm text-gray-500 hover:text-primary-500 transition-colors">
                  {t('contact.email')}
                </a>
              </li>
              <li className="font-sans text-sm text-gray-500">{t('contact.hours')}</li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-coal-800 pt-6 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="font-sans text-xs text-gray-600 text-center sm:text-left">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-5">
            {['footer.privacy', 'footer.terms'].map(key => (
              <a key={key} href="#"
                 className="font-sans text-xs text-gray-600 hover:text-gray-400 transition-colors">
                {t(key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
