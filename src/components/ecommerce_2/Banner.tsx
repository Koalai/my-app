export const Banner = () => {
  return (
    <div className="bg-banner-ecommere-bg bg-cover bg-no-repeat bg-center pl-[100px] relative">
      <h1 className="font-extrabold text-[64px] leading-[64px] w-2/5 pt-[100px]">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p className="text-[16px] leading-[22px] mt-8 opacity-60 w-1/3">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of
        style.
      </p>
      <button className="rounded-3xl bg-black text-white px-[54px] py-3 mt-8">
        Shop now
      </button>
      <div className="flex gap-8 mt-12 pb-[80px]">
        <p className="font-semibold text-[40px] border-r-[2px] pr-8">
          200+
          <span className="block text-[16px] leading-[22px] opacity-60 font-normal">
            International brands
          </span>
        </p>
        <p className="font-semibold text-[40px]  border-r-[2px] pr-8">
          2000+
          <span className="block text-[16px] leading-[22px] opacity-60 font-normal">
            High-Quality Products
          </span>
        </p>
        <p className="font-semibold text-[40px]">
          30,000+
          <span className="block text-[16px] leading-[22px] opacity-60 font-normal">
            Happy Customer
          </span>
        </p>
      </div>
      <img
        src="/ecommerce/star.svg"
        alt="star"
        className="absolute top-1/2 left-1/2"
      />
      <img
        src="/ecommerce/star.svg"
        alt="star"
        className="absolute top-20 right-20"
      />
    </div>
  );
};
