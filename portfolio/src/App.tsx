import { lazy, Suspense, type ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'
import Hero from './components/Hero'
import Navigation from './components/navigation/Navigation'
import Footer from './components/Footer'
import { ThemeProvider } from './theme'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/projects/Projects'))
const OpenSource = lazy(() => import('./components/opensource/OpenSource'))
const Contact = lazy(() => import('./components/Contact'))

const Section = ({ id, className, children }: { id: string; className: string; children: ReactNode }) => (
  <section id={id} className={className}>
    <Suspense fallback={<div className="h-24" />}>{children}</Suspense>
  </section>
)

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <div className="bg-canvas text-ink min-h-screen">
          <Navigation />
          <main>
            <section id="hero" className="bg-canvas">
              <Hero />
            </section>
            <Section id="about" className="bg-parchment">
              <About />
            </Section>
            <Section id="skills" className="bg-canvas">
              <Skills />
            </Section>
            <Section id="projects" className="bg-parchment">
              <Projects />
            </Section>
            <Section id="opensource" className="tile-dark bg-canvas text-ink">
              <OpenSource />
            </Section>
            <Section id="contact" className="bg-canvas">
              <Contact />
            </Section>
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
