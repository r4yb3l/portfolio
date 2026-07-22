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
  const intersectingRef = useRef<Map<string, boolean>>(new Map())

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'opensource', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersectingRef.current.set(entry.target.id, entry.isIntersecting)
        }
        const active = sections.find((id) => intersectingRef.current.get(id))
        if (active) setActiveSection(active)
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
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

  const navItems = ['hero', 'about', 'skills', 'projects', 'opensource', 'contact']

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
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className={`relative text-xs tracking-tight transition-colors duration-300 ${
                  activeSection === item
                    ? 'text-white font-medium'
                    : 'text-white/50 font-normal hover:text-white/80'
                }`}
              >
                {t(`navigation.${item}`)}
                {activeSection === item && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-apple-blue"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
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
