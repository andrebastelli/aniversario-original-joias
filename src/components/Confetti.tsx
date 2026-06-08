import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  w: number
  h: number
  color: string
  speed: number
  angle: number
  spin: number
  drift: number
}

const COLORS = ['#C9A84C', '#E8C96A', '#F5E8C0', '#ffffff', '#111111', '#333333']

function createParticle(W: number, H: number): Particle {
  return {
    x: Math.random() * W,
    y: Math.random() * H - H,
    w: Math.random() * 8 + 4,
    h: Math.random() * 4 + 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    speed: Math.random() * 1.5 + 0.5,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.08,
    drift: (Math.random() - 0.5) * 0.5,
  }
}

export default function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)
    let animId: number

    const particles: Particle[] = Array.from({ length: 80 }, () => {
      const p = createParticle(W, H)
      p.y = Math.random() * H
      return p
    })

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      for (const p of particles) {
        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
        ctx.restore()
        p.y += p.speed
        p.x += p.drift
        p.angle += p.spin
        if (p.y > H + 20) {
          Object.assign(p, createParticle(W, H))
          p.y = -20
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.35,
      }}
    />
  )
}
