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
    { title: t('skills.frontend'), tags: t('skills.tags.frontend', { returnObjects: true }) as string[], color: 'from-red-500 to-orange-500' },
    { title: t('skills.backend'), tags: t('skills.tags.backend', { returnObjects: true }) as string[], color: 'from-orange-500 to-yellow-500' },
    { title: 'Mobile', tags: t('skills.tags.mobile', { returnObjects: true }) as string[], color: 'from-yellow-500 to-red-500' },
    { title: t('skills.cloud'), tags: t('skills.tags.cloud', { returnObjects: true }) as string[], color: 'from-pink-500 to-red-500' },
    { title: 'Tools', tags: t('skills.tags.tools', { returnObjects: true }) as string[], color: 'from-purple-500 to-pink-500' },
  ]
  const icons = [frontendIcon, backendIcon, mobileIcon, cloudIcon, toolsIcon]

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">{t('skills.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto"></div>
        </motion.div>

        <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm p-4 md:p-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            {tagGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm shadow-2xl hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-shadow duration-300 h-[400px] flex flex-col"
              >
                <div className="w-[125px] h-[125px] mx-auto pb-5 flex items-center justify-center">
                  <img src={icons[index]} alt="icon" className="w-full h-full object-contain invert drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]" />
                </div>
                <h3 className="font-bold text-white mb-3 mt-4">{group.title}</h3>
                <ul className="space-y-1 text-white/90 overflow-auto pr-1">
                  {group.tags.map((tag) => (
                    <li key={tag} className="leading-relaxed">{tag}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
