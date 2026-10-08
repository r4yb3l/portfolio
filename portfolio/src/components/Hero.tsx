import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { CV_FILENAME, CV_URL, scrollToSection } from '../constants'
import { ChevronIcon } from './ui/icons'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const, delay },
})

const Hero = () => {
  const { t } = useTranslation()

  return (
    <div className="min-h-[88svh] flex items-center justify-center px-4 sm:px-6 pt-28 pb-20">
      <div className="max-w-content mx-auto text-center">
        <motion.p {...fadeUp(0)} className="type-tagline text-ink-subtle mb-4">
          {t('hero.title')}
        </motion.p>
        <motion.h1 {...fadeUp(0.05)} className="type-hero text-ink">
          {t('hero.name')}
        </motion.h1>
        <motion.p {...fadeUp(0.1)} className="type-lead text-ink-muted mt-6 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </motion.p>
        <motion.div {...fadeUp(0.15)} className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <button type="button" onClick={() => scrollToSection('projects')} className="btn-primary w-full sm:w-auto">
            {t('hero.cta.projects')}
          </button>
          <button type="button" onClick={() => scrollToSection('contact')} className="btn-secondary w-full sm:w-auto">
            {t('hero.cta.contact')}
          </button>
        </motion.div>
        <motion.div {...fadeUp(0.2)} className="mt-6">
          <a href={CV_URL} download={CV_FILENAME} className="text-link type-body">
            {t('hero.cta.cv')}
            <ChevronIcon />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
