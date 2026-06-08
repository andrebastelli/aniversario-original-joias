const WA_URL = import.meta.env.VITE_WHATSAPP_URL as string

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="balloon-deco b1" aria-hidden="true" />
      <div className="balloon-deco b2" aria-hidden="true" />
      <div className="balloon-deco b3" aria-hidden="true" />
      <div className="balloon-deco b4" aria-hidden="true" />

      <span className="hero-badge">🎉 Edição Especial de Aniversário</span>

      <div className="hero-script">
        Balloon<br />
        <span>Week</span>
      </div>

      <p className="hero-sub">Original Joias</p>

      <div className="hero-brand">36</div>
      <div className="hero-brand">anos</div>
      <div className="hero-brand">de Original Joias</div>

      <div
        className="ornament"
        aria-hidden="true"
        style={{ marginBottom: 0, marginTop: 0 }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <polygon points="8,1 10,6 15,6 11,9.5 12.5,15 8,12 3.5,15 5,9.5 1,6 6,6" />
        </svg>
      </div>

      <div className="hero-date">📅 De 08 a 12 de Junho</div>

      <p className="hero-tagline">
        Prêmios imperdíveis celebrando 36 anos de história.<br />
        Aproveite essa <em>chance única!</em>
      </p>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-primary"
      >
        🎈 Quero Participar Agora
      </a>

      <p className="cta-secondary">Acesse o Grupo VIP do WhatsApp gratuitamente</p>
    </section>
  )
}
