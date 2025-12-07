import "../../styles/help.css";

export default function Help() {
    return (
        <div className="help-container">

            <h1 className="help-title">Olá. Como podemos ajudar você?</h1>

            <div className="input-area" >

            <input
                type="text"
                className="home-search-input"
                placeholder="Qual o problema a ser resolvido?"
            />

            <a href="/category">
                <button className="all-buttons">
                    Buscar
                </button>
            </a>

            </div>

            <div className="help-auth-row">
                <span className="help-auth-text">Entre para uma melhor experiência de Suporte</span>

                <div className="help-auth-buttons">
                    <a href="/login">
                    <button className="all-buttons">Entrar</button>
                    </a>
                </div>
                
            </div>

            <h2 className="help-products-title">Tópicos</h2>

            <div className="help-products-grid">

                <div className="help-product-card">
                    <div className="help-product-icon">🛒</div>
                    <p>Problemas com o Site</p>
                </div>

                <div className="help-product-card">
                    <div className="help-product-icon">📄</div>
                    <p>Problemas com Contratos</p>
                </div>

                <div className="help-product-card">
                    <div className="help-product-icon">🏪</div>
                    <p>Problemas com Serviços</p>
                </div>

                <div className="help-product-card">
                    <div className="help-product-icon">📅</div>
                    <p>Problemas com Agendamentos</p>
                </div>

            </div>

        </div>
    );
}
