import { Hero } from "../components/real_estate_5/Hero";
import { Navbar } from "../components/real_estate_5/Navbar";
import { Pricing } from "../components/real_estate_5/Pricing";
import { Services } from "../components/real_estate_5/Services";
import { Testimonials } from "../components/real_estate_5/Testimonials";
import { WhyUs } from "../components/real_estate_5/WhyUs";

export const Real_Estate_5 = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Pricing />
      <Testimonials />
    </div>
  );
};
