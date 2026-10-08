import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import posthog from 'posthog-js'
import '@fontsource-variable/inter'
import './index.css'
import './i18n'
import App from './App.tsx'

const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: true,
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
