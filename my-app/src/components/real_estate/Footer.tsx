export const Footer = () => {
  return (
    <div className="flex items-center justify-between px-[250px] py-[30px] bg-[#F9F9F9]  w-full ">
      <p>Copyright © 2024. JustHome</p>
      <img
        src="/logo_real_estate_dark.svg"
        alt="logo"
        width={200}
        height={57}
      />
      <div className="flex gap-[12px]">
        <img src="/real_estate/facebook.svg" alt="fb" width={16} height={16} />
        <img
          src="/real_estate/twitter.svg"
          alt="twitter"
          width={16}
          height={16}
        />
        <img src="/real_estate/ig.svg" alt="ig" width={16} height={16} />
        <img
          src="/real_estate/linkedin.svg"
          alt="linkedin"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
};
