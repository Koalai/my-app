import { Header } from "./Header";
import Navbar from "./Navbar";

export const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover min-h-[600px] bg-no-repeat bg-center">
      <Navbar />
      <Header />
    </div>
  );
};
