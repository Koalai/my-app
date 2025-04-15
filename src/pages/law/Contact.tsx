import { useEffect } from "react";
import { Footer } from "../../components/law/Footer";
import { Navbar } from "../../components/law/Navbar";

const data = [
  {
    img: "/law/phone.svg",
    text: "000-000-00-07",
  },
  {
    img: "/law/envelope.svg",
    text: "crnlaw@example.com",
  },
  {
    img: "/law/mapPin.svg",
    text: "297 Westheimer Rd. Santa Ana, Illinois 85486",
  },
];

export const Contact = () => {
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
      <p className="py-20 px-12 text-[48px]">Contact</p>
      <div className="grid grid-cols-2">
        <div className="flex flex-col py-[160px] px-12 gap-8 border-y-[1px]">
          <p className="text-[40px]">Leave Us A Message</p>
          <form className="flex flex-col gap-4 ">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-4 bg-[#FAFAFA] border-none outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="p-4 bg-[#FAFAFA] border-none outline-none"
              />
            </div>
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="p-4 bg-[#FAFAFA] border-none outline-none resize-none min-h-[260px]"
            ></textarea>
            <button className="p-4 bg-[#830000] text-white">Send</button>
          </form>
        </div>
        <img src="/law/contact_bg.png" alt="banner" className="h-full" />
      </div>
      <div className="grid grid-cols-3">
        {data.map((item, index) => (
          <div
            className="py-[120px] px-12 flex items-center flex-col gap-5 border-[1px]"
            key={index}
          >
            <img src={item.img} alt="logo" />
            <p className="text-[19px]">{item.text}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
