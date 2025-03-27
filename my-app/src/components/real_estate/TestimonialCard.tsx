const data = [
  {
    src: "/real_estate/avatar1.png",
    name: "Cameron Williamson",
    job: "Designer",
    paragragph:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
  {
    src: "/real_estate/avatar2.png",
    name: "Esther Howard",
    job: "Marketing",
    paragragph:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
  {
    src: "/real_estate/avatar3.png",
    name: "Devon Lane",
    job: "Developer",
    paragragph:
      "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.",
  },
];

export const TestimonialCard = () => {
  return (
    <>
      {data.map((item) => (
        <div className="rounded-[16px] p-[40px] w-[447px] bg-[#FFFFFF]">
          <div className="flex items-center gap-3 mb-8">
            <img src={item.src} alt="avatar" height={80} width={80} />
            <div className="flex flex-col gap-1 mr-8 flex-1">
              <p className="text-xs font-bold">{item.name}</p>
              <p className="text-xs">{item.job}</p>
            </div>
            <img
              src="/real_estate/quote.svg"
              alt="quote_icon"
              height={32}
              width={32}
            />
          </div>
          <p>{item.paragragph}</p>
        </div>
      ))}
    </>
  );
};
