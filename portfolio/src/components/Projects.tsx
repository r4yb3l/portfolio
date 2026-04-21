import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import Experience from './Experience'
import prodevLogo from '../assets/logos/business/prodev.svg'
import ntsprintLogo from '../assets/logos/business/ntsprint.svg'
import netforemostLogo from '../assets/logos/business/netforemost.svg'
import qaBitLogo from '../assets/logos/business/qa-bit.svg'
import astrocodeLogo from '../assets/logos/business/astrocode.svg'
import snapnfundImage from '../assets/images/snapnfund.png'
import dealerslashImage from '../assets/images/dealerslash.png'
import followAppImage from '../assets/images/followApp.png'
import automedicImage from '../assets/images/automedic.png'
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

const CompanyHeader = ({ logo, name, period }: { logo: string; name: string; period: string }) => (
  <div className="flex items-center gap-4 py-8">
    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center apple-card-shadow">
      <img src={logo} alt={name} className="w-9 h-9 object-contain" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-apple-dark font-apple-display apple-headline-normal">
        {name}
      </h3>
      <p className="text-sm text-apple-dark/60 apple-body-text">{period}</p>
    </div>
  </div>
)

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const { t } = useTranslation()

  return (
    <section className="apple-section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-apple-dark apple-headline-tight font-apple-display">
            {t('projects.title')}
          </h2>
        </motion.div>

        <div id="prodev">
          <CompanyHeader
            logo={prodevLogo}
            name={t('projects.timeline.prodev.name')}
            period={t('projects.timeline.prodev.period')}
          />
        </div>
      </div>

      <div className="space-y-16 max-w-5xl mx-auto px-4">
        <Experience
          experience={t('projects.entries.snapnfund.description')}
          image={snapnfundImage}
          link="https://snapnfund.com/home"
        />
        <Experience
          experience={t('projects.entries.dealerslash.description')}
          image={dealerslashImage}
          inverted
        />
        <Experience
          experience={t('projects.entries.followApp.description')}
          image={followAppImage}
          link="https://apps.apple.com/us/app/followapp-by-cts/id6751299522"
        />

        <div id="ntsprint">
          <CompanyHeader
            logo={ntsprintLogo}
            name={t('projects.timeline.ntsprint.name')}
            period={t('projects.timeline.ntsprint.period')}
          />
        </div>
        <Experience
          experience={t('projects.entries.automedic.description')}
          image={automedicImage}
          link="https://theautomedic.com/"
        />

        <div id="netforemost">
          <CompanyHeader
            logo={netforemostLogo}
            name={t('projects.timeline.netforemost.name')}
            period={t('projects.timeline.netforemost.period')}
          />
        </div>
        <Experience
          experience={t('projects.entries.timeforemost.description')}
          image={timeforemostImage}
          link="https://timeforemost.com/"
        />

        <div id="qabit">
          <CompanyHeader
            logo={qaBitLogo}
            name={t('projects.timeline.qabit.name')}
            period={t('projects.timeline.qabit.period')}
          />
        </div>
        <Experience
          experience={t('projects.entries.allInBiking.description')}
          image={allInBikingImage}
          link="https://allinbiking.com/"
        />
        <Experience
          experience={t('projects.entries.retarificador.description')}
          image={retarificadorImage}
          link="https://retarificador.alphabrokers.es/"
          inverted
        />
        <Experience
          experience={t('projects.entries.eduq.description')}
          image={eduqImage}
          link="https://play.google.com/store/apps/details?id=com.qabit.eduq"
        />
        <Experience
          experience={t('projects.entries.groceryChefPro.description')}
          image={groceryImage}
          inDevelopment
          inverted
        />
        <Experience
          experience={t('projects.entries.gestionKitDigital.description')}
          image={gestionComunidadImage}
        />
        <Experience
          experience={t('projects.entries.kitTokenComunidad.description')}
          image={kitTokenImage}
          inverted
        />
        <Experience
          experience={t('projects.entries.gestorRRHH.description')}
          image={gestorRRHHImage}
        />

        <div id="astrocode">
          <CompanyHeader
            logo={astrocodeLogo}
            name={t('projects.timeline.astrocode.name')}
            period={t('projects.timeline.astrocode.period')}
          />
        </div>
        <Experience
          experience={t('projects.entries.manitas.description')}
          image={manitasImage}
          inDevelopment
        />
        <Experience
          experience={t('projects.entries.chrona.description')}
          image={chronaImage}
          inDevelopment
          inverted
        />
      </div>
    </section>
  )
}

export default Projects
