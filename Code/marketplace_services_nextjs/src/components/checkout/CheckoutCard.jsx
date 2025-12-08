import "../../styles/checkout.css";

export default function CheckoutCard() {
    return (

        <div className="alinhar">
            <div className="checkout-card">
                <h2 className="checkout-card-title">Resumo do Pedido</h2>

                <div className="checkout-items">
                    <div className="checkout-item">
                        <span>Produto 1</span>
                        <span>R$ 50,00</span>
                    </div>
                    <div className="checkout-item">
                        <span>Produto 2</span>
                        <span>R$ 30,00</span>
                    </div>
                </div>

                <div className="checkout-total">
                    <span>Total:</span>
                    <strong>R$ 80,00</strong>
                </div>

                <div className="alinhar">
                    <a href="/payment">
                        <button className="all-buttons">Confirmar</button>
                    </a>
                    
                </div>

            </div>
        </div>

    );
}
