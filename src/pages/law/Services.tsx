import { useEffect } from "react";
import { Footer } from "../../components/law/Footer";
import { Navbar } from "../../components/law/Navbar";

const data = [
  {
    title: "Commercial Law",
    descriptions:
      "Commercial Law is the branch of law that regulates the establishment, management, and commercial transactions of businesses. It plays a crucial role in resolving disputes and ensuring legal compliance in commercial dealings.",
  },
  {
    title: "Intellectual Property",
    descriptions:
      "Intellectual Property (IP) refers to creations of the mind, such as inventions, art, and trademarks, protected by law to promote innovation and creativity.",
  },
  {
    title: "Employment Law",
    descriptions:
      "Employment Law, the area of law that governs the legal relationship between employers and employees. It encompasses a wide range of issues related to the workplace.",
  },
  {
    title: "Real Estate Law",
    descriptions:
      "Real Estate Law is the legal domain that deals with the legal aspects of immovable properties, such as houses, lands, buildings, etc.",
  },
  {
    title: "General Contracts",
    descriptions:
      "General Contracts are legally binding agreements between parties, covering various everyday situations like buying, selling, services, leasing, or lending.",
  },
  {
    title: "Tax Law",
    descriptions:
      "Tax Law, the legal field that deals with the rules, regulations, and policies governing taxation. It encompasses various tax-related matters, such as income tax, corporate tax, property tax, sales tax, and international taxation.",
  },
];

export const Services = () => {
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
      <p className="py-20 px-12 text-[48px]">Services</p>
      <div className="grid grid-cols-3 grid-rows-2 gap-16 py-[160px] px-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="border-r-[1px] py-8 pr-16 relative group overflow-hidden"
          >
            <div className="flex flex-col gap-4 w-4/5 z-10 relative">
              <span className="text-[19px] text-[#830000]">/0{index + 1}</span>
              <p className="text-[33px]">{item.title}</p>
              <p className="text-[#696969]">{item.descriptions}</p>
            </div>
            <div className="bg-[#830000] w-[80px] absolute right-0 h-full top-0 flex justify-center items-center transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
