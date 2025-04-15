import { useEffect } from "react";
import { Navbar } from "../../components/law/Navbar";
import { Hero } from "../../components/law/Hero";
import { Partners } from "../../components/law/Partners";
import { About } from "../../components/law/About";
import { Message } from "../../components/law/Message";
import { Services } from "../../components/law/Services";
import { Consultation } from "../../components/law/Consultation";
import { Testimonials } from "../../components/law/Testimonials";
import { FAQ } from "../../components/law/FAQ";
import { Footer } from "../../components/law/Footer";

export const Law = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <div className="font-[Manrope] relative">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Message />
      <Services />
      <Consultation />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};
