import { Banner } from "../../components/ecommerce_2/Banner";
import { Brands } from "../../components/ecommerce_2/Brands";
import { Catergories } from "../../components/ecommerce_2/Catergories";
import { Footer } from "../../components/ecommerce_2/Footer";
import { Header } from "../../components/ecommerce_2/Header";
import { NewArrivals } from "../../components/ecommerce_2/NewArrivals";
import { Testimonial } from "../../components/ecommerce_2/Testimonial";
import { TopSelling } from "../../components/ecommerce_2/TopSelling";

export const Ecommerce_2 = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <Catergories />
      <Testimonial />
      <Footer />
    </div>
  );
};
