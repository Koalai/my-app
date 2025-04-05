export const Banner2 = () => {
  return (
    <div className="bg-banner-bg bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center pt-40 pb-[90px] gap-4">
      <h1 className="text-[72px] leading-[72px] font-thin text-white">
        Big Summer <span className="font-medium">Sale</span>
      </h1>
      <p className="text-[#787878] text-sm">
        Commodo fames vitae vitae leo mauris in. Eu consequat.
      </p>
      <button className="text-white bg-transparent px-12 py-2 rounded-lg border-[1px] text-sm">
        Shop Now
      </button>
    </div>
  );
};
