import "../../styles/menu.css";

export default function Title() {
  return (
    <nav className="menu">
      <a href="/home">
      <img className="imagem-logo" src="/logo/logo-azul.png" alt="Logo" />
      </a>

      <ul className="menu-list">
        <li>Quero Prestar Serviços</li>
        <li>Categoria de Serviços</li>
        <li>Para Empresas/Manutenções</li>
        <li>Ajuda</li>
      </ul>

      <div className="menu-actions">

        <a href="/login">
          <button className="all-buttons">
            Entrar
          </button>
        </a>
        
      </div>
    </nav>
  );
}
