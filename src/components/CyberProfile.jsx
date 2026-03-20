import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'
import ProjectCard from './ProjectCard'

const LINKEDIN_CERTS_URL = 'https://www.linkedin.com/in/mariadefatimaperez/details/certifications/'

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
}

export default function CyberProfile() {
  const { t } = useLang()
  const { badges, certs, projects } = t.cyber

  return (
    <div className="space-y-14">
      {/* Especialización */}
      <section>
        <SectionTitle label={t.cyber.specTitle} />
        <div className="flex flex-wrap gap-2.5 mt-4">
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              custom={i}
              variants={itemVariant}
              initial="hidden"
              animate="show"
              className="bg-bg-elevated text-violet-light border border-border-subtle px-4 py-1.5 rounded-[20px] text-sm font-medium"
            >
              {badge}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Proyectos */}
      <section>
        <SectionTitle label={t.cyber.projectsTitle} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Certificaciones */}
      <section>
        <SectionTitle label={t.cyber.certsTitle} />
        <div className="space-y-3 mt-5">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              custom={i}
              variants={itemVariant}
              initial="hidden"
              animate="show"
              className="bg-bg-surface rounded-xl p-5 border border-border-subtle flex items-center gap-4"
            >
              <span className="text-2xl shrink-0">{cert.icon}</span>
              <div className="flex-1 min-w-0">
                <h4 className="text-text-primary font-medium text-sm leading-snug">{cert.name}</h4>
                <p className="text-text-muted text-[13px] mt-0.5">{cert.org}</p>
              </div>
              <span className="shrink-0 bg-bg-elevated text-violet-mid border border-border-subtle text-[13px] font-medium px-3 py-1 rounded-[20px]">
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>
        <motion.div
          custom={certs.length}
          variants={itemVariant}
          initial="hidden"
          animate="show"
          className="mt-4 text-right"
        >
          <a
            href={LINKEDIN_CERTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-violet-mid hover:text-violet-hover text-sm font-medium transition-colors"
          >
            {t.cyber.viewMore}
          </a>
        </motion.div>
      </section>
    </div>
  )
}

function SectionTitle({ label }) {
  return (
    <h3 className="text-base font-medium text-violet-mid flex items-center gap-2 before:content-[''] before:w-1 before:h-4 before:rounded-full before:bg-violet-cta">
      {label}
    </h3>
  )
}
