export const ProcessCard = ({
  index,
  title,
  descriptions,
}: {
  index: number;
  title: string;
  descriptions: string;
}) => {
  return (
    <div className="p-8 flex flex-col gap-6 bg-[#f5f5f5] rounded-[20px]">
      <div className="h-8 w-8 flex items-center justify-center rounded-full bg-black text-white">
        {index + 1}
      </div>
      <p className="text-[33px]">{title}</p>
      <p>{descriptions}</p>
    </div>
  );
};
