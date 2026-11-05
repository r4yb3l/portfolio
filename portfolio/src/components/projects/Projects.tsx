import { useTranslation } from 'react-i18next'
import SectionHeader from '../ui/SectionHeader'
import Reveal from '../ui/Reveal'
import Flagship from './Flagship'
import ProjectCard from './ProjectCard'
import { companies, type Company } from './data'

const CompanyGroup = ({ company }: { company: Company }) => {
  const { t } = useTranslation()
  const base = `projects.timeline.${company.key}`

  return (
    <section id={company.key} aria-labelledby={`${company.key}-heading`} className="scroll-mt-20">
      <Reveal className="flex items-center gap-4 pb-6 mb-10 border-b border-hairline-soft">
        <span className="w-14 h-14 rounded-[11px] bg-white border border-hairline-soft flex items-center justify-center shrink-0">
          <img src={company.logo} alt="" className="w-8 h-8 object-contain" />
        </span>
        <div className="min-w-0">
          <h3 id={`${company.key}-heading`} className="type-tagline text-ink">
            {t(`${base}.name`)}
            <span className="font-normal text-ink-subtle"> · {t(`${base}.location`)}</span>
          </h3>
          <p className="type-caption text-ink-muted">{t(`${base}.title`)}</p>
          <p className="type-caption text-ink-subtle">{t(`${base}.period`)}</p>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
        {company.projects.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </section>
  )
}

const Projects = () => {
  const { t } = useTranslation()

  return (
    <div className="section px-4 sm:px-6">
      <SectionHeader title={t('projects.title')} />
      <div className="max-w-wide mx-auto">
        <Flagship />
        <div className="mt-20 md:mt-28 space-y-20 md:space-y-28">
          {companies.map((company) => (
            <CompanyGroup key={company.key} company={company} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
