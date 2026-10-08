import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import Reveal from '../ui/Reveal'
import { CheckIcon, ChevronIcon } from '../ui/icons'

export interface CaseStudyBadge {
  label: string
  href?: string
}

export interface CaseStudyLink {
  label: string
  href: string
}

interface CaseStudyProps {
  namespace: 'openSource' | 'tokendial'
  features: readonly string[]
  badges: CaseStudyBadge[]
  media: ReactNode
  codeLabel: string
  code: ReactNode
  primaryLink: CaseStudyLink
  secondaryLink: CaseStudyLink
}

const Badge = ({ label, href }: CaseStudyBadge) =>
  href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="chip text-link hover:underline">
      {label}
    </a>
  ) : (
    <span className="chip">{label}</span>
  )

const CaseStudy = ({ namespace, features, badges, media, codeLabel, code, primaryLink, secondaryLink }: CaseStudyProps) => {
  const { t } = useTranslation()
  const headingId = `${namespace}-heading`

  return (
    <article aria-labelledby={headingId} className="card p-6 sm:p-10 md:p-14">
      <Reveal>
        <p className="type-eyebrow mb-3">{t(`${namespace}.eyebrow`)}</p>
        <h3 id={headingId} className="type-display text-ink">
          {t(`${namespace}.name`)}
        </h3>
        <p className="type-lead text-ink-muted mt-3 max-w-2xl">{t(`${namespace}.tagline`)}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {badges.map((badge) => (
            <Badge key={badge.label} {...badge} />
          ))}
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start mt-10 md:mt-12">
        <Reveal className="space-y-8">
          <div className="space-y-6">
            <div>
              <h4 className="type-eyebrow mb-2">{t(`${namespace}.problemLabel`)}</h4>
              <p className="type-body text-ink">{t(`${namespace}.problem`)}</p>
            </div>
            <div>
              <h4 className="type-eyebrow mb-2">{t(`${namespace}.solutionLabel`)}</h4>
              <p className="type-body text-ink">{t(`${namespace}.solution`)}</p>
            </div>
          </div>
          <div>
            <h4 className="type-eyebrow mb-4">{t(`${namespace}.featuresLabel`)}</h4>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="type-body text-ink">{t(`${namespace}.features.${feature}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal className="flex justify-center" delay={0.05}>
          {media}
        </Reveal>
      </div>

      <Reveal className="mt-10 md:mt-12">
        <h4 className="type-eyebrow mb-4">{codeLabel}</h4>
        {code}
      </Reveal>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 md:mt-12">
        <a href={primaryLink.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
          {primaryLink.label}
        </a>
        <a href={secondaryLink.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          {secondaryLink.label}
          <ChevronIcon />
        </a>
      </div>
    </article>
  )
}

export default CaseStudy
