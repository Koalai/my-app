import { Header } from "./Header";
import Navbar from "./Navbar";

export const Hero = () => {
  return (
    <div className="bg-hero-bg bg-cover min-h-[650px] bg-no-repeat bg-center flex flex-col">
      <Navbar />
      <Header />
    </div>
  );
};
