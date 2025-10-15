import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Iridescence from './components/Iridescence'

function App() {
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    setWebglSupported(!!gl)
  }, [])

  return (
    <div className="relative">
      {/* Fondo iridiscente de OGL */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        {webglSupported ? (
          <Iridescence
            color={[0.8, 0.0, 0.0]}
            mouseReact={true}
            amplitude={0.15}
            speed={1.5}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-red-900 via-red-800 to-red-700" />
        )}
      </div>
      
      {/* Content that scrolls over the background */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App