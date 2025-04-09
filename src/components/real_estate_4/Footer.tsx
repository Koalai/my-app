export const Footer = () => {
  return (
    <div
      className="pt-20 pb-6 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url('/real_estate_4/footer_bg.png')` }}
    >
      <div className="flex flex-col max-w-[1200px] min-h-[600px] mx-auto justify-between">
        <div className="flex justify-between">
          <div className="w-1/3">
            <p className="text-[38px] font-medium mb-4">
              Frequently asked questions.
            </p>
            <input
              type="text"
              placeholder="Your email address"
              className="bg-white rounded-lg h-10 px-3"
            />
            <button className="ml-4 bg-black text-white px-6 py-2 rounded-lg">
              Submit
            </button>
          </div>
          <div className="flex flex-col gap-3 w-1/3">
            <p className="font-medium text-xl mb-2">Quick links</p>
            <a href="">About us</a>
            <a href="">Blogs</a>
            <a href="">Contacts</a>
            <a href="">Properties</a>
          </div>
        </div>
        <div className="flex justify-between">
          <p>© 2025 Harmony. All rights reserved.</p>
          <div>
            <a className="mr-6">Terms & Conditions</a>
            <a>Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};
