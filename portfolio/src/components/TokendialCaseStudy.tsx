import { motion, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import tokendialShot from '../assets/images/tokendial.png'

const REPO_URL = 'https://github.com/r4yb3l/tokendial'
const SITE_URL = 'https://tokendial.vercel.app'
const RELEASE = 'v0.1.3'

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const CheckIcon = () => (
  <svg
    className="w-5 h-5 flex-shrink-0 text-apple-blue"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
      clipRule="evenodd"
    />
  </svg>
)

/** One shared JSON specification, three native apps: the shape of the project in one picture. */
const SpecDiagram = () => {
  const { t } = useTranslation()
  return (
    <div className="rounded-xl bg-[#0f1011] border border-[#23252a] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#23252a]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-code text-xs text-white/40">docs/providers/claude.json</span>
      </div>
      <div className="p-4 md:p-5 overflow-x-auto">
        <pre className="font-code text-sm leading-relaxed text-white/90">
          <code>
            <span className="text-white/50">{'{'}</span>
            {'\n  '}
            <span className="text-[#79c0ff]">"credential"</span>
            <span className="text-white/50">: {'{'} </span>
            <span className="text-[#79c0ff]">"macos"</span>
            <span className="text-white/50">: </span>
            <span className="text-[#a5d6ff]">"keychain"</span>
            <span className="text-white/50">, </span>
            <span className="text-[#79c0ff]">"windows"</span>
            <span className="text-white/50">: </span>
            <span className="text-[#a5d6ff]">"file"</span>
            <span className="text-white/50">, </span>
            <span className="text-[#79c0ff]">"linux"</span>
            <span className="text-white/50">: </span>
            <span className="text-[#a5d6ff]">"file"</span>
            <span className="text-white/50"> {'}'},</span>
            {'\n  '}
            <span className="text-[#79c0ff]">"endpoints"</span>
            <span className="text-white/50">: [</span>
            <span className="text-[#a5d6ff]">"https://api.anthropic.com/api/oauth/usage"</span>
            <span className="text-white/50">],</span>
            {'\n  '}
            <span className="text-[#79c0ff]">"install"</span>
            <span className="text-white/50">: {'{'} </span>
            <span className="text-[#79c0ff]">"macos"</span>
            <span className="text-white/50">: </span>
            <span className="text-[#a5d6ff]">"brew install --cask claude-code"</span>
            <span className="text-white/50">, </span>
            {'\n    '}
            <span className="text-[#79c0ff]">"linux"</span>
            <span className="text-white/50">: </span>
            <span className="text-[#a5d6ff]">"curl -fsSL https://claude.ai/install.sh | bash"</span>
            <span className="text-white/50"> {'}'}</span>
            {'\n'}
            <span className="text-white/50">{'}'}</span>
          </code>
        </pre>
        <p className="mt-4 font-code text-xs text-white/40">{t('tokendial.specNote')}</p>
      </div>
    </div>
  )
}

const TokendialCaseStudy = () => {
  const { t } = useTranslation()

  const features = ['dial', 'readOnly', 'natives', 'install', 'alerts', 'languages'] as const

  return (
    <section className="apple-section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="rounded-3xl bg-apple-surface border border-apple-line apple-shadow-lg p-6 sm:p-10 md:p-14"
        >
          <motion.div variants={item}>
            <p className="text-xs font-semibold uppercase tracking-widest text-apple-blue mb-3">
              {t('tokendial.eyebrow')}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:gap-4">
              <h2 className="text-4xl md:text-6xl font-semibold text-apple-dark apple-headline-tight font-apple-display">
                {t('tokendial.name')}
              </h2>
              <p className="text-lg md:text-xl text-apple-gray apple-body-text mt-2 sm:mt-0 sm:pb-1">
                {t('tokendial.tagline')}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              <a
                href={`${REPO_URL}/releases/tag/${RELEASE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-surface-3 text-apple-blue border border-hairline px-3 py-1 text-xs font-medium"
              >
                macOS · Windows · Linux · {RELEASE}
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-3 text-apple-gray border border-hairline px-3 py-1 text-xs font-medium">
                {t('tokendial.license')}
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start mt-10 md:mt-12">
            <div className="space-y-8">
              <motion.div variants={item} className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-apple-gray mb-2">
                    {t('tokendial.problemLabel')}
                  </h3>
                  <p className="text-base text-apple-dark apple-body-text leading-relaxed">
                    {t('tokendial.problem')}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-apple-blue mb-2">
                    {t('tokendial.solutionLabel')}
                  </h3>
                  <p className="text-base text-apple-dark apple-body-text leading-relaxed">
                    {t('tokendial.solution')}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-apple-gray mb-4">
                  {t('tokendial.featuresLabel')}
                </h3>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-base text-apple-dark apple-body-text">
                        {t(`tokendial.features.${feature}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={item} className="flex justify-center">
              <img
                src={tokendialShot}
                alt={t('tokendial.shotAlt')}
                loading="lazy"
                decoding="async"
                width={1120}
                height={860}
                className="w-full h-auto rounded-2xl border border-apple-line apple-shadow-sm"
              />
            </motion.div>
          </div>

          <motion.div variants={item} className="mt-10 md:mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-apple-gray mb-4">
              {t('tokendial.specLabel')}
            </h3>
            <SpecDiagram />
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-apple-surface text-apple-dark text-base font-normal rounded-lg apple-pill border border-apple-line transition-all duration-300"
            >
              {t('tokendial.cta.github')}
              <span className="text-xs">→</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-apple-blue text-white text-base font-normal rounded-lg apple-pill transition-all duration-300"
            >
              {t('tokendial.cta.site')}
              <span className="text-xs">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TokendialCaseStudy
