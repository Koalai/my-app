import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="py-8 px-10 w-full flex justify-between items-center fixed top-0 h-[100px] bg-white opacity-85 z-30">
      <img src="/real_estate_6/logo.svg" alt="logo" className="h-[42px]" />
      <div className="flex gap-[48px] text-lg">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
      </div>
      <button className="py-4 px-6 rounded-lg border-[1px] border-black hover:bg-black hover:text-gray-400">
        Get Free Template
      </button>
    </div>
  );
};
