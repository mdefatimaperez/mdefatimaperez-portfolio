import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import CVModal from './CVModal'

const LINKEDIN_URL = 'https://www.linkedin.com/in/mariadefatimaperez/'
const GITHUB_URL= 'https://github.com/mdefatimaperez'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [cvModalOpen, setCvModalOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/95 backdrop-blur-sm border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* GITHUB handle */}
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-primary hover:text-violet-mid font-mono text-base font-medium transition-colors"
        >
          /mdefatimaperez
        </a>

        {/* Acciones derechas */}
        <div className="flex items-center gap-7">
          {/* Botón Contacto */}
          <button
            onClick={scrollToContact}
            className="hidden sm:block text-base text-text-primary hover:text-violet-mid transition-colors"
          >
            {t.navbar.contact}
          </button>

          {/* Selector de idioma — toggle pill */}
          <button
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            aria-label="Cambiar idioma"
            className="relative flex items-center w-14 h-7 rounded-full bg-bg-elevated border border-border-subtle transition-colors hover:border-violet-mid"
          >
            <span
              className={`absolute left-1 w-5 h-5 rounded-full bg-violet-cta transition-transform duration-300 ${
                lang === 'en' ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
            <span className="absolute left-1.5 text-[10px] font-bold text-text-white select-none">ES</span>
            <span className="absolute right-1.5 text-[10px] font-bold text-text-muted select-none">EN</span>
          </button>

          {/* Descargar CV */}
          <button
            onClick={() => setCvModalOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 text-base text-text-primary hover:text-violet-mid border border-border-subtle hover:border-violet-mid px-3.5 py-2 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.navbar.downloadCV}
          </button>
          <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
        </div>
      </div>
    </nav>
  )
}
