import prodevLogo from '../../assets/logos/business/prodev.svg'
import netforemostLogo from '../../assets/logos/business/netforemost.svg'
import qaBitLogo from '../../assets/logos/business/qa-bit.svg'
import astrocodeLogo from '../../assets/logos/business/astrocode.svg'
import snapnfundImage from '../../assets/images/snapnfund.png'
import dealerslashImage from '../../assets/images/dealerslash.png'
import followAppImage from '../../assets/images/followApp.png'
import timeforemostImage from '../../assets/images/timeforemost.png'
import allInBikingImage from '../../assets/images/allinbiking.png'
import retarificadorImage from '../../assets/images/retarificador.png'
import eduqImage from '../../assets/images/eduq.png'
import wetrustImage from '../../assets/images/wetrust.png'
import groceryImage from '../../assets/images/grocery.png'
import manitasImage from '../../assets/images/manitas.png'
import chronaImage from '../../assets/images/chrona.png'

export type ProjectStatus = 'inDevelopment' | 'cancelled'

export interface Project {
  key: string
  image: string
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
      { key: 'timeforemost', image: timeforemostImage, link: 'https://timeforemost.com/', stack: ['Flutter', 'Flutter Web'] },
    ],
  },
  {
    key: 'qabit',
    logo: qaBitLogo,
    projects: [
      { key: 'wetrust', image: wetrustImage, link: 'https://wetrustsystems.com/', stack: ['Voice AI', 'Fastify', 'Next.js', 'PostgreSQL', 'Twilio', 'Stripe'] },
      { key: 'allInBiking', image: allInBikingImage, link: 'https://allinbiking.com/', stack: ['Flutter', 'Firebase', 'GCP', 'Neo4j'] },
      { key: 'eduq', image: eduqImage, link: 'https://play.google.com/store/apps/details?id=com.qabit.eduq', stack: ['Flutter'] },
      { key: 'retarificador', image: retarificadorImage, link: 'https://retarificador.alphabrokers.es/', stack: ['React', 'Frontend'] },
      { key: 'groceryChefPro', image: groceryImage, status: 'cancelled', stack: ['AI', 'Mobile'] },
    ],
  },
  {
    key: 'astrocode',
    logo: astrocodeLogo,
    projects: [
      { key: 'chrona', image: chronaImage, status: 'inDevelopment', stack: ['Next.js', 'NestJS', 'Flutter'] },
      { key: 'manitas', image: manitasImage, status: 'inDevelopment', stack: ['Flutter', 'Next.js', 'Geolocation'] },
    ],
  },
]

export const companyLogos = companies.map(({ key, logo }) => ({ key, logo }))
