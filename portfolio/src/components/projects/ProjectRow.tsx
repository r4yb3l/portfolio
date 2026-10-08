import { useTranslation } from 'react-i18next'
import Reveal from '../ui/Reveal'
import { ChevronIcon } from '../ui/icons'
import ProjectStatusBadge from './ProjectStatusBadge'
import StackChips from './StackChips'
import type { Project } from './data'

const ProjectFooter = ({ project, title }: { project: Project; title: string }) => {
  const { t } = useTranslation()
  if (project.status) return <ProjectStatusBadge status={project.status} />
  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link type-body">
        {t('projects.actions.visitSite')}
        <span className="sr-only">: {title}</span>
        <ChevronIcon />
      </a>
    )
  }
  return <span className="type-caption text-ink-subtle">{t('projects.actions.notAvailable')}</span>
}

const ProjectRow = ({ project, reverse }: { project: Project; reverse: boolean }) => {
  const { t } = useTranslation()
  const title = t(`projects.entries.${project.key}.title`)

  return (
    <Reveal as="article" className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
      <div className={reverse ? 'lg:order-2' : ''}>
        <h4 className="type-tagline text-ink mb-3">{title}</h4>
        <p className="type-body text-ink-muted mb-5">{t(`projects.entries.${project.key}.description`)}</p>
        <div className="mb-5">
          <StackChips items={project.stack} />
        </div>
        <ProjectFooter project={project} title={title} />
      </div>
      <div className={`overflow-hidden rounded-[18px] bg-card border border-hairline-soft ${reverse ? 'lg:order-1' : ''}`}>
        <img
          src={project.image}
          alt={t('a11y.projectScreenshot', { name: title })}
          loading="lazy"
          decoding="async"
          className="w-full h-56 sm:h-72 lg:h-[24rem] object-cover object-top"
        />
      </div>
    </Reveal>
  )
}

export default ProjectRow
