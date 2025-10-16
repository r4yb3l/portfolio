import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const { t } = useTranslation()

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl border border-white/20 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm p-6 md:p-10 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  {t('contact.subtitle')}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {t('contact.description')}
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: '/src/assets/icons/email.svg', label: t('contact.info.email'), value: 'raybel.developer@gmail.com', invert: true },
                  { icon: '/src/assets/icons/phone.svg', label: t('contact.info.phone'), value: '+505 8839 0152', invert: false },
                  { icon: '/src/assets/icons/location.svg', label: t('contact.info.location'), value: 'Estelí, Nicaragua', invert: false },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20">
                      {typeof contact.icon === 'string' ? (
                        <img src={contact.icon} alt="" className={`w-6 h-6 object-contain ${contact.invert ? 'invert' : ''}`} />
                      ) : (
                        <span className="text-white/90">{contact.icon}</span>
                      )}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{contact.label}</p>
                      <p className="text-white font-semibold">{contact.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="hidden" />
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-orange-400 transition-colors"
                  placeholder={t('contact.form.namePlaceholder') ?? ''}
                />
              </div>
               
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-orange-400 transition-colors"
                  placeholder={t('contact.form.emailPlaceholder') ?? ''}
                />
              </div>
               
              <div>
                <label className="block text-white text-sm font-semibold mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                  placeholder={t('contact.form.messagePlaceholder') ?? ''}
                />
              </div>
               
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:raybel.developer@gmail.com?subject=Solicitud%20de%20servicios%20de%20software"
                className="block text-center px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300"
              >
                {t('contact.form.submit')}
              </motion.a>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
