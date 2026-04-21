import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import frontendIcon from '../assets/frontend.svg'
import backendIcon from '../assets/backend.svg'
import mobileIcon from '../assets/mobile.svg'
import cloudIcon from '../assets/cloud.svg'
import toolsIcon from '../assets/tools.svg'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const { t } = useTranslation()

  const tagGroups = [
    { title: t('skills.frontend'), tags: t('skills.tags.frontend', { returnObjects: true }) as string[] },
    { title: t('skills.backend'), tags: t('skills.tags.backend', { returnObjects: true }) as string[] },
    { title: 'Mobile', tags: t('skills.tags.mobile', { returnObjects: true }) as string[] },
    { title: t('skills.cloud'), tags: t('skills.tags.cloud', { returnObjects: true }) as string[] },
    { title: 'Tools', tags: t('skills.tags.tools', { returnObjects: true }) as string[] },
  ]
  const icons = [frontendIcon, backendIcon, mobileIcon, cloudIcon, toolsIcon]

  return (
    <section className="apple-section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white apple-headline-tight font-apple-display">
            {t('skills.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {tagGroups.map((group, index) => (
            <motion.div
              key={group.title}
              ref={index === 0 ? ref : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="p-8 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <img
                  src={icons[index]}
                  alt={group.title}
                  className="w-full h-full object-contain invert"
                />
              </div>
              <h3 className="font-semibold text-white text-center mb-5 text-base font-apple-display">
                {group.title}
              </h3>
              <ul className="space-y-2 text-center">
                {group.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-sm text-white/70 apple-body-text"
                  >
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
