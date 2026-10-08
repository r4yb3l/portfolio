import { useTranslation } from 'react-i18next'
import profileImg from '../assets/profile.jpeg'
import { companyLogos } from './projects/data'
import { scrollToSection } from '../constants'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className="section px-4 sm:px-6">
      <SectionHeader title={t('about.title')} />
      <div className="max-w-content mx-auto grid md:grid-cols-5 gap-10 md:gap-14 items-start">
        <Reveal className="md:col-span-2 flex justify-center">
          <img
            src={profileImg}
            alt={t('a11y.profileAlt')}
            width={320}
            height={320}
            loading="lazy"
            decoding="async"
            className="w-56 h-56 md:w-full md:h-auto md:max-w-[320px] aspect-square rounded-[18px] object-cover product-shadow"
          />
        </Reveal>

        <Reveal className="md:col-span-3 space-y-5" delay={0.05}>
          <h3 className="type-tagline text-ink">{t('about.subtitle')}</h3>
          <p className="type-body text-ink-muted">{t('about.description1')}</p>
          <p className="type-body text-ink-muted">{t('about.description2')}</p>

          <ul className="flex flex-wrap gap-2 pt-3">
            {companyLogos.map((company) => (
              <li key={company.key}>
                <button
                  type="button"
                  onClick={() => scrollToSection(company.key)}
                  className="btn-utility gap-2 h-11 pl-1.5 pr-4 rounded-full bg-card border border-hairline-soft text-ink-muted hover:text-ink"
                >
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <img src={company.logo} alt="" className="w-5 h-5 object-contain" />
                  </span>
                  {t(`projects.timeline.${company.key}.name`)}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  )
}

export default About
