export const TestimonialCard = ({
  src,
  job,
  name,
  paragragph,
}: {
  src: string;
  job: string;
  name: string;
  paragragph: string;
}) => {
  return (
    <div className="rounded-[16px] p-[40px] w-[447px] bg-[#FFFFFF]">
      <div className="flex items-center gap-3 mb-8">
        <img src={src} alt="avatar" height={80} width={80} />
        <div className="flex flex-col gap-1 mr-8 flex-1">
          <p className="text-xs font-bold">{name}</p>
          <p className="text-xs">{job}</p>
        </div>
        <img
          src="/real_estate/quote.svg"
          alt="quote_icon"
          height={32}
          width={32}
        />
      </div>

      <p>{paragragph}</p>
    </div>
  );
};
