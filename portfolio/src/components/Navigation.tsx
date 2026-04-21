import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

interface NavigationProps {
  scrolled: boolean
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('hero')
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
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

  const navItems = ['hero', 'about', 'skills', 'projects', 'contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 h-12 flex items-center transition-all duration-500 ${
        scrolled
          ? 'apple-nav-glass'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="flex justify-between items-center h-full">
          <motion.button
            whileHover={{ opacity: 0.7 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('hero')}
            className="w-6 h-6 flex items-center justify-center"
            aria-label="Ir al inicio"
            type="button"
          >
            <span className="block w-2.5 h-2.5 bg-white rounded-full" />
          </motion.button>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ opacity: 0.7 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className={`text-xs font-normal tracking-tight transition-opacity duration-300 ${
                  activeSection === item
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {t(`navigation.${item}`)}
              </motion.button>
            ))}
            <LanguageSelector />
          </div>

          <div className="md:hidden">
            <button
              className="text-white/70 hover:text-white transition-colors p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
