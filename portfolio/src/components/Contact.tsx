import { useId, useState, type ChangeEvent, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { EMAIL, LOCATION, PHONE } from '../constants'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'
import { MailIcon, PhoneIcon, PinIcon } from './ui/icons'

type Field = 'name' | 'email' | 'message'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const inputClass =
  'w-full min-h-[44px] px-4 py-3 bg-card border border-hairline rounded-[11px] text-ink placeholder:text-ink-subtle type-body focus:outline-none focus:border-link focus-visible:outline-2 focus-visible:outline-[var(--focus)] transition-colors'

const buildMailto = ({ name, email, message }: Record<Field, string>) => {
  const subject = encodeURIComponent(`Portfolio contact — ${name}`)
  const body = encodeURIComponent(`${name} <${email}>\n\n${message}`)
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`
}

const Contact = () => {
  const { t } = useTranslation()
  const formId = useId()
  const errorId = `${formId}-error`
  const [form, setForm] = useState<Record<Field, string>>({ name: '', email: '', message: '' })
  const [hasError, setHasError] = useState(false)

  const handleChange = (field: Field) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() }
    if (!trimmed.name || !EMAIL_PATTERN.test(trimmed.email) || !trimmed.message) {
      setHasError(true)
      return
    }
    setHasError(false)
    window.location.href = buildMailto(trimmed)
  }

  const details = [
    { icon: <MailIcon />, label: t('contact.info.email'), value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: <PhoneIcon />, label: t('contact.info.phone'), value: PHONE, href: `tel:${PHONE.replace(/\s/g, '')}` },
    { icon: <PinIcon />, label: t('contact.info.location'), value: LOCATION },
  ]

  const fields: { key: Field; type: string; autoComplete: string }[] = [
    { key: 'name', type: 'text', autoComplete: 'name' },
    { key: 'email', type: 'email', autoComplete: 'email' },
  ]

  return (
    <div className="section px-4 sm:px-6">
      <SectionHeader title={t('contact.title')} />
      <div className="max-w-content mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
        <Reveal className="space-y-8">
          <div>
            <h3 className="type-tagline text-ink mb-3">{t('contact.subtitle')}</h3>
            <p className="type-body text-ink-muted">{t('contact.description')}</p>
          </div>
          <ul className="space-y-5">
            {details.map((detail) => (
              <li key={detail.label} className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full bg-parchment text-ink-muted flex items-center justify-center shrink-0">
                  {detail.icon}
                </span>
                <div className="min-w-0">
                  <p className="type-caption text-ink-subtle">{detail.label}</p>
                  {detail.href ? (
                    <a href={detail.href} className="text-link type-body break-all">
                      {detail.value}
                    </a>
                  ) : (
                    <p className="type-body text-ink">{detail.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05}>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate aria-describedby={hasError ? errorId : undefined}>
            {fields.map((field) => (
              <div key={field.key}>
                <label htmlFor={`${formId}-${field.key}`} className="block type-caption font-semibold text-ink mb-2">
                  {t(`contact.form.${field.key}`)}
                </label>
                <input
                  id={`${formId}-${field.key}`}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  className={inputClass}
                  placeholder={t(`contact.form.${field.key}Placeholder`)}
                  value={form[field.key]}
                  onChange={handleChange(field.key)}
                  required
                />
              </div>
            ))}
            <div>
              <label htmlFor={`${formId}-message`} className="block type-caption font-semibold text-ink mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id={`${formId}-message`}
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder={t('contact.form.messagePlaceholder')}
                value={form.message}
                onChange={handleChange('message')}
                required
              />
            </div>
            {hasError && (
              <p id={errorId} role="alert" className="type-caption text-[var(--danger)]">
                {t('contact.form.validationError')}
              </p>
            )}
            <button type="submit" className="btn-primary w-full">
              {t('contact.form.submit')}
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  )
}

export default Contact
