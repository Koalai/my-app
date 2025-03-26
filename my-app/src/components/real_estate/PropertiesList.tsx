import { PropertyCard } from "./PropertyCard";

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

export const PropertiesList = () => {
  return (
    <div className="mt-[120px] py-[120px] px-[180px] bg-[#F9F9F9] mx-[60px] rounded-[24px]">
      <div className="flex flex-col gap-2 items-center">
        <p className="font-semibold text-3xl">Homes for you</p>
        <p>Based on your view history</p>
      </div>
      <div className="flex gap-[30px] mt-8">
        <PropertyCard data={data} />
      </div>
    </div>
  );
};
