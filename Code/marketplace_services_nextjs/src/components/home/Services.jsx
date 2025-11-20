export default function Services() {
    return <div className = "services">

        <div className = "services-card">

            <div className = "services-card-content">

            <p>Limpeza e Cuidados</p>

            <button className = "options-button">
                Ver Opções
                <img className = "arrow" src="/icons/keyboard_arrow_down.png" alt="Arrow Down" />   
            </button>

            </div>

            <img className = "services-card-img" src="/banner/cleaning-supplies.png" alt="Cleaning Supplies" />

        </div>

<div className = "services-card">

            <div className = "services-card-content">

            <p>Serviços de Casa</p>

            <button className = "options-button">
                Ver Opções
                <img className = "arrow" src="/icons/keyboard_arrow_down.png" alt="Arrow Down" />   
            </button>

            </div>

            <img className = "services-card-img" src="/banner/toolbox.png" alt="Cleaning Supplies" />

        </div>

<div className = "services-card">

            <div className = "services-card-content">

            <p>Assistência Técnica</p>

            <button className = "options-button">
                Ver Opções
                <img className = "arrow" src="/icons/keyboard_arrow_down.png" alt="Arrow Down" />   
            </button>

            </div>

            <img className = "services-card-img" src="/banner/laptop.png" alt="Cleaning Supplies" />

        </div>

        
    </div>;
}