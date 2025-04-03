export const About = () => {
  return (
    <div className="bg-[#1F4B43] pt-[120px] pb-[60px]">
      <div className="flex px-32 gap-24">
        <div className="relative">
          <img src="/real_estate/team.png" width={400} height={400} />
          <div className="absolute top-2 left-2 gap-2 bg-[#f3f3f5] flex rounded-lg px-2 py-2">
            <div className="rounded-full bg-yellow-100 px-[14px] flex items-center">
              <img src="/real_estate/group.svg" className="w-3 h-3" />
            </div>
            <div>
              <p className="text-xs">Total Clients</p>
              <p className="font-bold text-sm">7,000M</p>
            </div>
          </div>
        </div>
        <div className="my-auto">
          <p className="text-white text-3xl mt-4">
            Local expertise for luxury homes
          </p>
          <p className="text-[#ADADAD] text-xs font-thin  mt-4">
            Pellentesque egestas elementum egestas faucibus sem. Velit nunc
            egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium.
            Mi mauris nulla ac dictum ut mauris non.
          </p>
          <button className="bg-[#E7C873] rounded-xl  mt-4 p-2 text-sm">
            Learn More →
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-32 mt-8 text-center">
        <div>
          <p className="text-[#E7C873] text-2xl font-semibold">$18M</p>
          <p className="text-[#ADADAD] text-xs font-thin  mt-2">
            Owned from properties transactions
          </p>
        </div>
        <div>
          <p className="text-[#E7C873] text-2xl font-semibold">26K</p>
          <p className="text-[#ADADAD] text-xs font-thin  mt-2">
            Properties for Buy
          </p>
        </div>
        <div>
          <p className="text-[#E7C873] text-2xl font-semibold">18K</p>
          <p className="text-[#ADADAD] text-xs font-thin  mt-2">
            Properties for Sell
          </p>
        </div>
        <div>
          <p className="text-[#E7C873] text-2xl font-semibold">800</p>
          <p className="text-[#ADADAD] text-xs font-thin  mt-2">
            Daily completed transactions.
          </p>
        </div>
      </div>
    </div>
  );
};
