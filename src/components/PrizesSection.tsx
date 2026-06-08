const WA_URL = import.meta.env.VITE_WHATSAPP_URL as string

const blackPrizes = [
  '4x Desconto 10% na próxima compra',
  '3x Frete grátis no próximo pedido',
  '2x Bandeja preta de espelho',
  '2x Aneleira',
  '2x Bolsa de palha',
  '2x Bandeja expositora veludo',
  '5x Organizador acrílico',
]

const goldPrizes = [
  '2x Crédito R$100 na loja',
  '2x Desconto 20% na próxima compra',
  '4x Bandeja dourada espelho',
  '4x Porta Joias brilho',
  '3x Kit manutenção',
  '2x Kit limpeza',
]

export default function PrizesSection() {
  return (
    <section
      className="prizes"
      style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}
    >
      <div
        style={{
          maxWidth: 1000,
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <span
          className="section-label reveal"
          style={{ color: 'var(--gold-deep)' }}
        >
          Prêmios Exclusivos
        </span>

        <h2 className="section-title reveal" style={{ color: 'var(--black)' }}>
          Descubra o que está<br />
          dentro do seu <span className="gold">balão</span>
        </h2>

        <p
          className="reveal"
          style={{
            fontSize: 15,
            color: 'var(--gray)',
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          Dois tipos de balão, inúmeras possibilidades. Quanto maior sua compra,
          maior o prêmio que pode ganhar!
        </p>

        <div
          className="prizes-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
            marginTop: 64,
          }}
        >
          {/* Black Balloon */}
          <div className="prize-card black reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div className="balloon-icon dark" />
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  color: 'var(--white)',
                }}
              >
                Balão Preto
              </span>
            </div>
            <p style={{ fontSize: 12, fontWeight: 300, letterSpacing: 1, marginBottom: 24, opacity: 0.7 }}>
              Compras de R$500 a R$1.499
            </p>
            <div
              style={{
                background: 'rgba(201,168,76,0.15)',
                borderLeft: '3px solid var(--gold)',
                padding: '12px 16px',
                borderRadius: '0 4px 4px 0',
                marginBottom: 20,
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 15,
                fontStyle: 'italic',
              }}
            >
              <strong
                style={{
                  color: 'var(--gold)',
                  fontStyle: 'normal',
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: 4,
                }}
              >
                🏆 Sorteio Principal
              </strong>
              1x Kit Expositor Veludo 6 Peças
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {blackPrizes.map((p) => (
                <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.4 }}>
                  <span style={{ color: 'var(--gold)', fontSize: 10, marginTop: 2, flexShrink: 0 }}>✦</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Gold Balloon */}
          <div className="prize-card gold-card reveal">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div className="balloon-icon golden" />
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                  color: 'var(--gold)',
                }}
              >
                Balão Dourado
              </span>
            </div>
            <p style={{ fontSize: 12, fontWeight: 300, letterSpacing: 1, marginBottom: 24, opacity: 0.7 }}>
              Compras a partir de R$1.500
            </p>
            <div
              style={{
                background: 'rgba(201,168,76,0.15)',
                borderLeft: '3px solid var(--gold)',
                padding: '12px 16px',
                borderRadius: '0 4px 4px 0',
                marginBottom: 20,
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 15,
                fontStyle: 'italic',
              }}
            >
              <strong
                style={{
                  color: 'var(--gold)',
                  fontStyle: 'normal',
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: 4,
                }}
              >
                🏆 Sorteio Principal
              </strong>
              1x Kit Expositor Luxo 7 Peças
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {goldPrizes.map((p) => (
                <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, lineHeight: 1.4 }}>
                  <span style={{ color: 'var(--gold)', fontSize: 10, marginTop: 2, flexShrink: 0 }}>✦</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 56 }} className="reveal">
          <a
            href={WA_URL} 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              background: 'linear-gradient(135deg,#0A0A0A,#222)',
              color: 'var(--gold)',
              border: '1px solid var(--gold)',
              fontFamily: 'Jost, sans-serif',
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 2,
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '20px 48px',
              borderRadius: 3,
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
              transition: 'transform 0.2s, box-shadow 0.3s',
            }}
          >
            🎈 Quero Garantir Meu Prêmio
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .prizes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
