import TabButtons from "./TabButtons";

export const Header = () => {
  return (
    <div className="text-center my-32">
      <button className="border-[1px] rounded-[40px] text-white text-xs uppercase px-6 py-2">
        Let us guide your home
      </button>
      <p className="text-5xl text-white max-w-lg mx-auto mt-[20px] font-medium">
        Discover a place you'll love to live
      </p>
      <div className="mt-5 flex flex-col items-center gap-4">
        <TabButtons />
        <div className="bg-white rounded-[50px] flex py-1 w-5/12 justify-between pl-5 pr-1">
          <input
            placeholder="Enter Name, Keywords..."
            className="bg-transparent placeholder-black"
          />
          <div className="rounded-full bg-[#E7C873] p-3">
            <img src="/real_estate/magnify.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
