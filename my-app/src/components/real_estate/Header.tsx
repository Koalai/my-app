export const Header = () => {
  return (
    <div className="mt-[20px]">
      <div className="text-center text-white  flex flex-col gap-[20px]">
        <h2 className="text-4xl font-bold">Enjoy The Finest Homes</h2>
        <p>From as low as $10 per day with limited time offer discounts</p>
      </div>
      <div className=" flex bg-[#1A1A1A] rounded-[24px] p-4 mx-auto mt-[150px] w-[65%]">
        <div className="flex flex-col border-r-[1px] border-white border-opacity-10 gap-1 justify-center w-[295px]">
          <label className="text-[#969696] text-sm">Keyword</label>
          <input
            placeholder="Enter Keyword"
            className="bg-transparent placeholder-white text-sm"
          />
        </div>
        <div className="flex flex-col border-r-[1px] border-white border-opacity-10  gap-1 justify-center px-4 w-[295px]">
          <label className="text-[#969696] text-sm">Status</label>
          <div className="flex text-white text-sm justify-between">
            <p>All Status</p>
            <img src="/real_estate/dropdown_arrow.svg" alt="arrow" />
          </div>
        </div>
        <div className="flex flex-col  gap-1 mr-[60px] justify-center border-r-[1px] border-white border-opacity-10 px-4 w-[295px]">
          <label className="text-[#969696] text-sm">Type</label>
          <button className="flex  text-white text-sm justify-between">
            All Type
            <img src="/real_estate/dropdown_arrow.svg" alt="arrow" />
          </button>
        </div>
        <div className="flex gap-[10px]">
          <button className="py-2 flex px-[20px] text-white gap-[10px] border-white border-opacity-10 border-[1px] rounded-[12px] items-center justify-center">
            <img
              src="/real_estate/filter.svg"
              alt="filter"
              className="w-[18px] h-[18px]"
            />
            <span className="whitespace-nowrap">Filter</span>
          </button>
          <button className="px-4 py-2 flex bg-[#E7C873] rounded-[12px]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
