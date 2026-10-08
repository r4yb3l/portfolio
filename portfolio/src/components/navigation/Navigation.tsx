import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SECTION_IDS, scrollToSection } from '../../constants'
import { useActiveSection } from '../../hooks/useActiveSection'
import LanguageSelector from './LanguageSelector'
import ThemeToggle from './ThemeToggle'

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    {open ? (
      <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
    ) : (
      <path strokeLinecap="round" d="M4 8h16M4 16h16" />
    )}
  </svg>
)

const Navigation = () => {
  const { t } = useTranslation()
  const active = useActiveSection(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  const go = useCallback((id: string) => {
    setMenuOpen(false)
    scrollToSection(id)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const links = SECTION_IDS.filter((id) => id !== 'hero')

  return (
    <header className="fixed top-0 inset-x-0 z-50 nav-glass border-b border-hairline-soft">
      <nav aria-label={t('a11y.primaryNav')} className="max-w-wide mx-auto h-12 px-4 sm:px-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go('hero')}
          aria-label={t('a11y.home')}
          className="text-sm font-semibold text-ink tracking-tight hover:opacity-70 transition-opacity"
        >
          Raybel Hernández
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((id) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => go(id)}
                aria-current={active === id ? 'true' : undefined}
                className={`text-xs transition-colors ${active === id ? 'text-ink' : 'text-ink-subtle hover:text-ink'}`}
              >
                {t(`navigation.${id}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? t('a11y.closeMenu') : t('a11y.menu')}
            className="btn-utility md:hidden w-11 h-11 text-ink"
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-hairline-soft bg-canvas">
          <ul className="max-w-wide mx-auto px-4 sm:px-6 py-2">
            {links.map((id) => (
              <li key={id} className="border-b border-hairline-soft last:border-0">
                <button
                  type="button"
                  onClick={() => go(id)}
                  className={`w-full text-left py-3 type-tagline ${active === id ? 'text-ink' : 'text-ink-muted'}`}
                >
                  {t(`navigation.${id}`)}
                </button>
              </li>
            ))}
          </ul>
          <div className="max-w-wide mx-auto px-4 sm:px-6 pb-4">
            <LanguageSelector />
          </div>
        </div>
      )}
    </header>
  )
}

export default Navigation
