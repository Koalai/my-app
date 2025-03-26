const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[60px] py-[48px] bg-slate-800">
      <img src="/logo_real_estate.svg" alt="logo" />
      <ul className="flex text-white gap-[40px] text-sm">
        <li>Home</li>
        <li>Listing</li>
        <li>Member</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-[20px]">
        <div className="flex items-center text-white gap-[12px]">
          <img
            src="/real_estate/contact.svg"
            alt="contact_icon"
            width={20}
            height={20}
          />
          <p className="text-sm">+68 685 88666</p>
        </div>
        <div className="rounded-full border-[1px] h-10 w-10 flex justify-center items-center">
          <img
            src="/real_estate/person.svg"
            alt="person_icon"
            className="text-center"
            height={16}
            width={16}
          />
        </div>
        <button className="px-6 py-1 border-[1px] rounded-[50px] text-white text-sm">
          Add Property
        </button>
      </div>
    </div>
  );
};

export default Navbar;
