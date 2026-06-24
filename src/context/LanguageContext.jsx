import { createContext, useContext, useState, useCallback } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('id')

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'id' ? 'en' : 'id'))
  }, [])

  // t('hero.line1') → resolves nested key
  const t = useCallback(
    (key) => {
      const parts = key.split('.')
      let value = translations[lang]
      for (const p of parts) {
        if (value == null) return key
        value = value[p]
      }
      return value ?? key
    },
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be inside LanguageProvider')
  return ctx
}
