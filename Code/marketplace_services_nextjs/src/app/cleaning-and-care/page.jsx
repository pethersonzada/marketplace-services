import Title from "@/components/ui/Title";
import Footer from "@/components/ui/Footer";
import Image from "next/image";
import "../../styles/home.css";

export default function CleaningAndCarePage() {
    const serviceCategories = [
        "Limpeza Residencial",
        "Limpeza Comercial",
        "Cuidados com Tecidos",
        "Higienização de Ambientes",
        "Manutenção Preventiva",
        "Organização de Espaços",
        "Serviços Especiais"
    ];

    return (
        <div className="page-container">
            <Title />

            <main className="main-content">
                <div className="main-title">
                    <h1>Limpeza & Cuidados</h1>
                </div>

                <div className="subtitle">
                    <h3>Não se preocupe, temos a equipe certa pra deixar tudo limpo pra você!</h3>
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
                        src="/banner/Banner 4.png"
                        alt="Banner Limpeza e Cuidados"
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
