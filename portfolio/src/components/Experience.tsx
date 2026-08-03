import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface ExperienceProps {
  experience: string
  image: string
  title?: string
  link?: string
  inverted?: boolean
  inDevelopment?: boolean
  index?: number
}

const Experience = ({ experience, image, title, link, inverted, inDevelopment, index = 0 }: ExperienceProps) => {
  const { t } = useTranslation()

  return (
    <motion.article
      className={`flex flex-col ${inverted ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-10 items-center rounded-2xl bg-apple-surface border border-apple-line p-6 md:p-8 apple-shadow-sm transition-shadow duration-300 hover:apple-shadow-lg`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.12 }}
      whileHover={{ y: -6 }}
    >
      <div className="w-full md:w-1/2">
        {title && (
          <h3 className="text-2xl md:text-3xl font-normal text-apple-dark font-apple-display apple-headline-normal mb-3">
            {title}
          </h3>
        )}
        <p className="text-apple-dark text-base apple-body-text leading-relaxed mb-4">
          {experience}
        </p>
        {inDevelopment ? (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-apple-blue">
            <span className="w-1.5 h-1.5 rounded-full bg-apple-blue" />
            {t('projects.actions.inDevelopment')}
          </span>
        ) : link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-apple-blue text-sm font-normal hover:underline"
          >
            {t('projects.actions.visitSite')}
            <span className="text-xs">→</span>
          </a>
        ) : (
          <span className="text-sm text-apple-gray italic">
            {t('projects.actions.notAvailable')}
          </span>
        )}
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt="Project screenshot"
          loading="lazy"
          decoding="async"
          className="w-full h-auto rounded-xl"
        />
      </div>
    </motion.article>
  )
}

export default Experience
