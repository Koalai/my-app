export const ServiceCard = ({
  title,
  img,
  description,
}: {
  title: string;
  img: string;
  description: string;
}) => {
  return (
    <div className="p-[30px] rounded-[32px] bg-white flex flex-col h-[280px] justify-between">
      <div className="flex justify-between ">
        <p className="text-[32px] w-4/5 font-medium">{title}</p>
        <div className="bg-[#F2F5FF] w-[60px] h-[60px] rounded-full flex items-center justify-center">
          <img src={img} alt="icon" className="w-[24px] h-[24px]" />
        </div>
      </div>
      <p className="text-lg w-4/5">{description}</p>
    </div>
  );
};
