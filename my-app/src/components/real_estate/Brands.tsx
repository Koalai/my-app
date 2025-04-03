export const Brands = () => {
  return (
    <div className="bg-[#1A1A1A] py-[20px] m-[60px] rounded-[16px]">
      <p className="text-white text-center">
        Thousands of world’s leading companies trust Space
      </p>
      <div className="mt-[20px] px-[64px] flex gap-14 items-center justify-center">
        <img
          src="/real_estate/amazon.png"
          alt="amazon"
          width={84}
          style={{ height: 26 }}
        />
        <img
          src="/real_estate/amd.png"
          alt="amd"
          width={84}
          style={{ height: 20 }}
        />
        <img
          src="/real_estate/cisco.png"
          alt="cisco"
          width={74}
          style={{ height: 42 }}
        />
        <img
          src="/real_estate/dropcam.png"
          alt="dropcam"
          width={122}
          style={{ height: 24 }}
        />
        <img
          src="/real_estate/logitech.png"
          alt="logitech"
          width={82}
          style={{ height: 26 }}
        />
        <img
          src="/real_estate/spotify.png"
          alt="spotify"
          width={98}
          style={{ height: 30 }}
        />
      </div>
    </div>
  );
};
