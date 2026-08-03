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
        className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 border ${
          i18n.language === 'es'
            ? 'bg-apple-blue text-white border-transparent'
            : 'text-subtle hover:text-apple-dark bg-transparent hover:bg-surface-1 border-hairline hover:border-hairline-strong'
        }`}
      >
        ES
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => changeLanguage('en')}
        className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 border ${
          i18n.language === 'en'
            ? 'bg-apple-blue text-white border-transparent'
            : 'text-subtle hover:text-apple-dark bg-transparent hover:bg-surface-1 border-hairline hover:border-hairline-strong'
        }`}
      >
        EN
      </motion.button>
    </motion.div>
  )
}

export default LanguageSelector
