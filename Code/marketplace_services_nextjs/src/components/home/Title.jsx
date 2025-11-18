export default function Title() {
  return <nav className = "menu">
    <img className = "imagem-logo" src="/logo/logo-azul.png" alt="Logo" />

    <ul className = "menu-list">
      <li>Quero Prestar Serviços</li>
      <li>Categoria de Serviços</li>
      <li>Para Empresas/Manutenções</li>
      <li>Ajuda</li>
    </ul>

    <div className = "menu-actions">
      <a href="#">criar conta</a>
      <button>Entrar</button>
    </div>

  </nav>;
}