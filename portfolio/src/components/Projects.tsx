import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import Experience from './Experience'
import prodevLogo from '../assets/logos/business/prodev.svg'
import ntsprintLogo from '../assets/logos/business/ntsprint.svg'
import snapnfundImage from '../assets/images/snapnfund.png'
import dealerslashImage from '../assets/images/dealerslash.png'
import automedicImage from '../assets/images/automedic.png'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const { t } = useTranslation()

  return (
    <section id="projects" className="min-h-screen py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">{t('projects.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto"></div>
        </motion.div>

        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-white/20 backdrop-blur-sm rounded-2xl px-6 py-4">
            <div className="w-14 h-14 rounded-full border border-white/40 bg-white flex items-center justify-center">
              <img
                src={prodevLogo}
                alt="ProDev Solutions LLC logo"
                className="w-10 h-10 object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">
                {t('projects.timeline.prodev.name')}
              </h3>
              <p className="text-sm text-gray-300">
                {t('projects.timeline.prodev.period')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.snapnfund.description')}
          image={snapnfundImage}
          link="https://snapnfund.com/home"
        />
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.dealerslash.description')}
          image={dealerslashImage}
          inverted
        />
      </div>

      <div className="flex justify-center px-4 mb-12">
        <div className="flex items-center gap-4 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-white/20 backdrop-blur-sm rounded-2xl px-6 py-4">
          <div className="w-14 h-14 rounded-full border border-white/40 bg-white flex items-center justify-center">
            <img
              src={ntsprintLogo}
              alt="NTSprint logo"
              className="w-10 h-10 object-contain rounded-full"
            />
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">
              {t('projects.timeline.ntsprint.name')}
            </h3>
            <p className="text-sm text-gray-300">
              {t('projects.timeline.ntsprint.period')}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.automedic.description')}
          image={automedicImage}
        />
      </div>
    </section>
  )
}

export default Projects
