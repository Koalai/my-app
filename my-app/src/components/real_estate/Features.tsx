import { PropertyImage } from "./PropertyImage";

const data = [
  {
    src: "/real_estate/property_s1.png",
    city: "New York",
    property: "8 Properties",
  },
  {
    src: "/real_estate/property_s2.png",
    city: "Chicagp",
    property: "2 Properties",
  },
  {
    src: "/real_estate/property_s3.png",
    city: "Los Angeles",
    property: "3 Properties",
  },
  {
    src: "/real_estate/property_s4.png",
    city: "Miami",
    property: "2 Properties",
  },
  {
    src: "/real_estate/property_s5.png",
    city: "Florida",
    property: "3 Properties",
  },
];

export const Features = () => {
  return (
    <div className="flex flex-col items-center px-[245px] mt-[160px]">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="font-semibold text-4xl">
          Find Properties in These Cities
        </h2>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="min-w-[1430px]">
        <PropertyImage data={data} />
      </div>
    </div>
  );
};
