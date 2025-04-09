import { Banner } from "../components/real_estate_4/Banner";
import { Blog } from "../components/real_estate_4/Blog";
import { FAQ } from "../components/real_estate_4/FAQ";
import { Footer } from "../components/real_estate_4/Footer";
import { Navbar } from "../components/real_estate_4/Navbar";
import { Properties } from "../components/real_estate_4/Properties";
import { Services } from "../components/real_estate_4/Services";

export const RealEstate_4 = () => {
  return (
    <div className="relative">
      <Navbar />
      <Banner />
      <Properties />
      <Blog />
      <FAQ />
      <Services />
      <Footer />
    </div>
  );
};
