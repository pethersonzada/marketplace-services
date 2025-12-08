import Link from "next/link";
import "../../styles/profile.css";
import Footer from "../ui/Footer";
import Calendario from "./Calendario";


export default function ProfileComponent() {
    return (<div className="classePai">

        <div className="serviços-title">
            <h1>Perfil do Prestador de Serviços</h1>
            
        </div>
        <div className="Logo">
            <img src="logo/logo-azul.png" alt="" />
        </div>

        <div className = "Avatar">
        <div className="profile-card">

                <div className="profile-card-left-side">
                    <img src="/avatar/1.png" alt="Avatar" />
                    
                    <h3>Snoop Dogg</h3>
                    <p className="profile-card-left-side-func">Faxiniero</p>

                </div>

                <div className="profile-card-right-side">

                    <div className="info-block">
                        <p className="profile-card-number">257</p>
                        <p className="profile-card-label">negócios fechados</p>
                    </div>

                    <div className="info-block">
                        <p className="profile-card-number-39">4,4/5 ⭐</p>
                        <p className="profile-card-label">estrelas</p>
                    </div>

                    <div className="info-block">
                        <p className="profile-card-number">2</p>
                        <p className="profile-card-label">anos realizando serviços</p>
                    </div>

                </div>

            </div>
        
        <div className="Comentarios">
            <h2>Ana Paula B.</h2>
            <h3>Mais Comentários:</h3>
            <img src="avatar/19.png" alt="logo" />
            <p>Simplesmente perfeito! O Lindomar foi extremamente pontual, educado e muito detalhista. Minha casa não ficava tão limpa e cheirosa há meses! Ele limpou até aqueles cantinhos que eu sempre esqueço. Contratarei ele sempre que possível, serviço impecável.</p>
        </div>
    

        <div className="Imagens">
            <h2>Imagens</h2>
            <img src="servicos/foto2.jpeg" alt="fotolimpeza" />
            <img src="servicos/foto3.jpeg" alt="fotolimpeza" />
            <img src="servicos/foto4.jpeg" alt="fotolimpeza" />
            <img src="servicos/foto5.jpeg" alt="fotolimpeza" />
            
        </div>

        </div>

        <div className="sobreMin">
        <h2>Mais Sobre Min!!</h2>
            <p>Trabalho como faxineiro há 2 anos e posso dizer com orgulho que faço tudo com capricho responsabilidade. Nesse tempo, já realizei mais de 200 de serviços e mantenho uma ótima reputação, fruto de um trabalho feito com dedicação, confiança e atenção aos detalhes. Mostro todos os dias que limpeza não é só deixar tudo brilhando — é entregar conforto, bem-estar e um ambiente onde dá gosto de estar. <br /> <br /></p>
        </div>

        <div className="lista-serviços">
            <br />
            <h2>Meus Serviços:</h2>
            <ul>
                <li>Faxina Padrão (ou de Manutenção);</li>
                <li>Faxina Pesada (ou Profunda);</li>
                <li>Faxina Pós-Obra;</li>
                <li>Faxina Pré-Mudança;</li>
                <li>Faxina Comercial;</li>
                <li>Limpeza de Estofados e Tapetes;</li>
                <li>Limpeza de Vidros e Fachadas;</li>
            </ul><br />



                <div className="Agendar">
            <h2>Agende agora</h2>
            <p>Agende agora clicando no calendario ao lado</p>
            <div className="AgendarSegundaP">
                <h3>O valor da diária é:</h3>
                <p>R$96,54</p>
                <button>Agendar</button>
            </div>
            

            
        </div>

        </div>


    <Calendario/>
    
    <footer>
        <Footer />
    </footer>

    
    </div> )
}