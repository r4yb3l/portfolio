import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import es from './locales/es.json'
import en from './locales/en.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: es
      },
      en: {
        translation: en
      }
    },
    fallbackLng: 'es',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  })

const syncDocumentLanguage = (lng: string) => {
  document.documentElement.lang = lng.split('-')[0]
}

syncDocumentLanguage(i18n.resolvedLanguage ?? 'es')
i18n.on('languageChanged', syncDocumentLanguage)

export default i18n
