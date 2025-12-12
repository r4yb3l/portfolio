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

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const { t } = useTranslation()

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">{t('projects.title')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div id="prodev" className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4 bg-gradient-to-br from-blue-500/25 to-cyan-500/20 border-2 border-white/20 backdrop-blur-md rounded-2xl px-6 py-4">
            <div className="w-14 h-14 rounded-full border border-white/40 bg-white flex items-center justify-center">
              <img
                src={prodevLogo}
                alt="ProDev Solutions LLC logo"
                className="w-10 h-10 object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="text-white text-xl font-semibold">
                {t('projects.timeline.prodev.name')}
              </h3>
              <p className="text-sm text-gray-300">
                {t('projects.timeline.prodev.period')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.snapnfund.description')}
          image={snapnfundImage}
          link="https://snapnfund.com/home"
        />
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.dealerslash.description')}
          image={dealerslashImage}
          inverted
        />
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.followApp.description')}
          image={followAppImage}
        />
      </div>

      <div id="ntsprint" className="flex justify-center px-4 mb-12">
        <div className="flex items-center gap-4 bg-gradient-to-br from-blue-500/25 to-cyan-500/20 border-2 border-white/20 backdrop-blur-md rounded-2xl px-6 py-4">
          <div className="w-14 h-14 rounded-full border border-white/40 bg-white flex items-center justify-center">
            <img
              src={ntsprintLogo}
              alt="NTSprint logo"
              className="w-10 h-10 object-contain rounded-full"
            />
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">
              {t('projects.timeline.ntsprint.name')}
            </h3>
            <p className="text-sm text-gray-300">
              {t('projects.timeline.ntsprint.period')}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.automedic.description')}
          image={automedicImage}
          link="https://theautomedic.com/"
        />
      </div>

      <div id="netforemost" className="flex justify-center px-4 mb-12">
        <div className="flex items-center gap-4 bg-gradient-to-br from-blue-500/25 to-cyan-500/20 border-2 border-white/20 backdrop-blur-md rounded-2xl px-6 py-4">
          <div className="w-14 h-14 rounded-full border border-white/40 bg-white flex items-center justify-center">
            <img
              src={netforemostLogo}
              alt="NetForemost logo"
              className="w-10 h-10 object-contain rounded-full"
            />
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">
              {t('projects.timeline.netforemost.name')}
            </h3>
            <p className="text-sm text-gray-300">
              {t('projects.timeline.netforemost.period')}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.timeforemost.description')}
          image={timeforemostImage}
          link="https://timeforemost.com/"
        />
      </div>

      <div id="qabit" className="flex justify-center px-4 mb-12">
        <div className="flex items-center gap-4 bg-gradient-to-br from-blue-500/25 to-cyan-500/20 border-2 border-white/20 backdrop-blur-md rounded-2xl px-6 py-4">
          <div className="w-16 h-16 rounded-full border border-white/40 bg-white flex items-center justify-center">
            <img
              src={qaBitLogo}
              alt="Quality on Bit logo"
              className="w-12 h-12 object-contain rounded-full"
            />
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">
              {t('projects.timeline.qabit.name')}
            </h3>
            <p className="text-sm text-gray-300">
              {t('projects.timeline.qabit.period')}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.allInBiking.description')}
          image={allInBikingImage}
          link="https://allinbiking.com/"
        />
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.retarificador.description')}
          image={retarificadorImage}
          link="https://retarificador.alphabrokers.es/"
          inverted
        />
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.eduq.description')}
          image={eduqImage}
        />
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.groceryChefPro.description')}
          image={groceryImage}
          inverted
        />
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.gestionKitDigital.description')}
          image={gestionComunidadImage}
        />
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.kitTokenComunidad.description')}
          image={kitTokenImage}
          inverted
        />
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.gestorRRHH.description')}
          image={gestorRRHHImage}
        />
      </div>

      <div id="astrocode" className="flex justify-center px-4 mb-12">
        <div className="flex items-center gap-4 bg-gradient-to-br from-blue-500/25 to-cyan-500/20 border-2 border-white/20 backdrop-blur-md rounded-2xl px-6 py-4">
          <div className="w-14 h-14 rounded-full border border-white/40 bg-white flex items-center justify-center">
            <img
              src={astrocodeLogo}
              alt="AstroCode Labs logo"
              className="w-10 h-10 object-contain rounded-full"
            />
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">
              {t('projects.timeline.astrocode.name')}
            </h3>
            <p className="text-sm text-gray-300">
              {t('projects.timeline.astrocode.period')}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.manitas.description')}
          image={manitasImage}
        />
      </div>

      <div className="flex justify-center px-4">
        <Experience 
          experience={t('projects.entries.chrona.description')}
          image={chronaImage}
          inverted
        />
      </div>
    </section>
  )
}

export default Projects
