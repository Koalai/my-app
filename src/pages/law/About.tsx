import { useEffect } from "react";
import { Footer } from "../../components/law/Footer";
import { Navbar } from "../../components/law/Navbar";

const aboutData = [
  { number: "20", text: "Years of Experience" },
  { number: "2000", text: "Happy Clients" },
  { number: "Hundreds", text: "of Successfull Cases" },
];

const persons = [
  {
    img: "/law/avatar1.png",
    name: "Ceren Kurt",
    job: "Commercial  Lawyer",
    mail: "ceren@crnlaw.com",
  },
  {
    img: "/law/avatar2.png",
    name: "Eren Mert",
    job: "Criminal Lawyer",
    mail: "eren@crnlaw.com",
  },
  {
    img: "/law/avatar3.png",
    name: "Ecrin Ayvaz",
    job: "Family Lawyer",
    mail: "ecrin@crnlaw.com",
  },
];

export const About = () => {
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
    <div className="font-[Manrope] relative pt-[120px]">
      <Navbar />
      <p className="py-20 px-12 text-[48px]">About Us</p>
      <div className="grid grid-cols-2">
        <div className="flex flex-col py-[160px] px-12 gap-8 border-y-[1px]">
          <div className="flex flex-col gap-3">
            <p className="text-[19px] text-[#830000]">History</p>
            <p className="text-[40px]">
              CRN Law Firm is a leading legal institution known for its rich
              history and strong legal expertise
            </p>
          </div>
          <p className="text-[#696969]">
            The firm embarked on a mission to pursue justice. Initially starting
            as a small consultancy office, CRN rapidly expanded and earned a
            reputable standing, winning the trust of its clients. Adapting to
            the evolving needs of the industry, the firm has always prioritized
            providing quality and client-centric services. Today, with an
            exceptional team of highly qualified attorneys and profound
            expertise in various legal domains, CRN continues to offer
            comprehensive legal solutions to its clients.
          </p>
        </div>
        <img src="/law/about_bg_2.png" alt="background" className="h-full" />
      </div>
      <div className="grid grid-cols-3 ">
        {aboutData.map((item, index) => (
          <div
            className="py-[120px] px-[48px] border-[1px] flex flex-col gap-5 items-center"
            key={index}
          >
            <p className="text-[40px] text-[#830000]">{item.number}</p>
            <p className="text-[19px]">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
        <img src="/law/about_bg_3.png" alt="background" className="h-full" />
        <div className="flex flex-col py-[160px] px-12 gap-8 border-y-[1px]">
          <div className="flex flex-col gap-3">
            <p className="text-[19px] text-[#830000]">Vision</p>
            <p className="text-[40px]">
              Shaping a Sustainable Future: Our Vision for Positive Global
              Impact
            </p>
          </div>
          <p className="text-[#696969]">
            Our vision is filled with a strong belief in shaping the future. We
            strive to create sustainable changes that positively impact
            individuals and societies. Guided by the values of honesty,
            innovation, and responsibility, our aim is to become an influential
            partner in driving global transformation. Embracing the technology
            and knowledge era, we forge ahead with creative and pioneering
            initiatives. Our focus lies in projects that support social justice
            and preserve environmental sustainability, working hand in hand to
            make a positive impact worldwide.
          </p>
        </div>
      </div>
      <div className="py-[160px] px-12 flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-[19px] text-[#830000]">
            Your Partners in Legal Advocacy
          </p>
          <p className="text-[40px]">Our Team of Legal Experts</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {persons.map((p, index) => (
            <div className="flex flex-col border-[1px]" key={index}>
              <img src={p.img} className="h-[450px] w-full" />
              <div className="p-8 flex flex-col gap-3">
                <p className="text-[33px]">{p.name}</p>
                <p className="text-[#830000]">{p.job}</p>
                <p>{p.mail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
