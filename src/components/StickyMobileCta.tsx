const WA_URL = import.meta.env.VITE_WHATSAPP_URL as string

export default function StickyMobileCta() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-cta"
      aria-label="Entrar no Grupo VIP do WhatsApp"
    >
      🎈 Entrar no Grupo VIP
    </a>
  )
} 