const imgs = [
  "/real_estate_5/avatar1.png",
  "/real_estate_5/avatar2.png",
  "/real_estate_5/avatar3.png",
  "/real_estate_5/avatar4.png",
];
export const Hero = () => {
  return (
    <div className="pt-[60px] ">
      <div className="max-w-[1370px] mx-auto flex gap-3 min-h-[700px]">
        <div className="flex flex-col gap-[30px] w-1/2 flex-1">
          <p className="text-[70px] font-semibold leading-tight">
            THE PREMIER CHOICE IN REAL ESTATE SERVICES.
          </p>
          <div className="flex gap-[10px] h-full">
            <div className="flex flex-col justify-between h-full">
              <div className="gap-[50px] flex flex-col w-[500px]">
                <p className="text-lg">
                  Managing. Leasing. Selling. Our comprehensive real estate
                  management app is designed to meet all your property needs.
                </p>
                <div className="flex">
                  <button className="py-[18px] px-10 bg-[#CBB3FF] rounded-[50px] text-xl h-[54px] leading-none font-normal">
                    Get Started
                  </button>
                  <span className="rounded-full bg-[#CBB3FF] w-[54px] h-[54px] flex justify-center items-center -rotate-[24deg]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <a className="text-xl flex items-center">
                Your Path Starts Here
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                  className="inline-block ml-2"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </a>
            </div>
            <img
              className="h-[260px] w-[275px] mt-auto rounded-[32px]"
              src="/real_estate_5/hero_banner.png"
            />
          </div>
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat w-[580px] rounded-[32px] relative"
          style={{ backgroundImage: `url('/real_estate_5/hero_banner_2.png')` }}
        >
          <div className="bg-white rounded-[32px] p-4 w-[330px] absolute bottom-4 left-4">
            <div className="flex gap-8">
              <p className="text-[35px] font-medium">1,5K+</p>
              <div className="flex">
                {imgs.map((items, index) => (
                  <img
                    src={items}
                    alt="avatar"
                    className="h-[45px] w-[45px] object-cover rounded-full -ml-[10px]"
                    key={index}
                  />
                ))}
              </div>
            </div>
            <p>Happy clients and successful transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};
