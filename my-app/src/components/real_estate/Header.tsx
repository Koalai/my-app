export const Header = () => {
  return (
    <div className="flex flex-col gap-[100px] mt-[20px]">
      <div className="text-center text-white  flex flex-col gap-[20px]">
        <h2 className="text-4xl font-bold">Enjoy The Finest Homes</h2>
        <p>From as low as $10 per day with limited time offer discounts</p>
      </div>
      <div className=" flex bg-[#1A1A1A] rounded-[24px] p-[20px] mx-auto">
        <div className="flex flex-col border-r-[1px] border-white border-opacity-10 px-[30px] gap-1 justify-center">
          <label className="text-[#969696] text-sm">Keyword</label>
          <input
            placeholder="Enter Keyword"
            className="bg-transparent placeholder-white text-base"
          />
        </div>
        <div className="flex flex-col border-r-[1px] border-white border-opacity-10 px-[30px] gap-1 justify-center">
          <label className="text-[#969696] text-sm">Status</label>
          <button className="flex justify-between text-white text-base gap-[150px]">
            All Status
            <img src="/real_estate/dropdown_arrow.svg" alt="arrow" />
          </button>
        </div>
        <div className="flex flex-col px-[30px] gap-1 mr-[60px] justify-center">
          <label className="text-[#969696] text-sm">Type</label>
          <button className="flex justify-between text-white text-base gap-[150px]">
            All Type
            <img src="/real_estate/dropdown_arrow.svg" alt="arrow" />
          </button>
        </div>
        <div className="flex gap-[10px]">
          <button className="px-[30px] py-4 flex text-white gap-[10px] border-white border-opacity-10 border-[1px] rounded-[12px]">
            <img src="/real_estate/filter.svg" alt="filter" />
            Filter
          </button>
          <button className="px-[30px] py-4 flex bg-[#E7C873] rounded-[12px]">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
