export const Navbar = () => {
  return (
    <div className="max-w-[1370px] mx-auto ">
      <div className="py-10 px-5 flex gap-5 justify-between items-center">
        <img src="/real_estate_5/Logo.png" alt="logo" className="h-9" />
        <div className="flex gap-8 text-[20px] items-center">
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">Why us</a>
          <a href="">Pricing</a>
          <a href="">Blog</a>
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
      </div>
    </div>
  );
};
