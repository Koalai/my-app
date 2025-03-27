import { PropertyImage } from "./PropertyImage";

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
        <PropertyImage />
      </div>
    </div>
  );
};
