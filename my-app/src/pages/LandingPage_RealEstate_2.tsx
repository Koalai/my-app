import { Brands } from "../components/real_estate/Brands";
import { Features } from "../components/real_estate/Features";
import { Footer } from "../components/real_estate/Footer";
import { PropertiesList } from "../components/real_estate/PropertiesList";
import { Testimonial } from "../components/real_estate/Testimonial";
import { About } from "../components/real_estate_2/About";
import { ArticleNews } from "../components/real_estate_2/ArticlesList";
import { Hero } from "../components/real_estate_2/Hero";
import { Why } from "../components/real_estate_2/Why";

export const LandingPage_RealEstate_2 = () => {
  return (
    <>
      <Hero />
      <PropertiesList />
      <Features />
      <Why />
      <About />
      <Testimonial />
      <Brands />
      <ArticleNews />
      <Footer />
    </>
  );
};
