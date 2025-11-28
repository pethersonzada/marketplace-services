import "../../styles/coupon-card.css";
import "../../styles/global.css";

export default function CouponCard() {
    return <div className="coupon-items">
        <div className="coupon-card">

            <div className="coupon-title">

                <img src="/icons/desconto.png" alt="" />
                <h4>R$15 Off em Qualquer coisa!</h4>

            </div>

            <div className="coupon-main-text">

                <p>Cupom de boas vindas! Valor mínimo de R$19,99 em qualquer serviço.</p>

            </div>

            <div className="coupon-main-content">

                <button className="all-buttons">Ver Lojas</button>
                <p>Sem tempo definido</p>

            </div>

            <div className="coupon-footer">

                <p>O cupom será aplicado no pagamento</p>

            </div>

        </div>
    </div>;
}