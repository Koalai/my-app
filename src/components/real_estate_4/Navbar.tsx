export const Navbar = () => {
  return (
    <div className="p-6 flex fixed w-full bg-white bg-opacity-70 backdrop-blur-[10px] z-20">
      <img src="/real_estate_4/Logo.png" alt="logo" className="h-9" />
      <div className="flex gap-8 ml-auto">
        <a href="">Properties</a>
        <a href="">About us</a>
        <a href="">Contact</a>
        <a href="">Blog</a>
      </div>
    </div>
  );
};
