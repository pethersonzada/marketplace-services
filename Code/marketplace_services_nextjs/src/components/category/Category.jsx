import "../../styles/category.css";

export default function Category() {
    return (
        <div className="category-container">

            <h2 className="category-title">Categorias de Serviço</h2>
            <p className="category-subtitle">Escolha uma categoria para explorar profissionais disponíveis.</p>

            <div className="category-grid">

                <div className="category-card">
                    <div className="category-icon">💻</div>
                    <p className="category-name">Informática</p>
                </div>

                <div className="category-card">
                    <div className="category-icon">🛠️</div>
                    <p className="category-name">Reformas</p>
                </div>

                <div className="category-card">
                    <div className="category-icon">🎨</div>
                    <p className="category-name">Design & Arte</p>
                </div>

                <div className="category-card">
                    <div className="category-icon">🧹</div>
                    <p className="category-name">Limpeza</p>
                </div>

                <div className="category-card">
                    <div className="category-icon">📚</div>
                    <p className="category-name">Aulas & Treinamentos</p>
                </div>

                <div className="category-card">
                    <div className="category-icon">👨‍🍳</div>
                    <p className="category-name">Culinária</p>
                </div>

            </div>

        </div>
    );
}
