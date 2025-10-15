import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

interface ExperienceProps {
  experience: string
  image: string
  link?: string
  inverted?: boolean
}

const Experience = ({ experience, image, link, inverted }: ExperienceProps) => {
  const { t } = useTranslation()

  return (
    <motion.div
      className={`rounded-2xl border border-white/20 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm p-8 mb-8 w-full md:w-[85vw] lg:w-[75vw] mx-auto flex flex-col md:flex-row ${inverted ? 'md:flex-row-reverse' : ''} md:items-center gap-8`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full md:w-1/2 px-4">
        <p className="text-white text-lg">{experience}</p>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors"
          >
            {t('projects.actions.visitSite')}
          </a>
        ) : (
          <span className="mt-4 inline-block text-white/70 italic">
            {t('projects.actions.notAvailable')}
          </span>
        )}
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img src={image} alt="Experience" className="w-full h-auto rounded-lg" />
      </div>
    </motion.div>
  )
}

export default Experience
