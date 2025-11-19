    export default function Banner() {
        return <div className = "coupon-card">
            <img className = "discount" src="/icons/desconto.png" alt="Discount" />

            <div className = "banner-discount-content">

                <div>
                    <p>Você tem 6 Cupons de desconto não utilizados!</p>
                </div>

                <div className = "arrow-down">
                    <a href="#"><img src="/icons/keyboard_arrow_down.png" alt="Arrow Down" /></a>
                </div>

            </div>

        </div>;
    }