"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import "../../styles/checkout.css";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const router = useRouter();

  const handleConfirm = () => {
    confetti({
      particleCount: 160,
      spread: 90,
      origin: { y: 0.6 }
    });

    router.push("/payment"); // redireciona na hora
  };

  return (
    <div className="checkout-page">
      <div className="checkout-form-container">
        <h1 className="checkout-title">Pagamento</h1>
        <hr className="checkout-divider" />

        <div className="payment-methods">
          <label className={`option ${paymentMethod === "credit-card" ? "active" : ""}`}>
            <input
              type="radio"
              name="payment"
              value="credit-card"
              checked={paymentMethod === "credit-card"}
              onChange={() => setPaymentMethod("credit-card")}
            />
            Cartão de Crédito
          </label>

          <label className={`option ${paymentMethod === "boleto" ? "active" : ""}`}>
            <input
              type="radio"
              name="payment"
              value="boleto"
              checked={paymentMethod === "boleto"}
              onChange={() => setPaymentMethod("boleto")}
            />
            Boleto
          </label>

          <label className={`option ${paymentMethod === "pix" ? "active" : ""}`}>
            <input
              type="radio"
              name="payment"
              value="pix"
              checked={paymentMethod === "pix"}
              onChange={() => setPaymentMethod("pix")}
            />
            PIX
          </label>
        </div>

        {paymentMethod === "credit-card" && (
          <div className="payment-form fade-in">
            <label htmlFor="cardNumber">Número do Cartão</label>
            <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" />

            <div className="row two-inputs">
              <div>
                <label htmlFor="expiry">Validade</label>
                <input type="text" id="expiry" placeholder="MM/AA" />
              </div>
              <div>
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="123" />
              </div>
            </div>

            <label htmlFor="cardName">Nome no Cartão</label>
            <input type="text" id="cardName" placeholder="Nome impresso" />
          </div>
        )}

        {paymentMethod === "boleto" && (
          <div className="payment-form fade-in">
            <p>Boleto gerado após a confirmação do pedido.</p>
          </div>
        )}

        {paymentMethod === "pix" && (
          <div className="payment-form fade-in">
            <p>Use o QR code para pagar via PIX.</p>
          </div>
        )}

        <button className="btn btn-pay" onClick={handleConfirm}>
          Confirmar Pedido
        </button>

        <button className="btn btn-cancel">Cancelar</button>
      </div>

      <div className="order-summary-container fade-in">
        <h2 className="summary-title">Resumo do pedido</h2>
        <div className="product-item">
          <span className="product-name">Serviço A</span>
          <span className="product-price">R$ 100,00</span>
        </div>
        <hr className="divider" />
        <div className="total-row">
          <span>Total</span>
          <strong className="total-price">R$ 100,00</strong>
        </div>
      </div>
    </div>
  );
}
