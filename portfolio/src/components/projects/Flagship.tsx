import { useTranslation } from 'react-i18next'
import Reveal from '../ui/Reveal'
import ProjectStatusBadge from './ProjectStatusBadge'
import StackChips from './StackChips'

const pipeline = ['CV', 'LLM parse', 'Embed', 'pgvector', 'LLM rerank', 'Match']
const mergejobStack = ['Next.js', 'Supabase', 'Cloudflare Workers', 'pgvector', 'LLMs', 'Stripe']

const Flagship = () => {
  const { t } = useTranslation()

  return (
    <Reveal as="article" className="card overflow-hidden">
      <div className="p-6 sm:p-10 max-w-3xl">
        <p className="type-eyebrow mb-3">
          {t('projects.flagship')} · {t('projects.flagshipTag')}
        </p>
        <h3 className="type-display text-ink mb-4">{t('projects.entries.mergejob.title')}</h3>
        <p className="type-body text-ink-muted mb-6">{t('projects.entries.mergejob.description')}</p>

        <p className="type-eyebrow mb-3">{t('projects.pipeline')}</p>
        <ol className="flex flex-wrap items-center gap-x-1 gap-y-2 mb-6">
          {pipeline.map((step, i) => (
            <li key={step} className="flex items-center gap-1">
              <span className="chip font-mono text-ink">{step}</span>
              {i < pipeline.length - 1 && (
                <span aria-hidden="true" className="text-ink-subtle text-xs px-0.5">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="mb-6">
          <StackChips items={mergejobStack} />
        </div>
        <div>
          <ProjectStatusBadge status="cancelled" />
        </div>
      </div>
    </Reveal>
  )
}

export default Flagship
