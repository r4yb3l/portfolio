import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="about" className="min-h-screen py-20 relative">
      {/* Container sin fondo - scrollea sobre el iridiscente */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sobre Mí
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto"></div>
          </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Desarrollador Full Stack
            </h3>
            <p className="text-lg text-gray-200 leading-relaxed">
              Soy un desarrollador apasionado por crear soluciones digitales innovadoras. 
              Me especializo en tecnologías modernas como React, Node.js, y Python, 
              siempre buscando la mejor experiencia para el usuario.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Con más de 3 años de experiencia en desarrollo web, he trabajado en 
              proyectos que van desde aplicaciones web simples hasta sistemas complejos 
              de e-commerce y aplicaciones móviles.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full border border-white/20"
              >
                React
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full border border-white/20"
              >
                Node.js
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-full border border-white/20"
              >
                Python
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-visible"
          >
            <div className="w-full h-96 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">R4</span>
                </div>
                <p className="text-white/80 text-lg font-medium">Desarrollo Full Stack</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
