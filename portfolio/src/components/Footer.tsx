import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const GITHUB_URL = 'https://github.com/r4yb3l'
const LINKEDIN_URL = 'https://www.linkedin.com/in/r4yb3l/'
const EMAIL = 'raybel.developer@gmail.com'
const CV_AI = '/Raybel-Hernandez-CV-FullStack-AI.pdf'
const CV_FRONTEND = '/Raybel-Hernandez-CV-Frontend.pdf'

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.34.85.01 1.7.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.9H5.67v8.44h2.67zM7 8.67a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.67v-4.63c0-2.47-1.32-3.62-3.08-3.62-1.42 0-2.06.78-2.42 1.33V9.9h-2.67v8.44h2.67v-4.7c0-.25.02-.5.09-.67.2-.5.65-1.01 1.42-1.01 1 0 1.4.76 1.4 1.88v4.5h2.67z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 9 6 9-6" />
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
)

const socials = [
  { href: GITHUB_URL, label: 'GitHub', icon: <GithubIcon /> },
  { href: LINKEDIN_URL, label: 'LinkedIn', icon: <LinkedinIcon /> },
  { href: `mailto:${EMAIL}`, label: 'Email', icon: <MailIcon /> },
]

const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline bg-apple-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="text-2xl font-semibold text-apple-dark font-apple-display apple-headline-tight">
              {t('hero.name')}
            </p>
            <p className="text-sm text-subtle apple-body-text mt-1">{t('hero.title')}</p>
          </div>

          <div className="flex flex-col sm:items-end gap-4">
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 flex items-center justify-center rounded-lg bg-surface-2 border border-hairline text-subtle hover:text-apple-blue hover:border-hairline-strong transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <p className="sr-only">{t('footer.cv')}</p>
              <motion.a
                href={CV_AI}
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 h-11 rounded-lg bg-primary-gradient text-white text-sm font-medium shadow-lg shadow-[#7c3aed]/20"
              >
                <DownloadIcon />
                CV · Full-Stack + AI
              </motion.a>
              <motion.a
                href={CV_FRONTEND}
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 h-11 rounded-lg bg-primary-gradient text-white text-sm font-medium shadow-lg shadow-[#7c3aed]/20"
              >
                <DownloadIcon />
                CV · Frontend
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-hairline flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-subtle">
          <span>© {year} {t('hero.name')}. {t('footer.rights')}</span>
          <span className="font-mono">React · TypeScript · Vite</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
