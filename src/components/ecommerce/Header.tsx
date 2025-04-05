export const Header = () => {
  return (
    <div className="flex items-center px-40 py-4 gap-8">
      <img src="/ecommerce/logo_dark.png" alt="logo" className="w-24 h-8" />
      <div className="bg-[#F5F5F5] flex items-center gap-2 rounded-lg p-4 flex-1">
        <img src="/ecommerce/magnify.svg" alt="search icon" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-xs"
        />
      </div>
      <div className="flex items-center gap-[56px]">
        {["Home", "About", "Contact", "Blog"].map((item) => (
          <button className="text-sm font-medium opacity-30 hover:opacity-100">
            {item}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <img src="/ecommerce/heart.svg" alt="like" />
        <img src="/ecommerce/cart.svg" alt="cart" />
        <img src="/ecommerce/user.svg" alt="profile" />
      </div>
    </div>
  );
};
