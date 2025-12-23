import Bill from "./components/Bill";
import Business from "./components/Business";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PaymentMethod from "./components/PaymentMethod";
import ScrollTop from "./components/ScrollTop";
import ServiceCard from "./components/ServiceCard";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import HexGridBackground from "./components/HexGridBackground";
import { useRef } from "react";
import useScrollAnimation from "./utils/useScrollAnimation";

const App = () => {
  const heroRef = useRef();
  const statsRef = useRef();
  const businessRef = useRef();
  const billRef = useRef();
  const paymentRef = useRef();
  const testimonialsRef = useRef();
  const serviceRef = useRef();
  const footerRef = useRef();
  useScrollAnimation(heroRef);
  useScrollAnimation(statsRef);
  useScrollAnimation(businessRef);
  useScrollAnimation(billRef);
  useScrollAnimation(paymentRef);
  useScrollAnimation(testimonialsRef);
  useScrollAnimation(serviceRef);
  useScrollAnimation(footerRef);
  return (
    <div className="relative text-white w-full h-full overflow-hidden">
      <HexGridBackground />
      <div className="relative z-10">
        <Navbar />
        <ScrollTop />
        <div className="container px-5 md:px-10 mx-auto">
          <div ref={heroRef} className="scroll-fade-in">
            <Hero />
          </div>
          <div
            ref={statsRef}
            className="scroll-slide-up flex flex-col xs:flex-row flex-wrap items-center justify-between gap-6 md:gap-2 py-20"
          >
            <Stats number="3800" title="ACTIVE USER" />
            <Stats number="230" title="TRUSTED BY COMPANY" />
            <Stats number="$230M" title="TRANSACTION" />
          </div>
          <div ref={businessRef} className="scroll-slide-left">
            <Business />
          </div>
          <div ref={billRef} className="scroll-slide-right">
            <Bill />
          </div>
          <div ref={paymentRef} className="scroll-fade-in">
            <PaymentMethod />
          </div>
          <div ref={testimonialsRef} className="scroll-slide-up">
            <Testimonials />
          </div>
          <div ref={serviceRef} className="scroll-slide-left">
            <ServiceCard />
          </div>
          <div ref={footerRef} className="scroll-fade-in">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
