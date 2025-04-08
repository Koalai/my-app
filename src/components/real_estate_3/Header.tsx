export const Header = () => {
  return (
    <div className="bg-[#101014] py-6 pl-48 flex gap-20 pr-8">
      <div className=" pt-4 flex-1">
        <img
          src="/real_estate_3/logo.svg"
          alt="logo"
          className="w-auto h-[21px]"
        />
        <div className=" mt-[100px]">
          <div className="rounded-2xl w-[150px] flex bg-white bg-opacity-10 px-2 py-1 items-center gap-2">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 bg-white rounded-full" />
              <div className="absolute inset-0 bg-white rounded-full animate-pulse-dot opacity-50" />
            </div>
            <p className="text-[#D0D1DB] text-sm ">Available for work</p>
          </div>
          <p className="text-6xl text-white ">
            Your trusted partner for quality home improvement
          </p>
          <p className="text-xl text-[#D0D1DB] mt-5">
            Refit delivers expert home improvements, creating beautiful and
            functional spaces with quality craftsmanship.
          </p>
          <button className="px-4 py-2 bg-white bg-opacity-10 text-white flex gap-5 items-center rounded-[50px] group hover:bg-white hover:text-black mt-6">
            Work with us{" "}
            <div className="bg-white rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-black -rotate-45 group-hover:rotate-0 transition-transform duration-300"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7-7 7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="bg-banner-real-estate3 bg-opacity-70 flex-1 bg-no-repeat min-w-[621px] min-h-[740px] relative bg-cover">
        <div className="flex gap-10 ml-auto mr-20 font-medium text-lg text-white pl-8 pt-4">
          <a href="#about">About</a>
          <a href="">Services</a>
          <a href="">Our work</a>
          <a href="">FAQs</a>
          <a href="">Contact</a>
        </div>
        <div className="absolute w-2/5 mx-auto bottom-4 right-4">
          <div className="bg-[#101014] bg-opacity-30 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-base leading-tight">
              "Refit has been a game-changer for my home. Their ability to blend
              functionality with exquisite design is unparalleled."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
