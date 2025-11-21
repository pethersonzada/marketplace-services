export default function Account() {
    return (
        <div className = "account-both-sides">
            <div className="account-left-side">
                
                <div className="greeting-top">
                    <h1>Olá, </h1>
                    <img className="login-logo" src="/logo/logo-branca.png" alt="Logo" />
                </div>

                <h1>Bem Vindo!</h1>

            </div>

            <div className="account-right-side">

                <div className = "login-content">

                    <h1>Entre ou Cadastre-se</h1>

                    <h4>Email</h4>
                    <div className = "email-login">

                        <input 
                        type="text"
                        className = "main-input"
                        placeholder="Digite o seu Email"
                        />

                    </div>

                    <div className = "password-login">

                        <h4>Senha</h4>
                        <input 
                        type="text"
                        className = "main-input"
                        placeholder="Digite a sua Senha"
                        />
                        <p className = "forgot-password">Esqueci a minha senha</p>

                        <div className = "campos-login">

                            <button className = "all-buttons">Entrar</button>
                            <p className = "login-create-account">Criar minha conta</p>

                        </div>

                    </div>

                    <div className = "login-alternative">

                        <p>Ou entre com</p>

                        <img src="/logo/redes-sociais-coloridas.png" alt="" />

                    </div>

                    <footer className = "login-footer">
                        <p>Termos de serviço | Ajuda | Encontrei um erro</p>
                    </footer>

                </div>
            </div>
        </div>
    );
}