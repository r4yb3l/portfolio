import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import prodevLogo from '../assets/logos/business/prodev.svg'
import netforemostLogo from '../assets/logos/business/netforemost.svg'
import qaBitLogo from '../assets/logos/business/qa-bit.svg'
import astrocodeLogo from '../assets/logos/business/astrocode.svg'

const companies = [
  { key: 'astrocode', logo: astrocodeLogo },
  { key: 'qabit', logo: qaBitLogo },
  { key: 'netforemost', logo: netforemostLogo },
  { key: 'prodev', logo: prodevLogo },
]

const ExperienceTimeline = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="apple-section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold text-apple-dark apple-headline-tight font-apple-display text-center mb-16"
        >
          {t('navigation.experience')}
        </motion.h2>

        <ol className="relative border-l border-hairline ml-5">
          {companies.map((company, index) => (
            <motion.li
              key={company.key}
              id={company.key}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative pl-8 pb-12 last:pb-0 scroll-mt-24"
            >
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-apple-blue ring-4 ring-[color:var(--canvas)]" />
              <div className="flex items-start gap-4">
                <div className="hidden sm:flex w-12 h-12 rounded-xl bg-white border border-apple-line items-center justify-center shrink-0">
                  <img src={company.logo} alt={t(`projects.timeline.${company.key}.name`)} className="w-7 h-7 object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-apple-dark font-apple-display apple-headline-normal">
                    {t(`projects.timeline.${company.key}.name`)}
                    <span className="text-subtle font-normal"> · {t(`projects.timeline.${company.key}.location`)}</span>
                  </h3>
                  <p className="text-sm font-medium text-muted apple-body-text mt-1">
                    {t(`projects.timeline.${company.key}.title`)}
                  </p>
                  <p className="text-xs font-mono text-subtle mt-1.5">
                    {t(`projects.timeline.${company.key}.period`)}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default ExperienceTimeline
