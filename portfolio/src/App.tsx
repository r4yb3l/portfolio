import { useState, useEffect, lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ThemeProvider } from './theme'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const HollowCaseStudy = lazy(() => import('./components/HollowCaseStudy'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider>
    <MotionConfig reducedMotion="user">
    <div className="bg-apple-black min-h-screen">
      <Navigation scrolled={scrolled} />

      <main>
        <section id="hero" className="bg-apple-black">
          <Hero />
        </section>

        <section id="about" className="bg-apple-gray">
          <Suspense fallback={<div className="h-24" />}>
            <About />
          </Suspense>
        </section>

        <section id="skills" className="bg-apple-black">
          <Suspense fallback={<div className="h-24" />}>
            <Skills />
          </Suspense>
        </section>

        <section id="projects" className="bg-apple-gray">
          <Suspense fallback={<div className="h-24" />}>
            <Projects />
          </Suspense>
        </section>

        <section id="opensource" className="bg-apple-gray">
          <Suspense fallback={<div className="h-24" />}>
            <HollowCaseStudy />
          </Suspense>
        </section>

        <section id="contact" className="bg-apple-black">
          <Suspense fallback={<div className="h-24" />}>
            <Contact />
          </Suspense>
        </section>
      </main>

      <Footer />
    </div>
    </MotionConfig>
    </ThemeProvider>
  )
}

export default App
