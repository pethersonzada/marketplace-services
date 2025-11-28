import "../../styles/coupon-banner.css";
import Link from "next/link"

export default function Coupon() {
    return (
        <div className="coupon-card">
            <img className="discount" src="/icons/desconto.png" alt="Discount" />

            <div className="banner-discount-content">
                <div>
                    <p>Você tem 6 Cupons de desconto não utilizados!</p>
                </div>

                <div className="arrow-down">
                        <img src="/icons/keyboard_arrow_down.png" alt="Arrow Down" />
                </div>
            </div>
        </div>
    );
}
