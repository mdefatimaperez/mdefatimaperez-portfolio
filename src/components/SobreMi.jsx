import { useEffect, useRef } from 'react'

export default function SobreMi() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const rings = [
      { rx: 72,  ry: 25,  tilt: -0.25, speed: 0.007, label: '.NET',   color: '#9D72F0', r: 7, angle: 0 },
      { rx: 108, ry: 38,  tilt:  0.15, speed: 0.005, label: 'Node',   color: '#BBA9FF', r: 7, angle: Math.PI * 0.7 },
      { rx: 148, ry: 52,  tilt: -0.1,  speed: 0.004, label: 'Cyber',  color: '#7B4FD4', r: 8, angle: Math.PI * 1.3 },
      { rx: 188, ry: 66,  tilt:  0.3,  speed: 0.003, label: 'Docker', color: '#D8CFFF', r: 7, angle: Math.PI * 0.4 },
    ]

    function getPos(ring, angle) {
      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const lx = ring.rx * Math.cos(angle)
      const ly = ring.ry * Math.sin(angle)
      const x = cx + lx * Math.cos(ring.tilt) - ly * Math.sin(ring.tilt)
      const y = cy + lx * Math.sin(ring.tilt) + ly * Math.cos(ring.tilt)
      const behind = Math.sin(angle) > 0
      return { x, y, behind }
    }

    let t = 0
    let animId

    function draw() {
      animId = requestAnimationFrame(draw)
      t++
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const cx = canvas.width / 2
      const cy = canvas.height / 2

      // Avanzar ángulos
      rings.forEach(ring => { ring.angle += ring.speed })

      // Caminos orbitales
      rings.forEach(ring => {
        ctx.beginPath()
        ctx.ellipse(cx, cy, ring.rx, ring.ry, ring.tilt, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(123, 79, 212, 0.12)'
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Separar nodos por profundidad
      const behind = []
      const front = []
      rings.forEach(ring => {
        const pos = getPos(ring, ring.angle)
        if (pos.behind) behind.push({ ring, pos })
        else front.push({ ring, pos })
      })

      // Nodos traseros (opacidad reducida)
      behind.forEach(({ ring, pos }) => {
        ctx.globalAlpha = 0.45
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, ring.r, 0, Math.PI * 2)
        ctx.fillStyle = ring.color
        ctx.fill()
        ctx.font = '500 11px Inter, system-ui, sans-serif'
        ctx.fillStyle = '#EDE9FF'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(ring.label, pos.x, pos.y)
        ctx.globalAlpha = 1
      })

      // Nodo central "FS" con pulso
      const pulse = 1 + Math.sin(t * 0.04) * 0.08
      const cr = 13 * pulse
      ctx.globalAlpha = 1
      ctx.beginPath()
      ctx.arc(cx, cy, cr, 0, Math.PI * 2)
      ctx.fillStyle = '#7B4FD4'
      ctx.fill()
      ctx.font = '600 10px Inter, system-ui, sans-serif'
      ctx.fillStyle = '#EDE9FF'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('FS', cx, cy)

      // Nodos frontales (completos + línea de conexión)
      front.forEach(({ ring, pos }) => {
        ctx.globalAlpha = 0.12
        ctx.beginPath()
        ctx.moveTo(cx, cy)
        ctx.lineTo(pos.x, pos.y)
        ctx.strokeStyle = ring.color
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.globalAlpha = 1

        ctx.beginPath()
        ctx.arc(pos.x, pos.y, ring.r, 0, Math.PI * 2)
        ctx.fillStyle = ring.color
        ctx.fill()
        ctx.font = '500 11px Inter, system-ui, sans-serif'
        ctx.fillStyle = '#EDE9FF'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(ring.label, pos.x, pos.y)
      })
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="sobre-mi">
      <div className="sobre-grid">
        <div className="sobre-texto">
          <span className="sobre-tag">sobre mí</span>
          <h2 className="sobre-nombre">Maria de Fatima Perez</h2>
          <p className="sobre-rol">Full Stack Developer</p>
          <div className="sobre-divider"></div>
          <p className="sobre-bio">
            Desarrollador <span>.NET y Node.js</span> con experiencia en{' '}
            <span>sistemas de producción</span> y formación activa en{' '}
            <span>ciberseguridad ofensiva</span>. Utilizo <span>LLMs e IA</span>{' '}
            para potenciar el desarrollo y la automatización. Inglés <span>C1</span>.
          </p>
          <div className="sobre-skills">
            <span className="skill-chip">JavaScript</span>
            <span className="skill-chip">C#/.NET</span>
            <span className="skill-chip">Python</span>
            <span className="skill-chip">Node.js</span>
            <span className="skill-chip">Docker</span>
          </div>
        </div>
        <div className="sobre-canvas">
          <canvas id="orbit-canvas" ref={canvasRef}></canvas>
        </div>
      </div>
    </section>
  )
}
