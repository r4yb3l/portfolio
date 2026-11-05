import prodevLogo from '../../assets/logos/business/prodev.svg'
import netforemostLogo from '../../assets/logos/business/netforemost.svg'
import qaBitLogo from '../../assets/logos/business/qa-bit.svg'
import astrocodeLogo from '../../assets/logos/business/astrocode.svg'

export type ProjectStatus = 'inDevelopment' | 'cancelled'

export interface Project {
  key: string
  link?: string
  status?: ProjectStatus
  stack: string[]
}

export interface Company {
  key: string
  logo: string
  projects: Project[]
}

export const companies: Company[] = [
  {
    key: 'qabit',
    logo: qaBitLogo,
    projects: [
      { key: 'realCrm', stack: ['React', 'TypeScript', 'Fastify', 'Drizzle', 'PostgreSQL RLS', 'Clerk'] },
      { key: 'talentPool', stack: ['React 19', 'TanStack', 'Express', 'pgvector', 'Gemini', 'AWS'] },
      { key: 'linkflow', stack: ['React', 'TypeScript', 'Redux Toolkit', 'Mantine', 'OAuth'] },
      { key: 'wetrust', stack: ['Next.js', 'Fastify', 'PostgreSQL', 'Retell.ai', 'Twilio', 'Stripe'] },
      { key: 'retarificador', link: 'https://retarificador.alphabrokers.es/', stack: ['React', 'TypeScript', 'MUI', 'Zustand', 'Azure AD'] },
      { key: 'cashback', stack: ['Next.js', 'TanStack', 'Zod', 'Recharts', 'Mapbox', 'Flutter'] },
      { key: 'elzaburu', stack: ['React 19', 'TypeScript', 'MUI', 'socket.io', 'Azure'] },
      { key: 'websites', link: 'https://topdevcrew.com/', stack: ['React', 'Vite', 'Tailwind CSS', 'i18n', 'SEO'] },
      { key: 'allInBiking', link: 'https://allinbiking.com/', stack: ['Flutter', 'Firebase', 'GCP', 'Neo4j'] },
      { key: 'eduq', link: 'https://play.google.com/store/apps/details?id=com.qabit.eduq', stack: ['Flutter', 'Riverpod', 'Firebase'] },
      { key: 'groceryChefPro', status: 'cancelled', stack: ['AI', 'Mobile'] },
    ],
  },
  {
    key: 'astrocode',
    logo: astrocodeLogo,
    projects: [
      { key: 'chrona', status: 'inDevelopment', stack: ['Next.js', 'NestJS', 'Flutter'] },
      { key: 'manitas', status: 'inDevelopment', stack: ['Flutter', 'Next.js', 'Geolocation'] },
    ],
  },
  {
    key: 'prodev',
    logo: prodevLogo,
    projects: [
      { key: 'snapnfund', link: 'https://snapnfund.com/home', stack: ['Flutter', 'React', 'Firebase', 'ASP.NET', 'OCR'] },
      { key: 'followApp', link: 'https://apps.apple.com/us/app/followapp-by-cts/id6751299522', stack: ['Flutter', 'NestJS', 'Firebase'] },
      { key: 'dealerslash', stack: ['ASP.NET Core', 'Flutter', 'Google Cloud'] },
    ],
  },
  {
    key: 'netforemost',
    logo: netforemostLogo,
    projects: [
      { key: 'timeforemost', link: 'https://timeforemost.com/', stack: ['Flutter', 'Flutter Web'] },
    ],
  },
]

export const companyLogos = companies.map(({ key, logo }) => ({ key, logo }))
