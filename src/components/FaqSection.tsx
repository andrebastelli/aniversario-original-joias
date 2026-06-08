import { useState, useEffect, useRef } from 'react'

const FAQS = [
  {
    q: 'Como funciona o sorteio dos prêmios?',
    a: 'Cada compra realizada de 08 a 12 de junho garante a participação no sorteio. O prêmio depende da faixa de compra: Balão Preto (R$500–R$1.499) ou Balão Dourado (acima de R$1.500). Os ganhadores são anunciados no grupo VIP do WhatsApp.',
  },
  {
    q: 'Preciso comprar alguma coisa para participar?',
    a: 'Entrar no grupo VIP é gratuito! Para concorrer aos prêmios, basta realizar uma compra mínima de R$500 no período do evento (08 a 12 de junho).',
  },
  {
    q: 'Quanto tempo tenho para participar?',
    a: 'O evento acontece exclusivamente de 08 a 12 de junho de 2025. Após essa data, as participações são encerradas. Não perca o prazo!',
  },
  {
    q: 'Como recebo meu prêmio caso seja sorteada?',
    a: 'Os prêmios físicos são enviados para todo o Brasil. Descontos e créditos são aplicados diretamente na sua conta para uso em compras futuras. Todos os detalhes serão comunicados pelo grupo VIP do WhatsApp.',
  },
  {
    q: 'Posso participar se moro fora do Brasil?',
    a: 'Sim! A Original Joias atende clientes em todo o Brasil e no exterior. Envios internacionais também participam do sorteio normalmente.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  // Local observer so FAQ reveals work regardless of scroll position at mount
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    const els = sectionRef.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="faq"
      style={{ padding: '100px 24px', position: 'relative', zIndex: 1 }}
    >
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <span className="section-label reveal">Dúvidas Frequentes</span>

        <h2 className="section-title reveal" style={{ color: 'var(--white)' }}>
          Suas perguntas<br />
          <span className="gold">respondidas</span>
        </h2>

        <div
          className="reveal"
          style={{
            marginTop: 56,
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${openIndex === i ? ' open' : ''}`}
            >
              <button
                className="faq-q"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {faq.q}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
