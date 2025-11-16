
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
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        {webglSupported ? (
          <Iridescence
            color={[0.118, 0.290, 0.486]}
            mouseReact={true}
            amplitude={0.15}
            speed={1.5}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-700 to-blue-600" />
        )}
      </div>

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
