import { Features } from "./Features";
import PropertyCard from "./PropertyCard";

const data = [
  {
    name: "Summit Living",
    price: "225,000",
    img: "/real_estate_4/property_1.png",
  },
  {
    name: "Dreamscape Villas",
    price: "325.000",
    img: "/real_estate_4/property_2.png",
  },
  {
    name: "Prime Abodes",
    price: "124.000",
    img: "/real_estate_4/property_3.png",
  },
];

export const Properties = () => {
  return (
    <div className="py-20 px-4 flex flex-col gap-5">
      <div className="max-w-[1200px] flex flex-col gap-[42px] items-center mx-auto">
        <div>
          <p className="text-[36px] text-center font-medium">
            Your property just one step away
          </p>
          <p className="text-base mt-4 text-[#707070]">
            Nestled in the heart of a lush green forest, this property is a true
            nature lover's paradise.{" "}
          </p>
        </div>
        <div className="flex gap-6">
          {data.map((item, index) => (
            <PropertyCard
              key={index}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div
        className="h-[600px] max-w-[1200px] mx-auto p-8  w-full bg-cover bg-center bg-no-repeat relative rounded-3xl"
        style={{ backgroundImage: `url('/real_estate_4/property_banner.png')` }}
      >
        <Features />
      </div>
    </div>
  );
};
