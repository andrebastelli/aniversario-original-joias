import { useState, useEffect } from 'react'

const FAQS = [
  {
    q: 'Como funciona o sorteio dos prêmios?',
    a: 'Cada compra realizada de 08 a 12 de junho garante a participação no sorteio...',
  },
  {
    q: 'Preciso comprar alguma coisa para participar?',
    a: 'Entrar no grupo VIP é gratuito!...',
  },
  {
    q: 'Quanto tempo tenho para participar?',
    a: 'O evento acontece exclusivamente de 08 a 12 de junho...',
  },
  {
    q: 'Como recebo meu prêmio caso seja sorteada?',
    a: 'Os prêmios físicos são enviados para todo o Brasil...',
  },
  {
    q: 'Posso participar se moro fora do Brasil?',
    a: 'Sim! A Original Joias atende clientes...',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="faq" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <span className="section-label reveal">Dúvidas Frequentes</span>

        <h2 className="section-title reveal" style={{ color: 'var(--white)' }}>
          Suas perguntas<br />
          <span className="gold">respondidas</span>
        </h2>

        <div style={{ marginTop: 56 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`faq-item reveal ${openIndex === i ? 'open' : ''}`}
            >
              <button
                className="faq-q"
                onClick={() => toggle(i)}
              >
                {faq.q}
              </button>

              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}