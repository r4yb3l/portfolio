import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import DotGrid from './DotGrid'

const Hero = () => {
  const ref = useRef(null)
  const { t } = useTranslation()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-apple-black">
        <DotGrid />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(245,78,0,0.13) 0%, rgba(245,78,0,0.05) 35%, transparent 68%)',
          }}
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center text-apple-dark px-4 max-w-3xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-normal mb-6 apple-headline-tight tracking-tight font-apple-display"
        >
          {t('hero.name')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-10 text-muted apple-body-text max-w-xl mx-auto"
        >
          {t('hero.title')}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl mb-12 text-subtle apple-body-text max-w-2xl mx-auto"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-apple-blue rounded-lg text-white font-normal text-base apple-pill transition-all duration-300"
          >
            {t('hero.cta.projects')}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-transparent rounded-lg text-apple-dark font-normal text-base border border-hairline-strong apple-pill transition-all duration-300 hover:border-hairline hover:bg-surface-2"
          >
            {t('hero.cta.contact')}
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-hairline-strong rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-apple-dark rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
