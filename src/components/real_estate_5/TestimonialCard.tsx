export const TestimonialCard = ({
  text,
  img,
  name,
}: {
  text: string;
  img: string;
  name: string;
}) => {
  return (
    <div className="p-6 rounded-md bg-[#F5F5F5] flex flex-col h-[300px] justify-between">
      <div className="flex flex-col gap-10">
        <p className="text-[13px] text-[#09091480]">STORIES</p>
        <p className="text-lg">{text}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img
            src={img}
            alt="avatar"
            className="h-[60px] w-[60px] rounded-full object-cover"
          />
          <p className="text-[15px] ">
            {name}{" "}
            <span className="block text-[#09091480] text-[13px]">Customer</span>
          </p>
        </div>
        <img src="/real_estate_5/quote.svg" alt="quote icon" className="h-7" />
      </div>
    </div>
  );
};
