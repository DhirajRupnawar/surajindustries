import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import ServicesSection from "./components/category";
import ProductSection from "./components/products";
import AboutUs from "./components/aboutus";
import TestimonialsContactSection from "./components/testcontact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <ServicesSection />
      <ProductSection />
      <AboutUs />
      <TestimonialsContactSection />
      <Footer />
    </div>
  );
}