import { About } from "../components/real_estate_3/About";
import { Contact } from "../components/real_estate_3/Contact";
import { Footer } from "../components/real_estate_3/Footer";
import { Gallery } from "../components/real_estate_3/Gallery";
import { Header } from "../components/real_estate_3/Header";
import { Services } from "../components/real_estate_3/Services";
import { Testimonials } from "../components/real_estate_3/Testimonials";

export const RealEstate_3 = () => {
  return (
    <div className="">
      <Header />
      <About />
      <Gallery />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};
