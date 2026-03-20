import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function CVModal({ isOpen, onClose }) {
  const { t } = useLang()

  // Cerrar con Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
            onClick={onClose}
          >
            <div
              className="relative w-full max-w-sm bg-bg-primary border border-border-subtle rounded-2xl p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Ícono */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-bg-elevated border border-border-subtle mb-5 text-xl mx-auto">
                📄
              </div>

              {/* Texto */}
              <h3 className="text-xl font-medium text-text-primary text-center mb-1">
                {t.cvModal.title}
              </h3>
              <p className="text-sm text-text-muted text-center mb-7">
                {t.cvModal.subtitle}
              </p>

              {/* Opciones de descarga */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/cv_PerezFatima.pdf"
                  download
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-violet-cta hover:bg-violet-hover text-text-white font-medium px-5 py-3 rounded-lg transition-colors"
                >
                  <span>🇦🇷</span>
                  {t.cvModal.spanish}
                </a>

                <a
                  href="/cv_PerezFatima_eng.pdf"
                  download
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-bg-elevated hover:bg-bg-surface text-text-primary border border-border-subtle hover:border-violet-mid font-medium px-5 py-3 rounded-lg transition-colors"
                >
                  <span>🇺🇸</span>
                  {t.cvModal.english}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
