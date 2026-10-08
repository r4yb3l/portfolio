import { useTranslation } from 'react-i18next'
import tokendialShot from '../../assets/images/tokendial.png'
import CaseStudy from './CaseStudy'
import CodeWindow from './CodeWindow'

const REPO_URL = 'https://github.com/r4yb3l/tokendial'
const SITE_URL = 'https://tokendial.vercel.app'
const RELEASE = 'v0.1.3'
const features = ['dial', 'readOnly', 'natives', 'install', 'alerts', 'languages'] as const

const Key = ({ children }: { children: string }) => <span className="text-[#79c0ff]">"{children}"</span>
const Str = ({ children }: { children: string }) => <span className="text-[#a5d6ff]">"{children}"</span>
const Punct = ({ children }: { children: string }) => <span className="text-white/60">{children}</span>

const SpecCode = () => {
  const { t } = useTranslation()
  return (
    <CodeWindow filename="docs/providers/claude.json" note={t('tokendial.specNote')}>
      <pre className="font-mono text-sm leading-relaxed text-white/90">
        <code>
          <Punct>{'{'}</Punct>
          {'\n  '}
          <Key>credential</Key>
          <Punct>{': { '}</Punct>
          <Key>macos</Key>
          <Punct>: </Punct>
          <Str>keychain</Str>
          <Punct>, </Punct>
          <Key>windows</Key>
          <Punct>: </Punct>
          <Str>file</Str>
          <Punct>, </Punct>
          <Key>linux</Key>
          <Punct>: </Punct>
          <Str>file</Str>
          <Punct>{' },'}</Punct>
          {'\n  '}
          <Key>endpoints</Key>
          <Punct>: [</Punct>
          <Str>https://api.anthropic.com/api/oauth/usage</Str>
          <Punct>],</Punct>
          {'\n  '}
          <Key>install</Key>
          <Punct>{': { '}</Punct>
          <Key>macos</Key>
          <Punct>: </Punct>
          <Str>brew install --cask claude-code</Str>
          <Punct>, </Punct>
          {'\n    '}
          <Key>linux</Key>
          <Punct>: </Punct>
          <Str>curl -fsSL https://claude.ai/install.sh | bash</Str>
          <Punct>{' }'}</Punct>
          {'\n'}
          <Punct>{'}'}</Punct>
        </code>
      </pre>
    </CodeWindow>
  )
}

const TokendialCaseStudy = () => {
  const { t } = useTranslation()

  return (
    <CaseStudy
      namespace="tokendial"
      features={features}
      badges={[
        { label: `macOS · Windows · Linux · ${RELEASE}`, href: `${REPO_URL}/releases/tag/${RELEASE}` },
        { label: t('tokendial.license') },
      ]}
      media={
        <img
          src={tokendialShot}
          alt={t('tokendial.shotAlt')}
          loading="lazy"
          decoding="async"
          width={1120}
          height={860}
          className="w-full h-auto rounded-[18px] product-shadow"
        />
      }
      codeLabel={t('tokendial.specLabel')}
      code={<SpecCode />}
      primaryLink={{ label: t('tokendial.cta.site'), href: SITE_URL }}
      secondaryLink={{ label: t('tokendial.cta.github'), href: REPO_URL }}
    />
  )
}

export default TokendialCaseStudy
