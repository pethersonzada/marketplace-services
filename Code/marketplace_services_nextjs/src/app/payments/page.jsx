import PaymentsForm from "@/components/payments/PaymentsForm";
import Footer from "@/components/ui/Footer";
import OrderSummary from "@/components/payments/OrderSummary";

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