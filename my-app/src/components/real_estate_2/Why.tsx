export const Why = () => {
  return (
    <div className="bg-[#E7C873] text-center py-20 rounded-xl">
      <p className="text-2xl font-bold">Why Choose Us</p>
      <p className="text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-4 px-20 mt-20 gap-4">
        <div className="flex flex-col gap-2 items-center ">
          <img src="/real_estate/homeSearch.svg" width={50} height={50} />
          <p className="font-bold">Find your future home</p>
          <p>
            We help you find a new home by offering a smart real estate
            experience
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <img src="/real_estate/homePerson.svg" width={50} height={50} />
          <p className="font-bold">Experienced agents</p>
          <p>Find an experienced agent who knows your market best</p>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <img src="/real_estate/homeMoney.svg" width={50} height={50} />
          <p className="font-bold">Buy or rent homes</p>
          <p>Millions of houses and apartments in your favourite cities</p>
        </div>
        <div className="flex flex-col gap-2 items-center ">
          <img src="/real_estate/computer.svg" width={50} height={50} />
          <p className="font-bold">List your own property</p>
          <p>Sign up now and sell or rent your own properties</p>
        </div>
      </div>
    </div>
  );
};
