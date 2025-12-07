import "../../styles/avatar.css";

export default function Avatar() {
    return <div>

        <div className="how-it-works-container">
            <h2>Conheça nossos principais prestadores de serviço!</h2>
        </div>

        <div className="profile-card-container">

            <a href="/profile">
            <div className="profile-card">

                <div className="profile-card-left-side">
                    <img src="/avatar/1.png" alt="Avatar" />
                    <h3>Snoop Dogg</h3>
                    <p className="profile-card-left-side-func">Animador de Festas</p>

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
            </a>

            <a href="/profile">
            <div className="profile-card">

                <div className="profile-card-left-side">
                    <img src="/avatar/10.png" alt="Avatar" />
                    <h3>Walter White</h3>
                    <p className="profile-card-left-side-func">Químico</p>

                </div>

                <div className="profile-card-right-side">

                    <div className="info-block">
                        <p className="profile-card-number">4.562</p>
                        <p className="profile-card-label">negócios fechados</p>
                    </div>

                    <div className="info-block">
                        <p className="profile-card-number-39">4,9/5 ⭐</p>
                        <p className="profile-card-label">estrelas</p>
                    </div>

                    <div className="info-block">
                        <p className="profile-card-number">7</p>
                        <p className="profile-card-label">anos realizando serviços</p>
                    </div>

                </div>

            </div>
            </a>

            <a href="/profile">
            <div className="profile-card">

                <div className="profile-card-left-side">
                    <img src="/avatar/21.png" alt="Avatar" />
                    <h3>Johnny Cash</h3>
                    <p className="profile-card-left-side-func">Desenvolvedor</p>

                </div>

                <div className="profile-card-right-side">

                    <div className="info-block">
                        <p className="profile-card-number">17.568</p>
                        <p className="profile-card-label">negócios fechados</p>
                    </div>

                    <div className="info-block">
                        <p className="profile-card-number-39">5/5 ⭐</p>
                        <p className="profile-card-label">estrelas</p>
                    </div>

                    <div className="info-block">
                        <p className="profile-card-number">22</p>
                        <p className="profile-card-label">anos realizando serviços</p>
                    </div>

                </div>

            </div>
            </a>

        </div>

         <div className="see-more">
            <a href="/service-providers">
                <h3>Visualizar mais prestadores de serviço</h3>
            </a>
        </div>

    </div>

}

