import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="h-[120px] py-8 px-12 flex justify-between text-[17px] items-center border-b-[1px] fixed top-0 w-full bg-slate-50">
      <img src="/law/logo.svg" alt="logo" className="h-[32px]" />
      <div className="flex gap-10 ">
        <Link to="/landing_page_law">Home</Link>
        <Link to="/landing_page_law/about">About</Link>
        <Link to="/landing_page_law/services">Services</Link>
        <Link to="/landing_page_law/contact">Contact</Link>
      </div>
      <button className="py-4 px-8 border-[1px]">Buy Template</button>
    </div>
  );
};
