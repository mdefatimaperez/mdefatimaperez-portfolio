import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { useLang } from '../context/LanguageContext'
import FullStackProfile from './FullStackProfile'
import CyberProfile from './CyberProfile'

const slideVariants = {
  enter: {
    opacity: 0,
    y: 16,
  },
  center: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.4, ease: 'easeOut' },
      y: { type: 'spring', stiffness: 180, damping: 24, mass: 1 },
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      opacity: { duration: 0.2, ease: 'easeIn' },
      y: { duration: 0.2, ease: 'easeIn' },
    },
  },
}

export default function ProfileToggle() {
  const [activeProfile, setActiveProfile] = useState(null)
  const [direction, setDirection] = useState('right')
  const { t } = useLang()

  const handleSelect = (profile) => {
    if (profile === activeProfile) return
    setDirection(profile === 'cyber' ? 'right' : 'left')
    setActiveProfile(profile)
  }

  return (
    <section id="profile" className="py-24 px-6">
      {activeProfile && (
        <Helmet>
          <title>{t.profileToggle.titles[activeProfile]}</title>
        </Helmet>
      )}

      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-14">
          <p className="text-text-muted text-[13px] uppercase tracking-widest mb-3">
            {t.profileToggle.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-medium text-violet-mid">
            {t.profileToggle.heading}
          </h2>
        </div>

        {/* Botones de selección */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {/* Full Stack */}
          <button
            onClick={() => handleSelect('fullstack')}
            className={`group flex items-center gap-4 px-8 py-5 rounded-xl text-left border transition-all duration-300 ${
              activeProfile === 'fullstack'
                ? 'bg-violet-cta border-violet-cta text-text-white'
                : 'bg-bg-surface border-border-subtle text-text-muted hover:border-violet-mid hover:text-text-primary hover:bg-bg-elevated'
            }`}
          >
            <span className={`text-3xl transition-transform duration-300 ${activeProfile === 'fullstack' ? 'scale-110' : 'group-hover:scale-105'}`}>
              🛠️
            </span>
            <div>
              <p className="font-medium text-base leading-tight">Full Stack Developer</p>
              <p className={`text-[13px] mt-0.5 ${activeProfile === 'fullstack' ? 'text-violet-light' : 'text-text-muted'}`}>
                {t.profileToggle.fullstackSub}
              </p>
            </div>
            {activeProfile === 'fullstack' && (
              <span className="ml-auto text-violet-light">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            )}
          </button>

          {/* Cybersecurity */}
          <button
            onClick={() => handleSelect('cyber')}
            className={`group flex items-center gap-4 px-8 py-5 rounded-xl text-left border transition-all duration-300 ${
              activeProfile === 'cyber'
                ? 'bg-violet-cta border-violet-cta text-text-white'
                : 'bg-bg-surface border-border-subtle text-text-muted hover:border-violet-mid hover:text-text-primary hover:bg-bg-elevated'
            }`}
          >
            <span className={`text-3xl transition-transform duration-300 ${activeProfile === 'cyber' ? 'scale-110' : 'group-hover:scale-105'}`}>
              🔐
            </span>
            <div>
              <p className="font-medium text-base leading-tight">Cybersecurity Tools</p>
              <p className={`text-[13px] mt-0.5 ${activeProfile === 'cyber' ? 'text-violet-light' : 'text-text-muted'}`}>
                {t.profileToggle.cyberSub}
              </p>
            </div>
            {activeProfile === 'cyber' && (
              <span className="ml-auto text-violet-light">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
            )}
          </button>
        </div>

        {/* Botón colapsar */}
        <AnimatePresence>
          {activeProfile && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center mb-8 -mt-8"
            >
              <button
                onClick={() => setActiveProfile(null)}
                className="inline-flex items-center gap-1.5 text-text-muted hover:text-violet-mid text-[13px] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                Cerrar perfil
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contenido animado */}
        <AnimatePresence mode="wait">
          {activeProfile === 'fullstack' && (
            <motion.div
              key="fullstack"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <FullStackProfile />
            </motion.div>
          )}

          {activeProfile === 'cyber' && (
            <motion.div
              key="cyber"
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <CyberProfile />
            </motion.div>
          )}

          {activeProfile === null && (
            <motion.p
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-text-muted text-[13px] py-12"
            >
              {t.profileToggle.placeholder}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
