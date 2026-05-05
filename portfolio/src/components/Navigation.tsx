import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'

interface NavigationProps {
  scrolled: boolean
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const [activeSection, setActiveSection] = useState('hero')
  const { t } = useTranslation()
  const sectionElementsRef = useRef<Map<string, IntersectionObserverEntry>>(new Map())

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          sectionElementsRef.current.set(entry.target.id, entry)
        }
        let topVisible = ''
        let topRatio = 0
        sectionElementsRef.current.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > topRatio) {
            topRatio = entry.intersectionRatio
            topVisible = entry.target.id
          }
        })
        if (topVisible) {
          setActiveSection(topVisible)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
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
