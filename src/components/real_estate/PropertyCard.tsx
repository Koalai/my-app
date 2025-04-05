type PropertyCardProps = {
  item: {
    src: string;
    price: string;
    name: string;
    address: string;
  };
};

export const PropertyCard = ({ item }: PropertyCardProps) => {
  return (
    <div className="p-1 pb-5 border-[1px] border-[#E9E9E9] rounded-[16px] h-full">
      <div className="relative">
        <img
          src={item.src}
          alt={item.name}
          className="h-full w-full object-cover"
        />
        <div className="rounded-[33px] uppercase absolute bg-[#1F4B43] px-2 text-white top-2 left-2 text-sm">
          FOR SALE
        </div>
      </div>

      <div className="px-4">
        <div className="flex justify-between mt-1">
          <p className="font-semibold">{item.name}</p>
          <p className="font-semibold text-[#EB664E] text-xl">{item.price}</p>
        </div>
        <div className="flex gap-2 mt-1">
          <img src="/real_estate/marker.svg" alt="marker" />
          <p className="text-sm">{item.address}</p>
        </div>
        <div className="flex mt-4 gap-2">
          <div className="flex gap-2 border-r-[1px] border-[#E9E9E9] pr-4 items-center">
            <img src="/real_estate/bed.svg" alt="bed" />
            <p className="text-xs">4 Beds</p>
          </div>
          <div className="flex gap-2 border-r-[1px] border-[#E9E9E9] pr-4 items-center">
            <img src="/real_estate/bath.svg" alt="bath" />
            <p className="text-xs">2 Baths</p>
          </div>
          <div className="flex gap-2 pr-4 items-center">
            <img src="/real_estate/square.svg" alt="square" />
            <p className="text-xs">450 sqft</p>
          </div>
        </div>
      </div>
    </div>
  );
};
