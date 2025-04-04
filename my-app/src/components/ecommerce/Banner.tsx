export const Banner = ({
  isVertical = true,
  img,
  description,
  name,
  fill,
}: {
  isVertical?: boolean;
  name?: string;
  description?: string;
  img?: string;
  fill?: string;
}) => {
  return isVertical ? (
    <div className={`px-8 pb-[56px] bg-[${fill}] rounded-lg`}>
      <img src={img} alt="product sample" className="w-[260px] h-[260px]" />
      <div className=" flex flex-col gap-4 items-start px-6">
        <p className="text-2xl">{name}</p>
        <p className="text-[#909090] text-sm">{description}</p>
        <button className=" px-[56px] py-4 rounded-md border-[1px] border-black text-sm font-medium">
          Shop now
        </button>
      </div>
    </div>
  ) : (
    <div className="bg-[#211C24] px-40 flex">
      <div className="flex flex-col gap-6 flex-1 justify-center items-start">
        <div>
          <p className="opacity-40 text-white font-semibold text-lg">
            Pro.Beyond.
          </p>
          <p className="text-white font-thin text-[80px] leading-[72px]">
            IPhone 14 <span className="font-bold">Pro</span>
          </p>
        </div>
        <p className="text-[#909090]">
          Created to change everything for the better. For everyone
        </p>
        <button className="bg-transparent px-[56px] py-4 rounded-md border-[1px] border-white text-white text-sm">
          Shop now
        </button>
      </div>
      <img
        src="/ecommerce/product_banner.png"
        alt="product sample"
        className="w-[400px] h-[600px]"
      />
    </div>
  );
};
