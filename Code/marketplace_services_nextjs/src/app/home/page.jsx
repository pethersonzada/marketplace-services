import Title from "@/components/ui/Title";
import Coupon from "@/components/home/Coupon";
import Main from "@/components/home/Main";
import Footer from "@/components/ui/Footer";
import Services from "@/components/home/Services";
import Avatar from "@/components/ui/Avatar";

export default function HomePage() {
  return (
    <div>
      
      <Title />

      <Coupon />

      <Main />

      <Services />

      <div className="how-it-works-container">
        <h2>Como Funciona?</h2>
        <img src="/banner/how-it-works.png" alt="" />
      </div>

      <Avatar />

      <Footer />

    </div>
  );
}
