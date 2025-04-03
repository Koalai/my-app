import { PropertyImage } from "./PropertyImage";

export const Features = () => {
  return (
    <div className="flex flex-col items-center mt-[160px]">
      <div className="flex flex-col gap-2 items-center">
        <h2 className="font-semibold text-4xl">
          Find Properties in These Cities
        </h2>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <PropertyImage />
    </div>
  );
};
