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

export const PropertyImage = () => {
  return (
    <div className="flex ">
      {data.map((item) => (
        <div key={item.src} className="ml-[40px] mt-[40px] relative">
          <img
            src={item.src}
            alt={item.city}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 " />
          <div className="absolute top-10 left-10 text-white z-10">
            <p className="text-base font-semibold">{item.city}</p>
            <p className="text-xs">{item.property}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
