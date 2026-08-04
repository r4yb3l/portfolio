import { motion, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import hollowDemo from '../assets/images/hollow.gif'

const REPO_URL = 'https://github.com/r4yb3l/hollow'
const PUBDEV_URL = 'https://pub.dev/packages/hollow'
const PUB_VERSION = 'v1.0.0'

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

const CodeBlock = () => (
  <div className="rounded-xl bg-[#0f1011] border border-[#23252a] overflow-hidden">
    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#23252a]">
      <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
      <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
      <span className="w-3 h-3 rounded-full bg-[#28c840]" />
    </div>
    <div className="p-4 md:p-5 overflow-x-auto">
      <pre className="font-code text-sm leading-relaxed text-white/90">
        <code>
          <span className="text-[#d2a8ff]">Skeleton</span>
          <span className="text-white/50">(</span>
          <span className="text-[#79c0ff]">name</span>
          <span className="text-white/50">: </span>
          <span className="text-[#7ee787]">'blog-card'</span>
          <span className="text-white/50">, </span>
          <span className="text-[#79c0ff]">loading</span>
          <span className="text-white/50">: </span>
          <span>isLoading</span>
          <span className="text-white/50">, </span>
          <span className="text-[#79c0ff]">child</span>
          <span className="text-white/50">: </span>
          <span className="text-[#d2a8ff]">BlogCard</span>
          <span className="text-white/50">(</span>
          <span className="text-[#79c0ff]">data</span>
          <span className="text-white/50">: </span>
          <span>post</span>
          <span className="text-white/50">))</span>
        </code>
      </pre>
      <pre className="font-code text-sm leading-relaxed mt-4">
        <code>
          <span className="text-[#7ee787] select-none">$ </span>
          <span className="text-white/90">dart run hollow:build </span>
          <span className="text-[#ffa657]">-d</span>
          <span className="text-white/90"> iPhone</span>
        </code>
      </pre>
    </div>
  </div>
)

const HollowCaseStudy = () => {
  const { t } = useTranslation()

  const features = ['shimmer', 'cli', 'darkMode', 'adaptive', 'radius'] as const

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
              {t('openSource.eyebrow')}
            </p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:gap-4">
              <h2 className="text-4xl md:text-6xl font-semibold text-apple-dark apple-headline-tight font-apple-display">
                {t('openSource.name')}
              </h2>
              <p className="text-lg md:text-xl text-apple-gray apple-body-text mt-2 sm:mt-0 sm:pb-1">
                {t('openSource.tagline')}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-5">
              <a
                href={PUBDEV_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-surface-3 text-apple-blue border border-hairline px-3 py-1 text-xs font-medium"
              >
                pub.dev · {PUB_VERSION}
              </a>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-3 text-apple-gray border border-hairline px-3 py-1 text-xs font-medium">
                {t('openSource.license')}
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start mt-10 md:mt-12">
            <div className="space-y-8">
              <motion.div variants={item} className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-apple-gray mb-2">
                    {t('openSource.problemLabel')}
                  </h3>
                  <p className="text-base text-apple-dark apple-body-text leading-relaxed">
                    {t('openSource.problem')}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-apple-blue mb-2">
                    {t('openSource.solutionLabel')}
                  </h3>
                  <p className="text-base text-apple-dark apple-body-text leading-relaxed">
                    {t('openSource.solution')}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-apple-gray mb-4">
                  {t('openSource.featuresLabel')}
                </h3>
                <ul className="space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-base text-apple-dark apple-body-text">
                        {t(`openSource.features.${feature}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div variants={item} className="flex justify-center">
              <img
                src={hollowDemo}
                alt={t('openSource.demoAlt')}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[280px] h-auto rounded-2xl border border-apple-line apple-shadow-sm"
              />
            </motion.div>
          </div>

          <motion.div variants={item} className="mt-10 md:mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-apple-gray mb-4">
              {t('openSource.usageLabel')}
            </h3>
            <CodeBlock />
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
              {t('openSource.cta.github')}
              <span className="text-xs">→</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={PUBDEV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-apple-blue text-white text-base font-normal rounded-lg apple-pill transition-all duration-300"
            >
              {t('openSource.cta.pubdev')}
              <span className="text-xs">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HollowCaseStudy
