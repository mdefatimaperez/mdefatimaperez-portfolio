import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.45, ease: 'easeOut' },
  }),
}

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const [style, setStyle] = useState({
    transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)',
    transition: 'transform 0.15s ease-out',
  })
  const [glare, setGlare] = useState({ opacity: 0, x: '50%', y: '50%' })

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateY = ((x - cx) / cx) * 14
    const rotateX = -((y - cy) / cy) * 10
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: 'transform 0.08s ease-out',
    })
    setGlare({
      opacity: 0.18,
      x: `${(x / rect.width) * 100}%`,
      y: `${(y / rect.height) * 100}%`,
    })
  }

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.4s ease-out',
    })
    setGlare((g) => ({ ...g, opacity: 0 }))
  }

  return (
    <motion.div
      custom={index}
      variants={itemVariant}
      initial="hidden"
      animate="show"
      ref={cardRef}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-2xl border border-border-subtle bg-bg-surface overflow-hidden cursor-default will-change-transform"
    >
      {/* Banner decorativo */}
      <div
        className="relative h-28 w-full overflow-hidden"
        style={{ background: project.gradient }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Orbs decorativos */}
        <div
          className="absolute -top-6 -right-6 w-28 h-28 rounded-full blur-2xl opacity-40"
          style={{ background: project.orb }}
        />
        <div
          className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full blur-2xl opacity-30"
          style={{ background: project.orb2 }}
        />
        {/* Icono central */}
        <span className="absolute inset-0 flex items-center justify-center text-5xl select-none drop-shadow-lg">
          {project.icon}
        </span>
      </div>

      {/* Glare effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl z-10"
        style={{
          background: `radial-gradient(circle 160px at ${glare.x} ${glare.y}, rgba(255,255,255,${glare.opacity}), transparent)`,
          transition: 'opacity 0.2s',
        }}
      />

      {/* Contenido */}
      <div className="p-5">
        <h4 className="text-text-primary font-semibold text-base leading-snug mb-1">
          {project.name}
        </h4>
        <p className="text-text-muted text-[13px] leading-relaxed mb-4">
          {project.desc}
        </p>

        {/* Tags de herramientas */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-bg-elevated text-violet-light border border-border-subtle px-2.5 py-0.5 rounded-full text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link && project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-violet-mid hover:text-violet-hover text-[13px] font-medium transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  )
}
