export const PricingCard = ({
  list,
  money,
  index,
}: {
  list: string[];
  money: number;
  index: number;
}) => {
  console.log(index);
  return (
    <div
      className={`py-6 px-4 flex flex-col ${
        index % 2 === 0 ? "bg-[#F5F5F5]" : "bg-[#CBB3FF]"
      } justify-between rounded-[32px]`}
    >
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-[36px] font-bold">${money}/m</p>
          <p className="text-sm">Free forever</p>
        </div>
        <div className="border-[1px]"></div>
        <div className="flex flex-col gap-[10px]">
          {list.map((item, index) => (
            <span key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#000000"
                viewBox="0 0 256 256"
                className="mr-1 inline-block"
              >
                <path d="M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"></path>
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className={`py-[18px] px-10 ${
            index % 2 ? "bg-[#F5F5F5]" : "bg-[#CBB3FF]"
          } rounded-[50px] text-xl h-[54px] leading-none font-normal`}
        >
          Get Started
        </button>
        <span
          className={`rounded-full  ${
            index % 2 ? "bg-[#F5F5F5]" : "bg-[#CBB3FF]"
          } w-[54px] h-[54px] flex justify-center items-center -rotate-[24deg]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};
