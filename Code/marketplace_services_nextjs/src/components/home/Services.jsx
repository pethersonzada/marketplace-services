import "../../styles/services.css";

export default function Services() {
    return (
        <div className="services">

            <a href="/cleaning-and-care" className="services-card-link">
                <div className="services-card">
                    <div className="services-card-content">
                        <p>Limpeza e Cuidados</p>
                    </div>
                    <img className="services-card-img" src="/banner/cleaning-supplies.png" alt="Cleaning Supplies" />
                </div>
            </a>

            <a href="/home-and-maintenance" className="services-card-link">
                <div className="services-card">
                    <div className="services-card-content">
                        <p>Serviços de Casa</p>
                    </div>
                    <img className="services-card-img" src="/banner/toolbox.png" alt="Serviços de Casa" />
                </div>
            </a>

            <a href="/technical-assistance" className="services-card-link">
                <div className="services-card">
                    <div className="services-card-content">
                        <p>Assistência Técnica</p>
                    </div>
                    <img className="services-card-img" src="/banner/laptop.png" alt="Assistência Técnica" />
                </div>
            </a>

        </div>
    );
}
