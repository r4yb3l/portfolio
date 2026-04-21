import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-apple-black min-h-screen">
      <Navigation scrolled={scrolled} />

      <main>
        <section id="hero" className="bg-apple-black">
          <Hero />
        </section>

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
      </main>
    </div>
  )
}

export default App
