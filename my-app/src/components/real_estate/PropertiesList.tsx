import { PropertyCard } from "./PropertyCard";

export const PropertiesList = () => {
  return (
    <div className="mt-[120px] py-[120px] px-[180px] bg-[#F9F9F9] mx-[60px] rounded-[24px]">
      <div className="flex flex-col gap-2 items-center">
        <p className="font-semibold text-3xl">Homes for you</p>
        <p>Based on your view history</p>
      </div>
      <div className="flex gap-[30px] mt-8 justify-center">
        <PropertyCard />
      </div>
    </div>
  );
};
