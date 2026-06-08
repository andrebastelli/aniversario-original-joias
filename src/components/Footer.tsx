export default function Footer() {
  return (
    <footer
      style={{
        background: '#050505',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '48px 24px 36px',
        textAlign: 'center',
        fontSize: 12,
        color: 'rgba(255,255,255,0.3)',
        letterSpacing: 1,
        lineHeight: 1.8,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <p>© 2025 Original Joias — Todos os direitos reservados.</p>
      <p style={{ marginTop: 8 }}>
        <a href="#" style={{ color: 'rgba(201,168,76,0.6)', textDecoration: 'none' }}>
          Política de Privacidade
        </a>{' '}
        · Seus dados são tratados conforme a LGPD.
      </p>
    </footer>
  )
}
