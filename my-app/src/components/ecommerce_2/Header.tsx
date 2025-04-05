import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex gap-10 items-center px-[100px] py-6">
      <img
        src="/ecommerce/logo_ecommerce2_dark.png"
        alt="logo"
        className="w-40 h-[22px]"
      />
      <div className="flex gap-6 items-center">
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" text-black  focus:outline-none flex items-center"
          >
            Shop{" "}
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10">
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Category 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Category 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-black hover:bg-gray-100"
              >
                Category 3
              </a>
            </div>
          )}
        </div>
        <a href="">On Sales</a>
        <a href="">New Arrivals</a>
        <a href="">Brands</a>
      </div>
      <div className="bg-[#F0F0F0] rounded-[62px] px-4 py-3 flex gap-3 flex-1">
        <img src="/ecommerce/magnify.svg" alt="search" />
        <input
          type="text"
          placeholder="Search for products..."
          className="bg-transparent"
        />
      </div>
      <div className="flex gap-3">
        <img src="/ecommerce/cart.svg" alt="shopping cart" width={24} />
        <img src="/ecommerce/user.svg" alt="profile" width={24} />
      </div>
    </div>
  );
};
