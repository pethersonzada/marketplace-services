import Title from "@/components/ui/Title";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import "../../styles/home.css";

export default function TechnicalAssistancePage() {
    const serviceCategories = [
        "Reparação de Computadores",
        "Reparação de Smartphones",
        "Reparação de Eletrodomésticos",
        "Instalação de Software",
        "Suporte Técnico Remoto",
        "Configuração de Redes",
        "Recuperação de Dados"
    ];

    return (
        <div className="page-container">
            <Title />

            <main className="main-content">
                <div className="main-title">
                    <h1>Assistência Técnica</h1>
                </div>

                <div className="subtitle">
                    <h3>Problemas técnicos? Nossos especialistas estão prontos para resolver tudo para você!</h3>
                </div>

                <div className="input-area">
                    <input
                        type="text"
                        className="home-search-input"
                        placeholder="De que tipo de serviço você precisa?"
                    />
                    <a href="/category">
                        <button className="all-buttons">Buscar</button>
                    </a>
                </div>
            </main>

            <div className="categories-section">
                {serviceCategories.map((category, index) => (
                    <button key={index} className={`category-button ${index === 0 ? 'active' : ''}`}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="banner-section">
                <div className="banner-wrapper">
                    <Image
                        src="/banner/Banner 2.png"
                        alt="Banner Assistência Técnica"
                        width={900}
                        height={300}
                        className="banner-image"
                        unoptimized={true}
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}
