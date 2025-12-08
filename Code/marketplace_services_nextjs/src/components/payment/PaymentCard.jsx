"use client";

import "../../styles/payment.css";

export default function PaymentPage() {
  return (
    <div className="checkout-page">
      <div className="checkout-form-container">
        <h1 className="checkout-title">Pedido Finalizado</h1>
        <hr className="checkout-divider" />

        <p className="success-message">🎉 Seu pedido foi realizado com sucesso!</p>
        <p className="success-subtitle">
          Obrigado por escolher nossos serviços! Em breve você receberá mais informações no seu e-mail.
        </p>

        <a href="/home">
          <button className="btn btn-pay">Voltar ao Início</button>
        </a>
      </div>
    </div>
  );
}
