export const Footer = () => {
  return (
    <div className="py-20 px-10 bg-[#F5F5F5]">
      <div className="flex flex-col gap-[60px] mx-auto max-w-[1320px]">
        <div className="flex justify-between">
          <img src="/real_estate_5/Logo.png" alt="logo" className="h-9" />
          <div className="flex gap-6 text-lg">
            <a href="">Home</a>
            <a href="">Services</a>
            <a href="">Why us</a>
            <a href="">Pricing</a>
            <a href="">Blog</a>
          </div>
        </div>
        <div className="flex justify-between pt-[30px]">
          <p className="text-[#A3A3A3] font-medium">
            Made by <a className="text-[#9954F2]">Templyo</a> | Powered by{" "}
            <a className="text-[#9954F2]">Framer</a>{" "}
          </p>
          <div className="text-[#A3A3A3] font-medium flex gap-6">
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};
