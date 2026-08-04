import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import frontendIcon from '../assets/frontend.svg'
import backendIcon from '../assets/backend.svg'
import mobileIcon from '../assets/mobile.svg'
import cloudIcon from '../assets/cloud.svg'
import toolsIcon from '../assets/tools.svg'

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { t } = useTranslation()

  const groups = [
    { title: t('skills.frontend'), icon: frontendIcon, tags: t('skills.tags.frontend', { returnObjects: true }) as string[] },
    { title: t('skills.backend'), icon: backendIcon, tags: t('skills.tags.backend', { returnObjects: true }) as string[] },
    { title: 'Mobile', icon: mobileIcon, tags: t('skills.tags.mobile', { returnObjects: true }) as string[] },
    { title: t('skills.cloud'), icon: cloudIcon, tags: t('skills.tags.cloud', { returnObjects: true }) as string[] },
    { title: 'Tools', icon: toolsIcon, tags: t('skills.tags.tools', { returnObjects: true }) as string[] },
  ]

  return (
    <section className="apple-section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold text-apple-dark apple-headline-tight font-apple-display text-center mb-14"
        >
          {t('skills.title')}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="rounded-2xl bg-apple-surface border border-apple-line p-6 transition-colors duration-300 hover:border-hairline-strong"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-surface-3 border border-hairline flex items-center justify-center shrink-0">
                  <img src={group.icon} alt="" className="w-6 h-6 object-contain icon-adaptive" />
                </div>
                <h3 className="text-lg font-medium text-apple-dark font-apple-display">{group.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <li key={tag} className="text-xs font-mono text-subtle bg-surface-3 border border-hairline rounded-md px-2.5 py-1.5">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
