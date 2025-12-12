import Footer from "@/components/ui/Footer";
import CheckoutCard from "@/components/checkout/CheckoutCard";
import Title from "@/components/ui/Title";

export default function CheckoutPage() {
    return (
        <div>

            <Title />

            <CheckoutCard />

            <div className="margem">
                <Footer />
            </div>
        
        </div>
    );
}