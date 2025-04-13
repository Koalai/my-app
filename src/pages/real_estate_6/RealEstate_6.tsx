import { About } from "../../components/real_estate_6/About";
import { Banner } from "../../components/real_estate_6/Banner";
import { Footer } from "../../components/real_estate_6/Footer";
import { Navbar } from "../../components/real_estate_6/Navbar";
import { Process } from "../../components/real_estate_6/Process";
import { Projects } from "../../components/real_estate_6/Projects";
import { Services } from "../../components/real_estate_6/Services";

export const RealEstate_6 = () => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Process />
      <Projects />
      <Footer />
    </div>
  );
};
