import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import profileImg from '../assets/profile.jpeg'
import prodevLogo from '../assets/logos/business/prodev.svg'
import ntsprintLogo from '../assets/logos/business/ntsprint.svg'
import netforemostLogo from '../assets/logos/business/netforemost.svg'
import qaBitLogo from '../assets/logos/business/qa-bit.svg'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { t } = useTranslation()

  const companies = [
    { logo: prodevLogo, alt: 'ProDev Solutions LLC logo', name: t('projects.timeline.prodev.name'), target: 'prodev' },
    { logo: ntsprintLogo, alt: 'NTSprint logo', name: t('projects.timeline.ntsprint.name'), target: 'ntsprint' },
    { logo: netforemostLogo, alt: 'NetForemost logo', name: t('projects.timeline.netforemost.name'), target: 'netforemost' },
    { logo: qaBitLogo, alt: 'Quality on Bit logo', name: t('projects.timeline.qabit.name'), target: 'qabit' },
  ]

  const handleScroll = (target: string) => {
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="about" className="min-h-screen py-12 relative">
      {/* Container sin fondo - scrollea sobre el iridiscente */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto"></div>
        </motion.div>

        <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm p-4 md:p-6 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-white">
                {t('about.subtitle')}
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                {t('about.description1')}
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                {t('about.description2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative overflow-visible"
            >
              <div className="w-full flex flex-col items-center gap-6 py-2 md:py-3">
                <div className="text-center relative">
                  <img
                    src={profileImg}
                    alt="Foto de perfil de Raybel"
                    className="w-56 h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 mx-auto mb-4 rounded-full object-cover shadow-2xl ring-2 ring-white/20"
                  />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                  {companies.map((company) => (
                    <button
                      key={company.name}
                      type="button"
                      onClick={() => handleScroll(company.target)}
                      className="flex flex-col items-center justify-center gap-2 bg-black/20 border border-white/20 rounded-xl px-4 py-3 backdrop-blur-sm transition-transform hover:scale-105"
                    >
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <img src={company.logo} alt={company.alt} className="w-8 h-8 object-contain" />
                      </div>
                      <p className="text-sm text-white text-center font-medium">
                        {company.name}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
