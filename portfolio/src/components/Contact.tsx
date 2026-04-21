import { useState, type ChangeEvent, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import emailIcon from '../assets/icons/email.svg'
import phoneIcon from '../assets/icons/phone.svg'
import locationIcon from '../assets/icons/location.svg'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formError, setFormError] = useState<string | null>(null)

  const handleChange =
    (field: 'name' | 'email' | 'message') =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedName = formData.name.trim()
    const trimmedEmail = formData.email.trim()
    const trimmedMessage = formData.message.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!trimmedName || !emailRegex.test(trimmedEmail) || !trimmedMessage) {
      setFormError(t('contact.form.validationError') ?? 'Por favor completa todos los campos correctamente.')
      return
    }

    setFormError(null)
    const subject = encodeURIComponent('Solicitud de servicios de software')
    const body = encodeURIComponent(
      `Nombre: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`
    )
    window.location.href = `mailto:raybel.developer@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="apple-section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white apple-headline-tight font-apple-display">
            {t('contact.title')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4 font-apple-display apple-headline-normal">
                {t('contact.subtitle')}
              </h3>
              <p className="text-white/70 apple-body-text leading-relaxed">
                {t('contact.description')}
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: emailIcon, label: t('contact.info.email'), value: 'raybel.developer@gmail.com' },
                { icon: phoneIcon, label: t('contact.info.phone'), value: '+505 8839 0152' },
                { icon: locationIcon, label: t('contact.info.location'), value: 'San Jose, Costa Rica' },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <img src={contact.icon} alt="" className="w-5 h-5 object-contain" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">{contact.label}</p>
                    <p className="text-white text-sm font-normal">{contact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-white text-xs font-semibold mb-2 tracking-tight">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 text-sm focus:outline-none focus:border-apple-blue transition-colors apple-body-text"
                placeholder={t('contact.form.namePlaceholder') ?? ''}
                value={formData.name}
                onChange={handleChange('name')}
                required
              />
            </div>

            <div>
              <label className="block text-white text-xs font-semibold mb-2 tracking-tight">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 text-sm focus:outline-none focus:border-apple-blue transition-colors apple-body-text"
                placeholder={t('contact.form.emailPlaceholder') ?? ''}
                value={formData.email}
                onChange={handleChange('email')}
                required
              />
            </div>

            <div>
              <label className="block text-white text-xs font-semibold mb-2 tracking-tight">
                {t('contact.form.message')}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 text-sm focus:outline-none focus:border-apple-blue transition-colors resize-none apple-body-text"
                placeholder={t('contact.form.messagePlaceholder') ?? ''}
                value={formData.message}
                onChange={handleChange('message')}
                required
              />
            </div>

            {formError && (
              <p className="text-xs text-red-400">{formError}</p>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-apple-blue text-white text-sm font-normal rounded-lg apple-pill transition-all duration-300"
            >
              {t('contact.form.submit')}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
