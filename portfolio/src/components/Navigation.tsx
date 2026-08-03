import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector'
import { useTheme } from '../theme'

interface NavigationProps {
  scrolled: boolean
}

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      type="button"
      aria-label={theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
      className="w-8 h-8 flex items-center justify-center rounded-lg text-subtle hover:text-apple-dark bg-transparent hover:bg-surface-1 border border-hairline transition-colors"
    >
      {theme === 'dark' ? (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <circle cx="12" cy="12" r="4" />
          <path strokeLinecap="round" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </motion.button>
  )
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
            <span className="block w-2.5 h-2.5 bg-apple-blue rounded-full" />
          </motion.button>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className={`relative text-xs tracking-tight transition-colors duration-300 ${
                  activeSection === item
                    ? 'text-apple-dark font-medium'
                    : 'text-subtle font-normal hover:text-muted'
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
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-subtle hover:text-apple-dark transition-colors p-1"
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
