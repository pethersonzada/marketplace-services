import PaymentsForm from "@/components/payments/paymentsForm";
import OrderSummary from "@/components/payments/orderSummary";
import Footer from "@/components/ui/Footer";
import '@/styles/paymentsPage.css';

export default function Payment() {
  return (
    <main>
      
      <div className="principal">
        <div className="left_right">
        <div className="left">
          <PaymentsForm />
        </div>

        <div className="right">
          <OrderSummary />
        </div>

        </div>
      </div>
       
       <Footer />
    </main>
  );
}