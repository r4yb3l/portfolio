import { useTranslation } from 'react-i18next'

const languages = ['es', 'en'] as const

const LanguageSelector = () => {
  const { i18n, t } = useTranslation()
  const current = i18n.resolvedLanguage

  return (
    <div role="group" aria-label={t('a11y.language')} className="flex items-center rounded-lg bg-[var(--chip)] p-0.5">
      {languages.map((lng) => (
        <button
          key={lng}
          type="button"
          lang={lng}
          aria-pressed={current === lng}
          onClick={() => i18n.changeLanguage(lng)}
          className={`btn-utility h-7 min-w-[36px] px-2 text-xs font-semibold uppercase ${
            current === lng ? 'bg-card text-ink shadow-[0_0_0_1px_var(--hairline-soft)]' : 'text-ink-subtle hover:text-ink'
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  )
}

export default LanguageSelector
