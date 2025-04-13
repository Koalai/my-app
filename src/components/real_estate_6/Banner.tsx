export const Banner = () => {
  return (
    <div className="pt-[100px] px-10 pb-10">
      <div
        style={{ backgroundImage: `url('/real_estate_6/banner_bg.png')` }}
        className="bg-center bg-no-repeat bg-cover rounded-[20px] h-screen relative"
      >
        <div className="p-8 rounded-[20px] bg-white flex flex-col gap-6 absolute left-8 bottom-8 w-[366px]">
          <div className="flex flex-col gap-4">
            <p className="text-[48px] leading-tight">
              Redefining the Art of Architecture
            </p>
            <p className="w-2/3">
              Discover spaces where innovation meets nature.
            </p>
          </div>
          <div className="flex gap-4 items-center h-[57px] text-[14px]">
            <button className="py-4 px-6 rounded-[20px] bg-black text-white">
              Explore Projects
            </button>
            <button className="py-4 px-6 rounded-[20px] border-[1px] border-black">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
