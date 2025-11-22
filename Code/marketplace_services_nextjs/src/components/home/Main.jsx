import "../../styles/home.css";

export default function Main() {
    return <div className="main-content" >

        <div className="main-title">
            <h1>Tudo para facilitar o seu serviço!</h1>
        </div>

        <div className="subtitle">
            <h3>Deu ruim em casa? Relaxa, alguém conserta para você em minutos.</h3>
        </div>

        <div className="input-area" >

            <input
                type="text"
                className="home-search-input"
                placeholder="Qual o problema a ser resolvido?"
            />

            <button className="all-buttons">Buscar</button>

        </div>

    </div>;
}