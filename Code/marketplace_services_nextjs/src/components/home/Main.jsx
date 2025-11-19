export default function Main() {
    return <div className = "main-content" >

        <div className = "main-title">
            <h1>Tudo para facilitar o seu serviço!</h1>
        </div>

        <div className = "subtitle">
            <h3>Deu ruim em casa? Relaxa, alguém conserta para você em minutos.</h3>
        </div>

        <div className = "input-area" >
            <input 
            type = "text"
            className = "main-input"
            placeholder = "    Qual problema você quer resolver hoje?"
            />

            <button className = "all-buttons">Buscar</button>

        </div>



    </div>;
}