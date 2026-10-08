import Reveal from './Reveal'

interface SectionHeaderProps {
  title: string
  eyebrow?: string
  intro?: string
  id?: string
}

const SectionHeader = ({ title, eyebrow, intro, id }: SectionHeaderProps) => (
  <Reveal className="text-center max-w-content mx-auto mb-12 md:mb-16">
    {eyebrow && <p className="type-eyebrow mb-3">{eyebrow}</p>}
    <h2 id={id} className="type-display text-ink">
      {title}
    </h2>
    {intro && <p className="type-lead text-ink-muted mt-4">{intro}</p>}
  </Reveal>
)

export default SectionHeader
