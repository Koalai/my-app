import { Banner } from "../components/ecommerce/Banner";
import { Footer } from "../components/ecommerce/Footer";
import { Header } from "../components/ecommerce/Header";
import { Category } from "../components/ecommerce/Category";
import { Product } from "../components/ecommerce/Product";
import { BannersList } from "../components/ecommerce/BannersList";
import { Discount } from "../components/ecommerce/Discount";
import { Banner2 } from "../components/ecommerce/Banner2";

export const Ecommerce = () => {
  return (
    <>
      <Header />
      <Banner isVertical={false} />
      <Category />
      <Product />
      <BannersList />
      <Discount />
      <Banner2 />
      <Footer />
    </>
  );
};
