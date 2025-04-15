const data = [
  {
    icon: "/law/check.svg",
    text: "Efficient legal solutions tailored to clients.",
  },
  {
    icon: "/law/chat.svg",
    text: "Clear communication throughout the process.",
  },
  {
    icon: "/law/shieldCheck.svg",
    text: "The experienced team has a proven track record of success.",
  },
  {
    icon: "/law/lock.svg",
    text: "Protecting creative innovations and intellectual property.",
  },
];

export const About = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="py-[160px] px-12 flex flex-col gap-8 items-start">
        <div className="flex flex-col gap-3">
          <p className="text-[19px] text-[#830000]">About Us</p>
          <p className="text-[40px] ">
            Our Experienced Attorneys Combine Legal Expertise With{" "}
            <span className="text-[#830000]">Personalized Service</span>
          </p>
        </div>
        <p>
          Welcome to CRN Law Firm, where . With a deep understanding of the
          ever-changing legal landscape, we are committed to protecting our
          clients' rights and serving their best interests. From corporate law
          and commercial litigation to intellectual property, real estate,
          employment law, and family law, our team has a proven track record of
          success in a wide range of legal matter.
        </p>
        <button className="py-4 px-8 bg-[#830000] text-white">
          Learn more
        </button>
      </div>
      <div className="grid grid-cols-2">
        {data.map((item, index) => (
          <div
            className="flex flex-col  justify-center items-center p-10 gap-5 border-[1px]"
            key={index}
          >
            <img src={item.icon} alt="icon" className="w-8 h-8" />
            <p className="text-[19px] text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
