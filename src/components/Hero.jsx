import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  const { t } = useLang()

  const scrollToProfile = () => {
    document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid decorativo de fondo */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--border-subtle) 1px, transparent 1px), linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow ambiental */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-cta/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-hover/6 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Título principal — stagger 1 */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-4 leading-none text-text-white"
        >
          Maria de Fatima
          <span className="block bg-gradient-to-r from-violet-mid to-violet-light bg-clip-text text-transparent">
            Perez
          </span>
        </motion.h1>

        {/* Subtítulo — stagger 2 */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl md:text-2xl text-text-primary font-medium mb-6"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Frase de impacto — stagger 3 */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg text-text-muted italic mb-12"
        >
          {t.hero.tagline}
        </motion.p>

        {/* CTA — stagger 4 */}
        <motion.button
          variants={fadeUp}
          onClick={scrollToProfile}
          className="inline-flex items-center gap-2 bg-violet-cta hover:bg-violet-hover text-text-white font-semibold px-8 py-3.5 rounded-lg text-base transition-colors"
        >
          {t.hero.cta}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  )
}
