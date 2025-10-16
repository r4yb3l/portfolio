import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-transparent backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto pl-4 pr-0 sm:pl-6 lg:pl-8">
        <div className="flex justify-between items-center h-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
            className="px-4 py-2 rounded-xl bg-black/20 backdrop-blur-md border border-white/10 shadow-lg"
            aria-label="Ir al inicio"
            type="button"
          >
            <img
              src="/src/assets/logos/logo-alt.svg"
              alt="Raybel Hernandez Logo"
              className="w-8 h-8 object-contain"
            />
          </motion.button>
          
          <div className="hidden md:flex space-x-4 items-center">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className={`text-white/90 hover:text-white transition-all duration-300 capitalize px-4 py-2 rounded-xl backdrop-blur-md border shadow-lg hover:shadow-xl ${
                  activeSection === item
                    ? 'bg-red-900/40 border-red-500/50 text-white'
                    : 'bg-black/20 hover:bg-black/30 border-white/10 hover:border-white/30'
                }`}
              >
                {t(`navigation.${item}`)}
              </motion.button>
            ))}
            <LanguageSelector />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white px-3 py-2 rounded-xl bg-black/20 backdrop-blur-md border border-white/10 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
