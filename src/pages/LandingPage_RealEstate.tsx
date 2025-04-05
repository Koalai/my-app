import { About } from "../components/real_estate/About";
import { Brands } from "../components/real_estate/Brands";
import { Contact } from "../components/real_estate/Contact";
import { Features } from "../components/real_estate/Features";
import { Footer } from "../components/real_estate/Footer";
import { Hero } from "../components/real_estate/Hero";
import { PropertiesList } from "../components/real_estate/PropertiesList";
import Team from "../components/real_estate/Team";
import { Testimonial } from "../components/real_estate/Testimonial";

export const LandingPage_RealEstate = () => {
  return (
    <div>
      <Hero />
      <Features />
      <About />
      <PropertiesList />
      <Brands />
      <Testimonial />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};
