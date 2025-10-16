import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import Experience from './Experience'
import profile from '../assets/profile.jpeg'

const Experiences = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const { t } = useTranslation()

  return (
    <section id="experience" className="min-h-screen py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">{t('experience.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto"></div>
        </motion.div>

        <div className="w-full" style={{width: '80%', margin: '0 auto'}}>
          <Experience 
            experience="This is a mock experience to test the component. It should be a brief description of the experience."
            image={profile}
            link="https://www.google.com"
          />
        </div>
      </div>
    </section>
  )
}

export default Experiences
