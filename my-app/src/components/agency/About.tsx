const data = {
  paragraph:
    "At Innovate Solutions, we are a dedicated team of professionals passionate about delivering cutting-edge solutions to help businesses thrive in a digital world. With years of experience in technology and innovation, we specialize in providing tailored services that meet the unique needs of our clients. Our mission is to empower organizations by combining creativity, expertise, and the latest advancements to drive success. Let us partner with you to transform your ideas into reality and achieve your business goals.",
  Why: [
    "Proven Expertise",
    "Customer-Centric Approach",
    "Innovative Solutions",
    "Reliable Support",
  ],
  Why2: [
    "Cost-Effective Solutions",
    "Timely Delivery",
    "Scalable Services",
    "Transparent Communication",
  ],
};

export const About = () => {
  return (
    <div id="about" className="py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <img
              src="/about.jpg"
              className="w-[520px] mt-2 bg-white border-r-0 shadow-xl"
              alt=""
            />
          </div>
          <div className="about-text">
            <h2 className=" mb-4 pb-4 text-3xl font-bold after:content-['']  after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-blue-500">
              About Us
            </h2>
            <p className="leading-6 my-7 text-gray-600">{data.paragraph}</p>
            <h3 className="text-xl mb-5 font-semibold">Why Choose Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="space-y-1.5">
                {data.Why.map((d, i) => (
                  <li
                    key={`${d}-${i}`}
                    className="ml-1.5 list-none p-0 before:content-['\f00c'] before:font-[FontAwesome] before:text-blue-400 before:text-xs before:font-light before:pr-2"
                  >
                    {d}
                  </li>
                ))}
              </ul>
              <ul className="space-y-1.5">
                {data.Why2.map((d, i) => (
                  <li
                    key={`${d}-${i}`}
                    className="ml-1.5 list-none p-0 before:content-['\f00c'] before:font-[FontAwesome] before:text-blue-400 before:text-xs before:font-light before:pr-2"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
