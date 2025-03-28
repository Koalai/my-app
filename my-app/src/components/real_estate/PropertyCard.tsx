const data = [
  {
    src: "/real_estate/house_s1.png",
    price: "$280,000",
    name: "Skyper Pool Apartment",
    address: "1020 Bloomingdale Ave",
  },
  {
    src: "/real_estate/house_s2.png",
    price: "$386,000",
    name: "North Dillard Street",
    address: "4330 Bell Shoals Rd",
  },
  {
    src: "/real_estate/house_s3.png",
    price: "$180,000",
    name: "Eaton Garth Penthouse",
    address: "7722 18th Ave, Brooklyn",
  },
];

export const PropertyCard = () => {
  return (
    <>
      {data.map((item) => (
        <div className="px-3 pt-3 pb-5 border-[1px] border-[#E9E9E9] rounded-[16px] h-full">
          <div className="relative">
            <img src={item.src} alt={item.name} className="h-full w-[425px]" />
            <div className="rounded-[33px] uppercase absolute bg-[#1F4B43] px-3 text-white top-4 left-4">
              FOR SALE
            </div>
          </div>

          <div className="px-4">
            <div className="flex justify-between mt-1">
              <p className="font-semibold">{item.name}</p>
              <p className="font-semibold text-[#EB664E] text-xl">
                {item.price}
              </p>
            </div>
            <div className="flex gap-2 mt-1">
              <img src="/real_estate/marker.svg" alt="marker" />
              <p className="text-sm">{item.address}</p>
            </div>
            <div className="flex mt-4 gap-2">
              <div className="flex gap-2 border-r-[1px] border-[#E9E9E9] pr-4">
                <img src="/real_estate/bed.svg" />
                <p>4 Beds</p>
              </div>
              <div className="flex gap-2 border-r-[1px] border-[#E9E9E9] pr-4">
                <img src="/real_estate/bath.svg" />
                <p>2 Baths</p>
              </div>
              <div className="flex gap-2 border-r-[1px] border-[#E9E9E9] pr-4">
                <img src="/real_estate/square.svg" />
                <p>450 sqft</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
