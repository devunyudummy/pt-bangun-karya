import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const scrollTo = id => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage()
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [active, setActive]         = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      const ids = ['home','about','vision','services','portfolio','partners','testimonials','contact']
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(ids[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { id: 'home',          label: t('nav.home') },
    { id: 'about',         label: t('nav.about') },
    { id: 'vision',        label: t('nav.vision') },
    { id: 'services',      label: t('nav.services') },
    { id: 'portfolio',     label: t('nav.portfolio') },
    { id: 'partners',      label: t('nav.partners') },
    { id: 'contact',       label: t('nav.contact') },
  ]

  const handleLink = id => { scrollTo(id); setMenuOpen(false) }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-coal-900/95 backdrop-blur-md border-b border-coal-700 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* ── Logo ── */}
          <button
            onClick={() => handleLink('home')}
            className="flex items-center gap-3 group focus-visible:outline-none"
            aria-label="PT. Bangun Karya – Beranda"
          >
            <div className="w-10 h-10 bg-primary-500 flex items-center justify-center
                            font-display font-black text-coal-900 text-base tracking-wider
                            group-hover:bg-primary-400 transition-colors duration-200 flex-shrink-0">
              BK
            </div>
            <div className="hidden sm:block leading-none">
              <p className="font-display font-bold text-white text-sm tracking-[0.18em]">PT. BANGUN</p>
              <p className="font-display font-bold text-primary-500 text-sm tracking-[0.18em]">KARYA</p>
            </div>
          </button>

          {/* ── Desktop nav links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleLink(id)}
                className={`relative px-3 py-2 font-sans text-sm font-medium transition-colors duration-200
                            group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 rounded
                            ${active === id ? 'text-primary-500' : 'text-gray-400 hover:text-white'}`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-3 right-3 h-px bg-primary-500 transition-all duration-200
                               ${active === id ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}
                />
              </button>
            ))}
          </div>

          {/* ── Right side ── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 border border-coal-500 px-3 py-1.5
                         font-display font-bold text-xs tracking-widest
                         hover:border-primary-500 transition-colors duration-200"
              aria-label="Toggle language"
            >
              <span className={lang === 'id' ? 'text-primary-500' : 'text-coal-300'}>ID</span>
              <span className="text-coal-500 mx-0.5">|</span>
              <span className={lang === 'en' ? 'text-primary-500' : 'text-coal-300'}>EN</span>
            </button>

            {/* CTA */}
            <button onClick={() => handleLink('contact')} className="btn-yellow">
              {t('nav.contact')}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* ── Mobile controls ── */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleLang}
              className="border border-coal-500 px-2.5 py-1 font-display font-bold text-xs
                         tracking-widest text-gray-400 hover:border-primary-500 hover:text-primary-500
                         transition-colors duration-200"
            >
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="p-1.5 text-white focus-visible:outline-none"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile drawer ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
                      ${menuOpen ? 'max-h-[28rem] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
        >
          <div className="border-t border-coal-700 pt-2 pb-4 space-y-0.5">
            {links.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleLink(id)}
                className={`block w-full text-left px-4 py-3 font-sans text-sm font-medium
                            transition-colors duration-150 rounded
                            ${active === id
                              ? 'text-primary-500 bg-coal-800'
                              : 'text-gray-400 hover:text-white hover:bg-coal-800'}`}
              >
                {label}
              </button>
            ))}
            <div className="pt-3 px-4">
              <button
                onClick={() => handleLink('contact')}
                className="btn-yellow w-full justify-center"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
