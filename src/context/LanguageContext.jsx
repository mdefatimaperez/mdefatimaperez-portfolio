import { createContext, useContext, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import es from '../locales/es'
import en from '../locales/en'

const LOCALES = { es, en }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')
  const t = LOCALES[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {/* Actualiza el atributo lang del <html> al cambiar idioma */}
      <Helmet>
        <html lang={lang} />
      </Helmet>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
