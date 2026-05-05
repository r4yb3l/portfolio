import { useState, useEffect, lazy, Suspense } from 'react'
import Hero from './components/Hero'
import Navigation from './components/Navigation'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
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
    <div className="bg-apple-black min-h-screen">
      <Navigation scrolled={scrolled} />

      <main>
        <section id="hero" className="bg-apple-black">
          <Hero />
        </section>

        <Suspense fallback={<div className="h-24" />}>
          <section id="about" className="bg-apple-gray">
            <About />
          </section>

          <section id="skills" className="bg-apple-black">
            <Skills />
          </section>

          <section id="projects" className="bg-apple-gray">
            <Projects />
          </section>

          <section id="contact" className="bg-apple-black">
            <Contact />
          </section>
        </Suspense>
      </main>
    </div>
  )
}

export default App
