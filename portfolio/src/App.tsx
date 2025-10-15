import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Iridescence from './components/Iridescence'
import FloatingParticles from './components/FloatingParticles'

function App() {
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    setWebglSupported(!!gl)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Fixed iridescent background */}
      <div className="fixed inset-0 w-full h-full z-0">
        {webglSupported ? (
          <Iridescence
            color={[0.8, 0.0, 0.0]}
            mouseReact={true}
            amplitude={0.15}
            speed={1.5}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-red-900 via-red-800 to-red-700 animate-pulse" />
        )}
      </div>
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Content that scrolls over the background */}
      <div className="relative z-10">
        <Navigation />
        <main className="overflow-x-hidden">
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