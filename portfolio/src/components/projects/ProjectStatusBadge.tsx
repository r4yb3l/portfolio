import { useTranslation } from 'react-i18next'
import type { ProjectStatus } from './data'

const ProjectStatusBadge = ({ status }: { status: ProjectStatus }) => {
  const { t } = useTranslation()
  const dotColor = status === 'cancelled' ? 'bg-ink-subtle' : 'bg-link'

  return (
    <span className="chip gap-2 font-semibold">
      <span aria-hidden="true" className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      {t(`projects.actions.${status}`)}
    </span>
  )
}

export default ProjectStatusBadge
