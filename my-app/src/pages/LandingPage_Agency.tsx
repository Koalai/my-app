import { About } from "../components/agency/About";
import { Contact } from "../components/agency/Contact";
import { Features } from "../components/agency/Features";
import { Gallery } from "../components/agency/Gallery";
import { Header } from "../components/agency/Header";
import { Navigation } from "../components/agency/Navigation";
import { Team } from "../components/agency/Team";
import { Testimonials } from "../components/agency/Testimonials";

export default function LandingPage_Agency() {
  return (
    <div>
      <Navigation />
      <Header />
      <Features />
      <About />
      <Gallery />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  );
}
