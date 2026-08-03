import { useEffect, useRef } from 'react'
import { useTheme } from '../theme'

interface DotGridProps {
  spacing?: number
  dotRadius?: number
  influence?: number
}

const readColorVar = (name: string, fallback: [number, number, number]): [number, number, number] => {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  const parts = raw.split(',').map((n) => parseInt(n, 10))
  if (parts.length === 3 && parts.every((n) => !Number.isNaN(n))) {
    return [parts[0], parts[1], parts[2]]
  }
  return fallback
}

const DotGrid = ({ spacing = 26, dotRadius = 1.1, influence = 170 }: DotGridProps) => {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerTarget = useRef({ x: -9999, y: -9999 })
  const pointer = useRef({ x: -9999, y: -9999 })
  const lastMove = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const baseColor = readColorVar('--dot-base', [122, 127, 150])
    const glowColor = readColorVar('--dot-glow', [130, 143, 255])

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let dpr = 1

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()

    const handlePointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointerTarget.current = { x: event.clientX - rect.left, y: event.clientY - rect.top }
      lastMove.current = performance.now()
    }

    const handleLeave = () => {
      pointerTarget.current = { x: -9999, y: -9999 }
    }

    window.addEventListener('pointermove', handlePointer, { passive: true })
    window.addEventListener('pointerdown', handlePointer, { passive: true })
    canvas.parentElement?.addEventListener('pointerleave', handleLeave)

    let resizeRaf = 0
    const onResize = () => {
      cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(resize)
    }
    window.addEventListener('resize', onResize)

    const influenceSq = influence * influence
    const [br, bg, bb] = baseColor
    const [gr, gg, gb] = glowColor

    let raf = 0
    const render = (time: number) => {
      const idle = time - lastMove.current > 2200
      if (idle && !reduceMotion) {
        const t = time * 0.00016
        pointerTarget.current = {
          x: width * (0.5 + 0.32 * Math.cos(t)),
          y: height * (0.5 + 0.26 * Math.sin(t * 1.3)),
        }
      }

      pointer.current.x += (pointerTarget.current.x - pointer.current.x) * 0.08
      pointer.current.y += (pointerTarget.current.y - pointer.current.y) * 0.08

      ctx.clearRect(0, 0, width, height)
      const px = pointer.current.x
      const py = pointer.current.y

      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          const dx = x - px
          const dy = y - py
          const distSq = dx * dx + dy * dy
          let t = 0
          if (distSq < influenceSq) {
            t = 1 - Math.sqrt(distSq) / influence
            t = t * t
          }

          const alpha = 0.14 + t * 0.72
          const r = dotRadius + t * 1.5
          const cr = Math.round(br + (gr - br) * t)
          const cg = Math.round(bg + (gg - bg) * t)
          const cb = Math.round(bb + (gb - bb) * t)

          ctx.beginPath()
          ctx.fillStyle = `rgba(${cr},${cg},${cb},${alpha})`
          ctx.arc(x, y, r, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      raf = requestAnimationFrame(render)
    }

    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(resizeRaf)
      window.removeEventListener('pointermove', handlePointer)
      window.removeEventListener('pointerdown', handlePointer)
      window.removeEventListener('resize', onResize)
      canvas.parentElement?.removeEventListener('pointerleave', handleLeave)
    }
  }, [spacing, dotRadius, influence, theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
}

export default DotGrid
