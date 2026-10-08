import { useTranslation } from 'react-i18next'
import { CV_FILENAME, CV_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from '../constants'
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from './ui/icons'

const socials = [
  { href: GITHUB_URL, label: 'GitHub', icon: <GithubIcon />, external: true },
  { href: LINKEDIN_URL, label: 'LinkedIn', icon: <LinkedinIcon />, external: true },
  { href: `mailto:${EMAIL}`, label: 'Email', icon: <MailIcon />, external: false },
]

const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-parchment border-t border-hairline-soft">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="type-tagline text-ink">{t('hero.name')}</p>
            <p className="type-caption text-ink-subtle mt-1">{t('hero.title')}</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <ul className="flex items-center gap-1" aria-label={t('footer.connect')}>
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...(social.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={social.label}
                    className="btn-utility w-11 h-11 text-ink-muted hover:text-ink"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
            <a href={CV_URL} download={CV_FILENAME} className="btn-primary">
              <DownloadIcon />
              {t('footer.cv')}
              <span className="sr-only"> (PDF)</span>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-hairline-soft flex flex-col sm:flex-row sm:justify-between gap-2 text-xs text-ink-subtle">
          <span>
            © {year} {t('hero.name')}. {t('footer.rights')}
          </span>
          <span>React · TypeScript · Vite</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
