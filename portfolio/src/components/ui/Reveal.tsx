import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'article' | 'li'
}

const Reveal = ({ children, className, delay = 0, as = 'div' }: RevealProps) => {
  const Component = motion[as]
  return (
    <Component
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  )
}

export default Reveal
