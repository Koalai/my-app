const data = [
  {
    num: "20",
    text: "Years of Experience",
  },
  {
    num: "2000",
    text: "Happy Clients",
  },
  {
    num: "Hundreds",
    text: "of Successfull Cases",
  },
];

export const Hero = () => {
  return (
    <div className="pt-[120px]">
      <div className="flex h-[1080px]">
        <div className="flex flex-col pt-12 px-12 w-1/2 justify-between">
          <div className="flex flex-col gap-8 pb-16 items-start">
            <p className="text-[48px]">
              Strategic <span className="text-[#830000]">Legal Solutions</span>{" "}
              for Today's Challenges
            </p>
            <p className="text-[#696969]">
              Our strategic legal expertise offers innovative solutions to
              navigate today's intricate legal landscape. Count on us to address
              complex issues with forward-thinking strategies and ensuring your
              success.
            </p>
            <button className="bg-[#830000] py-4 px-8 text-white">
              See Services
            </button>
          </div>
          <div className="grid grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                className="flex flex-col gap-3 pb-16 border-r-[1px] items-start last:border-none"
                key={index}
              >
                <span className="text-[28px]">{item.num}</span>
                <p className="text-[19px] text-[#696969]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ backgroundImage: `url('/law/banner_bg.png')` }}
          className="bg-center bg-no-repeat bg-cover flex-1"
        ></div>
      </div>
    </div>
  );
};
