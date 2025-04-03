import Navbar from "../real_estate/Navbar";
import { Header } from "./Header";

export const Hero = () => {
  return (
    <div className="bg-hero-bg-2 bg-cover bg-no-repeat bg-center flex flex-col">
      <Navbar />
      <Header />
    </div>
  );
};
