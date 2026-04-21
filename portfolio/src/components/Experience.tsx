import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface ExperienceProps {
  experience: string
  image: string
  link?: string
  inverted?: boolean
  inDevelopment?: boolean
}

const Experience = ({ experience, image, link, inverted, inDevelopment }: ExperienceProps) => {
  const { t } = useTranslation()

  return (
    <motion.div
      className={`flex flex-col ${inverted ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full md:w-1/2">
        <p className="text-apple-dark text-base apple-body-text leading-relaxed mb-4">
          {experience}
        </p>
        {inDevelopment ? (
          <span className="text-sm font-medium text-apple-blue">
            En desarrollo
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
          <span className="text-sm text-apple-dark/40 italic">
            {t('projects.actions.notAvailable')}
          </span>
        )}
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt="Project screenshot"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </motion.div>
  )
}

export default Experience
