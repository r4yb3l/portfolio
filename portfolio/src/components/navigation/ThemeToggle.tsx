import { useTranslation } from 'react-i18next'
import { useTheme } from '../../themeContext'

const SunIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path strokeLinecap="round" d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)

const MoonIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
)

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t('a11y.toLight') : t('a11y.toDark')}
      className="btn-utility w-11 h-11 text-ink-muted hover:text-ink"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeToggle
