const steps = [
  {
    num: '01',
    title: 'Entre no Grupo VIP',
    desc: 'Acesse o grupo exclusivo de WhatsApp e fique por dentro de todas as novidades do evento.',
  },
  {
    num: '02',
    title: 'Compre no período',
    desc: 'Realize sua compra de 08 a 12 de junho. Quanto mais você compra, maior o seu balão!',
  },
  {
    num: '03',
    title: 'Ganhe seu prêmio',
    desc: 'Estoure seu balão e descubra qual prêmio exclusivo você ganhou. Surpresas incríveis aguardam!',
  },
]

export default function HowSection() {
  return (
    <section
      style={{
        background: 'var(--black)',
        padding: '100px 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <span className="section-label reveal">Como Funciona</span>
        <h2 className="section-title reveal" style={{ color: 'var(--white)' }}>
          É simples, rápido<br />
          e <span className="gold">cheio de prêmios</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            marginTop: '64px',
          }}
          className="steps-grid"
        >
          {steps.map((s) => (
            <div
              key={s.num}
              className="reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div className="step-num">{s.num}</div>
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '22px',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  color: 'var(--white)',
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.6,
                  maxWidth: 220,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  )
}
