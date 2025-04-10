export const Banner = () => {
  return (
    <div className="pt-[85px] px-4 pb-8">
      <div className="p-8 grid grid-cols-3 bg-banner-real-estate4 bg-cover  bg-no-repeat bg-center h-[1159px] rounded-[36px] ">
        <div className="flex flex-col justify-end h-full">
          <div className="flex gap-2  text-white">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z" />
            </svg>
            <p className="text-lg">Find your harmony</p>
          </div>
        </div>
        <div className="flex flex-col justify-end h-full">
          <div className="flex gap-2  text-white mx-auto">
            <button className="py-3 px-8 flex gap-2 items-center rounded-3xl bg-[#05060b4d] backdrop-blur-md text-lg">
              Explore home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#FFFFFF"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-end h-full">
          <div className="flex gap-2  text-white">
            <div className="p-8 flex flex-col gap-[10px] bg-[#ebebeb] rounded-3xl ml-auto text-black w-[190px]">
              <p className="text-[56px] font-medium">70+</p>
              <p>Experts working on your success</p>
              <div className="flex justify-center items-center">
                <div className="relative  w-[32px] h-[32px]">
                  <img
                    src="/real_estate_3/avatar1.png"
                    alt="Person 1"
                    className="w-full h-full rounded-full object-cover border-4 border-white"
                  />
                </div>
                <div className="relative w-[32px] h-[32px] -m-[12px] z-10">
                  <img
                    src="/real_estate_3/avatar1.png"
                    alt="Person 2"
                    className="w-full h-full rounded-full object-cover border-4 border-white"
                  />
                </div>
                <div className="relativew-[32px] h-[32px] z-20">
                  <img
                    src="/real_estate_3/avatar1.png"
                    alt="Person 3"
                    className="w-full h-full rounded-full object-cover border-4 border-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
