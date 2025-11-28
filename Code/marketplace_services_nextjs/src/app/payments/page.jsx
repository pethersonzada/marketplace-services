import paymentsForm from "@/components/payments/paymentsForm";
import Footer from "@/components/ui/Footer";
import orderSummary from "@/components/payments/orderSummary";
import '@/styles/paymentsPage.css';

export default function Payment() {
  return (
    <main>
       <div className="left_right">

        <div className="left">
            <paymentsForm />
        </div>

        <div className="right">
            <orderSummary/>
        </div>

       </div>
       
       
       <Footer />
    </main>
  );
}