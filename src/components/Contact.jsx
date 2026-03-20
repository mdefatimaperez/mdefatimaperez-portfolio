import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import CVModal from './CVModal'

export default function Contact() {
  const { t } = useLang()
  const [cvModalOpen, setCvModalOpen] = useState(false)

  return (
    <section id="contact" className="py-28 px-6 border-t border-border-subtle">
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Ícono decorativo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-bg-elevated border border-border-subtle mb-6 text-2xl"
        >
          💬
        </motion.div>

        <h2 className="text-4xl sm:text-5xl font-medium text-violet-mid mb-4">
          {t.contact.heading}
        </h2>

        <p className="text-text-primary leading-[1.7] mb-10">
          {t.contact.body}
        </p>

        {/* Botones de contacto */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* CTA principal */}
          <a
            href="mailto:mdefatimaperez@gmail.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-violet-cta hover:bg-violet-hover text-text-white font-medium px-6 py-3.5 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            mdefatimaperez@gmail.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mariadefatimaperez/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bg-surface text-text-primary border border-border-subtle font-medium px-6 py-3.5 rounded-lg hover:bg-bg-elevated hover:border-violet-mid transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            {t.contact.linkedinLabel}
          </a>

          {/* Descargar CV */}
          <button
            onClick={() => setCvModalOpen(true)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-bg-surface text-text-primary border border-border-subtle font-medium px-6 py-3.5 rounded-lg hover:bg-bg-elevated hover:border-violet-mid transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.contact.downloadCV}
          </button>
        </div>

        {/* Cierre */}
        <p className="mt-14 text-text-muted text-[13px]">
          {t.contact.footer} &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  )
}
