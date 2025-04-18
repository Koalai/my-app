export const BlogCard = ({
  date,
  descriptions,
  img,
  tag,
}: {
  date: string;
  descriptions: string;
  img: string;
  tag: string;
}) => {
  return (
    <div className="pt-5 px-5 pb-10 flex flex-col gap-5 rounded-[32px] bg-[#F5F5F5]">
      <div
        className="bg-center bg-cover bg-no-repeat h-[200px] relative rounded-[32px]"
        style={{ backgroundImage: `url(${img})` }}
      >
        <span className="bg-[#CBB3FF] px-5 rounded-[50px] h-[33px] absolute top-4 right-4 flex items-center justify-center text-sm font-medium">
          {tag}
        </span>
      </div>
      <p className="text-sm text-[#919191] font-medium">{date}</p>
      <h3 className="text-[32px] font-medium leading-tight">{descriptions}</h3>
    </div>
  );
};
