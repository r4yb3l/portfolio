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

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useTranslation()
  const title = t(`projects.entries.${project.key}.title`)

  return (
    <Reveal as="article" className="card p-6 sm:p-8 flex flex-col">
      <h4 className="type-tagline text-ink mb-3 text-balance">{title}</h4>
      <p className="type-body text-ink-muted mb-5 text-pretty">{t(`projects.entries.${project.key}.description`)}</p>
      <div className="mb-5">
        <StackChips items={project.stack} />
      </div>
      <div className="mt-auto">
        <ProjectFooter project={project} title={title} />
      </div>
    </Reveal>
  )
}

export default ProjectCard
