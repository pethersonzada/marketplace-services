import PaymentsForm from "@/components/payments/paymentsForm";
import Footer from "@/components/ui/Footer";
import OrderSummary from "@/components/payments/orderSummary";
import '@/styles/paymentsPage.css';

export default function Payment() {
  return (
    <main>
       <div className="left_right">

        <div className="left">
            <PaymentsForm />
        </div>

        <div className="right">
            <OrderSummary/>
        </div>

       </div>
       
       <Footer />
    </main>
  );
}