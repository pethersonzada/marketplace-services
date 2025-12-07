import "../../styles/profile.css";

export default function ProfilePage() {
    return (
        <div className="profile-container">

            <div className="profile-header">
                <div className="profile-header-left">
                    <img
                        src="/avatar/10.png"
                        alt="User"
                        className="profile-photo"
                    />

                    <div>
                        <h2 className="profile-title">Walter White</h2>
                        <p className="profile-subtitle">walterwhite1958@gmail.com</p>
                    </div>
                </div>

                <div className="profile-header-buttons">
                    <button className="all-buttons">Marcar</button>
                    <button className="all-buttons">Contato</button>
                </div>
            </div>

            <div className="profile-card">
                <div className="profile-row">
                    <div className="profile-field">
                        <span className="profile-label">Nome Completo</span>
                        <p className="profile-value">Walter Hartwell White</p>
                    </div>

                    <div className="profile-field">
                        <span className="profile-label">Apelido</span>
                        <p className="profile-value">Heisenberg</p>
                    </div>
                </div>

                <div className="profile-row">
                    <div className="profile-field">
                        <span className="profile-label">Gênero</span>
                        <p className="profile-value">Masculino</p>
                    </div>

                    <div className="profile-field">
                        <span className="profile-label">País</span>
                        <p className="profile-value">Estados Unidos</p>
                    </div>
                </div>

                <div className="profile-row">
                    <div className="profile-field">
                        <span className="profile-label">Língua</span>
                        <p className="profile-value">Inglês</p>
                    </div>

                    <div className="profile-field">
                        <span className="profile-label">Zona</span>
                        <p className="profile-value">UTC -5</p>
                    </div>
                </div>
            </div>

            <div className="profile-card">
                <h3 className="profile-section-title">Endereços de Email</h3>

                <div className="profile-email-box">
                    <p className="profile-value">walterwhite1958@gmail.com</p>
                    <span className="profile-date">1 month ago</span>
                </div>

                <div className="profile-email-box">
                    <p className="profile-value">contato@heisenberg.com</p>
                    <span className="profile-date">6 months ago</span>
                </div>
            </div>

            <div className="profile-card">
                <h3 className="profile-section-title">Comentários sobre o trabalho</h3>

                <div className="comment-box">
                    <img src="/avatar/21.png" alt="User" className="comment-photo" />
                    <div className="comment-content">
                        <div className="comment-header">
                            <p className="comment-name">Mariana Silva</p>
                            <div className="comment-rating">
                                <span className="stars">⭐⭐⭐⭐⭐</span>
                                <span className="rating-number">5.0/5</span>
                            </div>
                        </div>
                        <p className="comment-text">
                            Excelente profissional! Muito dedicado e sempre entrega tudo no prazo. Recomendo demais.
                        </p>
                    </div>
                </div>

                <div className="comment-box">
                    <img src="/avatar/1.png" alt="User" className="comment-photo" />
                    <div className="comment-content">
                        <div className="comment-header">
                            <p className="comment-name">Carlos Moreira</p>
                            <div className="comment-rating">
                                <span className="stars">⭐⭐⭐⭐</span>
                                <span className="rating-number">4.0/5</span>
                            </div>
                        </div>
                        <p className="comment-text">
                            Trabalhar com ele foi incrível, sempre pronto pra ajudar e resolver qualquer pepino.
                        </p>
                    </div>
                </div>

                <div className="comment-box">
                    <img src="/avatar/13.png" alt="User" className="comment-photo" />
                    <div className="comment-content">
                        <div className="comment-header">
                            <p className="comment-name">Fernanda Costa</p>
                            <div className="comment-rating">
                                <span className="stars">⭐⭐⭐⭐⭐</span>
                                <span className="rating-number">4.8/5</span>
                            </div>
                        </div>
                        <p className="comment-text">
                            Profissional de confiança, criativo e muito competente. Ficou perfeito o resultado final!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
