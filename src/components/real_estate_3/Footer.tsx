export const Footer = () => {
  return (
    <div className="p-[60px] bg-black mx-6 rounded-lg mt-4">
      <div className="flex flex-col max-w-[1360px] mx-auto px-10 ">
        <div className="flex pb-12 justify-between">
          <img src="/real_estate_3/logo.svg" alt="logo" className="h-[38px]" />
          <div>
            <p className="font-medium text-2xl text-white">Quick links</p>
            <div className="mt-5 flex gap-[80px] text-white ">
              <div className="flex flex-col gap-2 text-[#D0D1DB] text-[18px]">
                <a>About us</a>
                <a>Our work</a>
                <a>Services</a>
              </div>
              <div className="flex flex-col gap-2 text-[#D0D1DB] text-[18px]">
                <a>Testimonials</a>
                <a>FAQS</a>
                <a>Contact</a>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-[40px] border-opacity-20 border-white border-t-[1px] text-white">
          © 2025 Refit. All rights reserved.
        </p>
      </div>
    </div>
  );
};
