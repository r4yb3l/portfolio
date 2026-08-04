import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import prodevLogo from '../assets/logos/business/prodev.svg'
import netforemostLogo from '../assets/logos/business/netforemost.svg'
import qaBitLogo from '../assets/logos/business/qa-bit.svg'
import astrocodeLogo from '../assets/logos/business/astrocode.svg'
import snapnfundImage from '../assets/images/snapnfund.png'
import dealerslashImage from '../assets/images/dealerslash.png'
import followAppImage from '../assets/images/followApp.png'
import timeforemostImage from '../assets/images/timeforemost.png'
import allInBikingImage from '../assets/images/allinbiking.png'
import retarificadorImage from '../assets/images/retarificador.png'
import eduqImage from '../assets/images/eduq.png'
import groceryImage from '../assets/images/grocery.png'
import gestionComunidadImage from '../assets/images/gestion-de-comunidad.png'
import kitTokenImage from '../assets/images/kit-de-token.png'
import gestorRRHHImage from '../assets/images/gestor-de-rrhh.png'
import manitasImage from '../assets/images/manitas.png'
import chronaImage from '../assets/images/chrona.png'
import mergejobImage from '../assets/images/mergejob.png'

interface Project {
  key: string
  image: string
  link?: string
  inDevelopment?: boolean
  stack: string[]
}

interface Company {
  key: string
  logo: string
  projects: Project[]
}

const companies: Company[] = [
  {
    key: 'qabit',
    logo: qaBitLogo,
    projects: [
      { key: 'allInBiking', image: allInBikingImage, link: 'https://allinbiking.com/', stack: ['Flutter', 'Firebase', 'Neo4j'] },
      { key: 'retarificador', image: retarificadorImage, link: 'https://retarificador.alphabrokers.es/', stack: ['Web', 'Refactor', 'Performance'] },
      { key: 'eduq', image: eduqImage, link: 'https://play.google.com/store/apps/details?id=com.qabit.eduq', stack: ['Flutter'] },
      { key: 'groceryChefPro', image: groceryImage, inDevelopment: true, stack: ['AI', 'Mobile'] },
      { key: 'gestionKitDigital', image: gestionComunidadImage, stack: ['Flutter', 'React'] },
      { key: 'kitTokenComunidad', image: kitTokenImage, stack: ['React', 'Angular'] },
      { key: 'gestorRRHH', image: gestorRRHHImage, stack: ['React', 'Flutter'] },
    ],
  },
  {
    key: 'astrocode',
    logo: astrocodeLogo,
    projects: [
      { key: 'manitas', image: manitasImage, inDevelopment: true, stack: ['Flutter', 'Next.js', 'Geolocation'] },
      { key: 'chrona', image: chronaImage, inDevelopment: true, stack: ['Next.js', 'NestJS', 'Flutter'] },
    ],
  },
  {
    key: 'prodev',
    logo: prodevLogo,
    projects: [
      { key: 'snapnfund', image: snapnfundImage, link: 'https://snapnfund.com/home', stack: ['Flutter', 'React', 'Firebase', 'ASP.NET', 'OCR'] },
      { key: 'dealerslash', image: dealerslashImage, stack: ['ASP.NET Core', 'Flutter', 'Google Cloud'] },
      { key: 'followApp', image: followAppImage, link: 'https://apps.apple.com/us/app/followapp-by-cts/id6751299522', stack: ['Flutter', 'NestJS', 'Firebase'] },
    ],
  },
  {
    key: 'netforemost',
    logo: netforemostLogo,
    projects: [
      { key: 'timeforemost', image: timeforemostImage, link: 'https://timeforemost.com/', stack: ['Flutter', 'NestJS', 'GCP', 'Stripe'] },
    ],
  },
]

const pipeline = ['CV', 'LLM parse', 'Embed', 'pgvector', 'LLM rerank', 'Match']
const mergejobStack = ['Next.js', 'Supabase', 'Cloudflare Workers', 'pgvector', 'LLMs', 'Stripe']

const StackChips = ({ items }: { items: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((s) => (
      <li key={s} className="text-xs font-mono text-subtle bg-surface-3 border border-hairline rounded-md px-2 py-1">
        {s}
      </li>
    ))}
  </ul>
)

const ExpandableText = ({ text }: { text: string }) => {
  const { t } = useTranslation()
  const [expanded, setExpanded] = useState(false)
  const [truncated, setTruncated] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => {
      if (!expanded) setTruncated(el.scrollHeight > el.clientHeight + 1)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [text, expanded])

  return (
    <div className="mb-4 flex-1">
      <p ref={ref} className={`text-sm text-muted apple-body-text leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
        {text}
      </p>
      {(truncated || expanded) && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-1.5 text-xs font-medium text-apple-blue hover:underline"
        >
          {expanded ? t('projects.actions.readLess') : t('projects.actions.readMore')}
        </button>
      )}
    </div>
  )
}

const CardLink = ({ link, inDevelopment }: { link?: string; inDevelopment?: boolean }) => {
  const { t } = useTranslation()
  if (inDevelopment) {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-medium text-apple-blue">
        <span className="w-1.5 h-1.5 rounded-full bg-apple-blue animate-pulse" />
        {t('projects.actions.inDevelopment')}
      </span>
    )
  }
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-apple-blue text-sm font-medium hover:gap-2.5 transition-all">
        {t('projects.actions.visitSite')}
        <span aria-hidden="true">→</span>
      </a>
    )
  }
  return <span className="text-sm text-subtle italic">{t('projects.actions.notAvailable')}</span>
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { t } = useTranslation()
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col rounded-2xl bg-apple-surface border border-apple-line overflow-hidden transition-colors duration-300 hover:border-hairline-strong"
    >
      <div className="overflow-hidden border-b border-apple-line">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-medium text-apple-dark font-apple-display apple-headline-normal mb-2">
          {t(`projects.entries.${project.key}.title`)}
        </h3>
        <ExpandableText text={t(`projects.entries.${project.key}.description`)} />
        <div className="mb-4">
          <StackChips items={project.stack} />
        </div>
        <CardLink link={project.link} inDevelopment={project.inDevelopment} />
      </div>
    </motion.article>
  )
}

const Flagship = () => {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl bg-apple-surface border border-apple-line overflow-hidden apple-shadow-lg"
    >
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-gradient mb-3">
            {t('projects.flagship')} · AI Engineering
          </p>
          <h3 className="text-3xl md:text-4xl font-semibold text-apple-dark font-apple-display apple-headline-tight mb-4">
            {t('projects.entries.mergejob.title')}
          </h3>
          <p className="text-base text-muted apple-body-text leading-relaxed mb-6">
            {t('projects.entries.mergejob.description')}
          </p>

          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-subtle mb-3">Matching pipeline</p>
            <ol className="flex flex-wrap items-center gap-x-1 gap-y-2">
              {pipeline.map((step, i) => (
                <li key={step} className="flex items-center gap-1">
                  <span className="text-xs font-mono text-apple-dark bg-surface-3 border border-hairline rounded-md px-2.5 py-1.5">
                    {step}
                  </span>
                  {i < pipeline.length - 1 && <span aria-hidden="true" className="text-apple-blue text-xs px-0.5">→</span>}
                </li>
              ))}
            </ol>
          </div>

          <StackChips items={mergejobStack} />
        </div>

        <div className="relative min-h-[280px] lg:min-h-full border-t lg:border-t-0 lg:border-l border-apple-line bg-surface-3 flex items-center justify-center p-8">
          <img
            src={mergejobImage}
            alt="Mergejob screenshot"
            loading="lazy"
            decoding="async"
            className="w-full h-auto rounded-xl border border-apple-line shadow-2xl"
          />
        </div>
      </div>
    </motion.article>
  )
}

const CompanyGroup = ({ company }: { company: Company }) => {
  const { t } = useTranslation()
  return (
    <div id={company.key} className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-xl bg-white border border-apple-line flex items-center justify-center shrink-0">
          <img src={company.logo} alt={t(`projects.timeline.${company.key}.name`)} className="w-8 h-8 object-contain" />
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-medium text-apple-dark font-apple-display">
            {t(`projects.timeline.${company.key}.name`)}
            <span className="text-subtle font-normal"> · {t(`projects.timeline.${company.key}.location`)}</span>
          </h3>
          <p className="text-sm text-muted apple-body-text">{t(`projects.timeline.${company.key}.title`)}</p>
          <p className="text-xs font-mono text-subtle mt-0.5">{t(`projects.timeline.${company.key}.period`)}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {company.projects.map((p, i) => (
          <ProjectCard key={p.key} project={p} index={i} />
        ))}
      </div>
    </div>
  )
}

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { t } = useTranslation()

  return (
    <section className="apple-section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold text-apple-dark apple-headline-tight font-apple-display text-center mb-14"
        >
          {t('projects.title')}
        </motion.h2>

        <Flagship />

        <div className="mt-20 space-y-20">
          {companies.map((company) => (
            <CompanyGroup key={company.key} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
