import { Tabs } from "./Tabs";

export const Services = () => {
  return (
    <div className="pt-[200px] px-10">
      <div className="flex flex-col gap-12 justify-start">
        <p className="text-[40px] text-center font-semibold">Our Services</p>
        <Tabs />
      </div>
    </div>
  );
};
