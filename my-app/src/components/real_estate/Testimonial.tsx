import { TestimonialCard } from "./TestimonialCard";

export const Testimonial = () => {
  return (
    <div className="mx-[60px] bg-[#F9F9F9] px-[185px] py-[120px] rounded-[16px]">
      <div className="flex justify-between items-center">
        <p className="font-bold text-3xl w-[420px] h-[104px] ">
          What our customers are saying us?
        </p>
        <div className="flex gap-[64px] pr-[64px]">
          <div className="flex flex-col gap-2">
            <p className="font-bold">10m+</p>
            <p className="text-xs">Happy People</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">4.88</p>
            <p className="text-xs">Overall rating</p>
            <img src="/real_estate/starRate.svg" alt="rate star" />
          </div>
        </div>
      </div>
      <div className="flex gap-[30px] px-4 py-2 mt-8">
        <TestimonialCard />
      </div>
    </div>
  );
};
