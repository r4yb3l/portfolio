
import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'

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
            color={[0.85, 0.1, 0.15]}
            mouseReact={true}
            amplitude={0.15}
            speed={1.5}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-rose-900 via-rose-800 to-amber-700" />
        )}
      </div>
      
      {/* Content that scrolls over the background */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />

          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
