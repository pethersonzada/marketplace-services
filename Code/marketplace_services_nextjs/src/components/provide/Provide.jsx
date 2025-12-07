import "../../styles/provide.css";

export default function ProvidePage() {
    return (
        <div className="provide-container">

            <h2 className="provide-title">Cadastrar Serviço</h2>
            <p className="provide-subtitle">Adicione as informações do serviço que você deseja oferecer.</p>

            <div className="provide-card">

                <div className="provide-field">
                    <label className="provide-label">Título do Serviço</label>
                    <input type="text" className="provide-input" placeholder="Ex: Conserto de Computadores" />
                </div>

                <div className="provide-field">
                    <label className="provide-label">Categoria</label>
                    <select className="provide-select">
                        <option>Informática</option>
                        <option>Reformas</option>
                        <option>Design & Arte</option>
                        <option>Limpeza</option>
                        <option>Aulas & Treinamentos</option>
                    </select>
                </div>

                <div className="provide-field">
                    <label className="provide-label">Descrição</label>
                    <textarea className="provide-textarea" placeholder="Descreva o serviço com detalhes..." />
                </div>

                <div className="provide-row">
                    <div className="provide-field provide-field-half">
                        <label className="provide-label">Preço Base</label>
                        <input type="number" className="provide-input" placeholder="R$" />
                    </div>

                    <div className="provide-field provide-field-half">
                        <label className="provide-label">Tempo Médio</label>
                        <input type="text" className="provide-input" placeholder="Ex: 2 horas" />
                    </div>
                </div>

                <button className="all-buttons">
                    <a href="/login" className="provide-link">Publicar</a>
                </button>

            </div>

        </div>
    );
}
