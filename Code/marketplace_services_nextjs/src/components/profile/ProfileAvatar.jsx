import "../../styles/profileavatar.css";

export default function ProfileAvatar() {

    return (<div className="profile-card">

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
    )
}