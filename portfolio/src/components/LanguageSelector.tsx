import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const LanguageSelector = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex space-x-2"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeLanguage('es')}
        className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all duration-300 border shadow-lg ${
          i18n.language === 'es'
            ? 'bg-white text-blue-600 border-blue-400/60'
            : 'text-white/80 hover:text-white bg-black/20 hover:bg-black/30 border-white/10 hover:border-white/30'
        }`}
      >
        ES
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeLanguage('en')}
        className={`px-4 py-1.5 rounded-xl text-sm font-semibold transition-all duration-300 border shadow-lg ${
          i18n.language === 'en'
            ? 'bg-white text-blue-600 border-blue-400/60'
            : 'text-white/80 hover:text-white bg-black/20 hover:bg-black/30 border-white/10 hover:border-white/30'
        }`}
      >
        EN
      </motion.button>
    </motion.div>
  )
}

export default LanguageSelector
