import { useTranslation } from 'react-i18next'
import hollowDemo from '../../assets/images/hollow.gif'
import CaseStudy from './CaseStudy'
import CodeWindow from './CodeWindow'

const REPO_URL = 'https://github.com/r4yb3l/hollow'
const PUBDEV_URL = 'https://pub.dev/packages/hollow'
const PUB_VERSION = 'v1.0.0'
const features = ['shimmer', 'cli', 'darkMode', 'adaptive', 'radius'] as const

const HollowCode = () => (
  <CodeWindow>
    <pre className="font-mono text-sm leading-relaxed text-white/90">
      <code>
        <span className="text-[#d2a8ff]">Skeleton</span>
        <span className="text-white/60">(</span>
        <span className="text-[#79c0ff]">name</span>
        <span className="text-white/60">: </span>
        <span className="text-[#7ee787]">'blog-card'</span>
        <span className="text-white/60">, </span>
        <span className="text-[#79c0ff]">loading</span>
        <span className="text-white/60">: </span>
        <span>isLoading</span>
        <span className="text-white/60">, </span>
        <span className="text-[#79c0ff]">child</span>
        <span className="text-white/60">: </span>
        <span className="text-[#d2a8ff]">BlogCard</span>
        <span className="text-white/60">(</span>
        <span className="text-[#79c0ff]">data</span>
        <span className="text-white/60">: </span>
        <span>post</span>
        <span className="text-white/60">))</span>
      </code>
    </pre>
    <pre className="font-mono text-sm leading-relaxed mt-4">
      <code>
        <span className="text-[#7ee787] select-none">$ </span>
        <span className="text-white/90">dart run hollow:build </span>
        <span className="text-[#ffa657]">-d</span>
        <span className="text-white/90"> iPhone</span>
      </code>
    </pre>
  </CodeWindow>
)

const HollowCaseStudy = () => {
  const { t } = useTranslation()

  return (
    <CaseStudy
      namespace="openSource"
      features={features}
      badges={[{ label: `pub.dev · ${PUB_VERSION}`, href: PUBDEV_URL }, { label: t('openSource.license') }]}
      media={
        <img
          src={hollowDemo}
          alt={t('openSource.demoAlt')}
          loading="lazy"
          decoding="async"
          className="w-full max-w-[280px] h-auto rounded-[18px] product-shadow"
        />
      }
      codeLabel={t('openSource.usageLabel')}
      code={<HollowCode />}
      primaryLink={{ label: t('openSource.cta.pubdev'), href: PUBDEV_URL }}
      secondaryLink={{ label: t('openSource.cta.github'), href: REPO_URL }}
    />
  )
}

export default HollowCaseStudy
