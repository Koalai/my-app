export const Catergories = () => {
  return (
    <div className="mx-[100px] bg-[#F0F0F0] rounded-[40px] py-10 px-20">
      <p className="text-6xl font-extrabold uppercase text-center">
        Browse by dress style
      </p>
      <div className="flex gap-6 mt-10">
        <img
          src="/ecommerce/casual_banner.png"
          alt=""
          className="object-contain h-[289px] w-auto "
        />
        <img
          src="/ecommerce/formal_banner.png"
          alt=""
          className="object-cover h-[289px] w-auto flex-1 rounded-[20px]"
        />
      </div>
      <div className="flex gap-6 mt-6">
        <img
          src="/ecommerce/party_banner.png"
          alt=""
          className="object-contain h-[289px] w-auto "
        />
        <img
          src="/ecommerce/gym_banner.png"
          alt=""
          className="object-cover h-[289px] w-auto flex-1 rounded-[20px]"
        />
      </div>
    </div>
  );
};
