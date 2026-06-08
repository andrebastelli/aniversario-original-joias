const WA_URL = import.meta.env.VITE_WHATSAPP_URL as string

export default function PhotoSection() {
  return (
    <section
      className="photo-section"
      style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}
    >
      <div
        className="photo-inner"
        style={{
          maxWidth: 900,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="photo-frame reveal">
          <img
            src="/foto-original-joias.png"
            alt="Original Joias — 36 anos celebrando elegância e tradição"
            loading="lazy"
            width={800}
            height={800}
          />
        </div>

        <div>
          <span
            className="section-label reveal"
            style={{ color: 'var(--gold-deep)' }}
          >
            Nossa História
          </span>

          <h2 className="section-title reveal" style={{ color: 'var(--black)' }}>
            36 anos de <span className="gold">elegância</span> e tradição
          </h2>

          <p
            className="reveal"
            style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--gray)', marginBottom: 16 }}
          >
            A Original Joias nasceu com um propósito: oferecer peças únicas que
            conectam emoções e memórias. Durante 36 anos, construímos uma história
            de confiança, qualidade e relacionamento com nossos clientes.
          </p>

          <p
            className="reveal"
            style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--gray)', marginBottom: 16 }}
          >
            Agora, queremos compartilhar essa conquista com você de um jeito
            especial — com prêmios exclusivos e momentos únicos durante a Balloon Week.
          </p>

          <div className="reveal" style={{ display: 'flex', alignItems: 'baseline', gap: 8, margin: '32px 0' }}>
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 56,
                fontWeight: 700,
                lineHeight: 1,
                background: 'linear-gradient(135deg, #1a1a1a 0%, #5a4a1a 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              36
            </span>
            <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--gray)', maxWidth: 120, lineHeight: 1.3 }}>
              anos de história e conquistas
            </span>
          </div>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary reveal"
            style={{ fontSize: 12, padding: '14px 32px' }}
          >
            Fazer Parte da Celebração
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .photo-inner { grid-template-columns: 1fr !important; text-align: center; }
        }
      `}</style>
    </section>
  )
}
