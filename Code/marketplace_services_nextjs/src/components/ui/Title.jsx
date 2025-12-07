import "../../styles/menu.css";

export default function Title() {
  return (
    <nav className="menu">

      <a href="/home">
      <img className="imagem-logo" src="/logo/logo-azul.png" alt="Logo" />
      </a>

      <ul className="menu-list">
        <li><a href="/provide">Quero Prestar Serviços</a></li>
        <li><a href="/category">Categoria de Serviços</a></li>
        <li><a href="/enterprise">Para Empresas</a></li>
        <li><a href="/help">Ajuda</a></li>
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
