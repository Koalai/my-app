type PropertyImageProps = {
  data: {
    src: string;
    property: string;
    city: string;
  }[];
};

export const PropertyImage = ({ data }: PropertyImageProps) => {
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
