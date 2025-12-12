"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/account.css";

export default function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      setError("Por favor, preencha Email e Senha para continuar!");
      setTimeout(() => setError(""), 4000);
      return;
    }

    router.push("/home");
  };

  return (
    <div className="account-both-sides">
      {error && <div className="form-error-overlay">{error}</div>}

      <div className="account-left-side">
        <div className="greeting-top">
          <h1>Olá, Seja</h1>
        </div>
        <h1>Bem Vindo!</h1>
      </div>

      <div className="account-right-side">
        <div className="login-content">
          <h1>Entre ou Cadastre-se</h1>

          <h4>Email</h4>
          <div className="email-login">
            <input
              type="text"
              className="main-input"
              placeholder="Digite o seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <h4>Senha</h4>
          <div className="password-login">
            <input
              type="password"
              className="main-input"
              placeholder="Digite a sua Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="campos-login">
              <button className="all-buttons" onClick={handleLogin}>
                Entrar
              </button>
              <p className="login-create-account">Esqueci minha senha</p>
              <p className="login-create-account">Criar minha conta</p>
            </div>
          </div>

          <div className="login-alternative">
            <p>Ou entre com</p>
            <img src="/logo/redes-sociais-coloridas.png" alt="" />
          </div>

          <footer className="login-footer">
            <p>Termos de serviço | Ajuda | Encontrei um erro</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
