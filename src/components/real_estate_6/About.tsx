export const About = () => {
  return (
    <div className="pt-[144px] px-10">
      <div className="flex gap-4">
        <div className="w-1/2">
          <p className="text-[33px] w-2/3">
            North Architecture is a dynamic and innovative design firm based in
            the heart of the architectural world.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 items-center justify-center flex-1 gap-4">
          <div className="p-8 flex flex-col items-center justify-center bg-[#f5f5f5] rounded-2xl gap-3">
            <p className="text-[48px] leading-tight">24+</p>
            <p className="text-[#616161]">Years of Experience</p>
          </div>
          <div className="p-8 flex flex-col items-center justify-center bg-[#f5f5f5] rounded-2xl gap-3">
            <p className="text-[48px] leading-tight">200+</p>
            <p className="text-[#616161]">Completed Projects</p>
          </div>
          <div className="p-8 flex flex-col col-span-2 items-center justify-center bg-[#f5f5f5] rounded-2xl gap-3">
            <p className="text-[48px] leading-tight">100%</p>
            <p className="text-[#616161]">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};
