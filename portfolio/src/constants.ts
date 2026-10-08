export const EMAIL = 'raybel.developer@gmail.com'
export const PHONE = '+505 8839 0152'
export const LOCATION = 'Estelí, Nicaragua'
export const GITHUB_URL = 'https://github.com/r4yb3l'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/r4yb3l/'
export const CV_URL = '/Raybel-Hernandez-CV.pdf'
export const CV_FILENAME = 'Raybel-Hernandez-CV.pdf'

export const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'opensource', 'contact'] as const
export type SectionId = (typeof SECTION_IDS)[number]

export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
