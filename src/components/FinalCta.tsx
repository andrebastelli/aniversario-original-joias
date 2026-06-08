const WA_URL = import.meta.env.VITE_WHATSAPP_URL as string

export default function FinalCta() {
  return (
    <section
      className="final-cta"
      style={{ padding: '120px 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <span className="section-label reveal">Última Chamada</span>

        <h2
          className="section-title reveal"
          style={{ fontSize: 'clamp(36px, 7vw, 64px)', color: 'var(--white)', marginBottom: 16 }}
        >
          Não fique de fora<br />
          dessa <span className="gold">celebração!</span>
        </h2>

        <p
          className="reveal"
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: 48,
            lineHeight: 1.7,
          }}
        >
          O grupo VIP já está aberto. Prêmios exclusivos, ofertas especiais e
          toda a energia de 36 anos de Original Joias esperando por você.
        </p>

        <div
          className="reveal"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary"
            style={{ fontSize: 16, padding: '22px 56px' }}
          >
            🎈 Entrar no Grupo VIP Agora
          </a>
          <span
            style={{
              fontSize: 12,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: 2,
            }}
          >
            GRATUITO · EXCLUSIVO · DE 08 A 12 DE JUNHO
          </span>
        </div>
      </div>
    </section>
  )
}
