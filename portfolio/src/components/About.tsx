import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import profileImg from '../assets/profile.jpeg'
import prodevLogo from '../assets/logos/business/prodev.svg'
import netforemostLogo from '../assets/logos/business/netforemost.svg'
import qaBitLogo from '../assets/logos/business/qa-bit.svg'
import astrocodeLogo from '../assets/logos/business/astrocode.svg'

const About = () => {
  const [ref2, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { t } = useTranslation()

  const companies = [
    { logo: prodevLogo, alt: 'ProDev Solutions LLC logo', name: t('projects.timeline.prodev.name'), target: 'prodev' },
    { logo: netforemostLogo, alt: 'NetForemost logo', name: t('projects.timeline.netforemost.name'), target: 'netforemost' },
    { logo: qaBitLogo, alt: 'QA-BIT logo', name: t('projects.timeline.qabit.name'), target: 'qabit' },
    { logo: astrocodeLogo, alt: 'AstroCode Labs logo', name: t('projects.timeline.astrocode.name'), target: 'astrocode' },
  ]

  const handleScroll = (target: string) => {
    const element = document.getElementById(target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="apple-section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 flex justify-center md:justify-start"
          >
            <img
              src={profileImg}
              alt="Foto de perfil de Raybel"
              loading="lazy"
              decoding="async"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover apple-card-shadow"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl font-normal text-apple-dark font-apple-display apple-headline-normal">
              {t('about.subtitle')}
            </h3>
            <p className="text-base text-muted apple-body-text leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-base text-muted apple-body-text leading-relaxed">
              {t('about.description2')}
            </p>

            <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
              {companies.map((company) => (
                <button
                  key={company.name}
                  type="button"
                  onClick={() => handleScroll(company.target)}
                  className="flex items-center gap-2 bg-apple-surface rounded-lg px-4 py-3 border border-apple-line transition-all duration-300 hover:bg-surface-3 hover:-translate-y-0.5 hover:border-hairline-strong"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <img src={company.logo} alt={company.alt} className="w-6 h-6 object-contain" />
                  </div>
                  <span className="text-sm text-muted font-normal">
                    {company.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
