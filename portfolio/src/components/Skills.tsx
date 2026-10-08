import { useTranslation } from 'react-i18next'
import frontendIcon from '../assets/frontend.svg'
import backendIcon from '../assets/backend.svg'
import mobileIcon from '../assets/mobile.svg'
import cloudIcon from '../assets/cloud.svg'
import toolsIcon from '../assets/tools.svg'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

const groups = [
  { key: 'frontend', icon: frontendIcon },
  { key: 'backend', icon: backendIcon },
  { key: 'mobile', icon: mobileIcon },
  { key: 'cloud', icon: cloudIcon },
  { key: 'tools', icon: toolsIcon },
] as const

const Skills = () => {
  const { t } = useTranslation()

  return (
    <div className="section px-4 sm:px-6">
      <SectionHeader title={t('skills.title')} />
      <div className="max-w-wide mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {groups.map((group, index) => (
          <Reveal key={group.key} delay={(index % 3) * 0.05} className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <img src={group.icon} alt="" className="w-6 h-6 object-contain icon-adaptive" />
              <h3 className="type-tagline text-ink">{t(`skills.${group.key}`)}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {(t(`skills.tags.${group.key}`, { returnObjects: true }) as string[]).map((tag) => (
                <li key={tag} className="chip">
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Skills
