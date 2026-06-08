import { useCountdown } from '@/hooks/useCountdown'

const WA_URL = import.meta.env.VITE_WHATSAPP_URL as string
const EVENT_END = import.meta.env.VITE_EVENT_END_DATE ?? '2025-06-12T23:59:59'

interface BlockProps {
  value: string
  label: string
}

function CountBlock({ value, label }: BlockProps) {
  return (
    <div className="countdown-block">
      <div className="countdown-num">{value}</div>
      <div
        style={{
          fontSize: 10,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
        }}
      >
        {label}
      </div>
    </div>
  )
}

function Sep() {
  return (
    <span
      style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 56,
        color: 'rgba(201,168,76,0.3)',
        alignSelf: 'center',
        lineHeight: 1,
      }}
    >
      :
    </span>
  )
}

export default function UrgencySection() {
  const { days, hours, minutes, seconds } = useCountdown(EVENT_END)

  return (
    <section
      className="urgency"
      style={{ padding: '100px 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <span className="section-label reveal">Tempo Limitado</span>

        <h2 className="section-title reveal" style={{ color: 'var(--white)' }}>
          O tempo está acabando.<br></br>Últimas vagas!<br />
          <span className="gold">Corra!!!</span>
        </h2>

        <div
          className="reveal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
            margin: '48px 0',
            flexWrap: 'wrap',
          }}
        >
          <CountBlock value={days} label="Dias" />
          <Sep />
          <CountBlock value={hours} label="Horas" />
          <Sep />
          <CountBlock value={minutes} label="Min" />
          <Sep />
          <CountBlock value={seconds} label="Seg" />
        </div>

        <p
          className="reveal"
          style={{
            fontSize: 15,
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          O evento encerra em{' '}
          <strong style={{ color: 'var(--gold)' }}>12 de junho</strong>. Não perca a
          oportunidade de ganhar prêmios exclusivos celebrando 36 anos de Original Joias.
        </p>

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-primary reveal"
        >
          🏆 Entre Agora — É Grátis!
        </a>
      </div>
    </section>
  )
}
