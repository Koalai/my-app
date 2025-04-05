export const Footer = () => {
  return (
    <div className="bg-[#1A1A1A] py-2">
      <div className="flex items-center justify-between px-[50px] py-[10px]   w-full ">
        <img src="/logo_real_estate.svg" alt="logo" width={200} height={57} />
        <div className="flex gap-[12px] text-white items-center">
          <p className="mr-4">Follow Us</p>
          <img
            src="/real_estate/facebook_dark.svg"
            alt="fb"
            className="w-4 h-4"
          />
          <img
            src="/real_estate/twitter_dark.svg"
            alt="twitter"
            className="w-4 h-4"
          />
          <img src="/real_estate/ig_dark.svg" alt="ig" width={16} height={16} />
          <img
            src="/real_estate/linkedin_dark.svg"
            alt="linkedin"
            className="w-4 h-4"
          />
        </div>
      </div>
      <div className="border-b-[1px] mb-8 mt-4"></div>
      <div className="flex px-[50px] gap-12 text-white">
        <div>
          <p className="text-[#A1A1A1] mb-4">Subscribe</p>
          <div className="border-b-[1px] border-b-[##A1A1A1] pb-2 max-w-[270px]">
            <input
              type="text"
              placeholder="Your email"
              className="bg-transparent"
            />
            <button className="py-1 px-3 bg-[#b4b4ba] rounded-2xl text-white">
              Send →
            </button>
          </div>
          <p className="mt-4 text-sm">
            Subscribe to our newsletter to receive our weekly feed.
          </p>
        </div>
        <div>
          <p className="text-[#A1A1A1] mb-4">Discover</p>
          <div className="text-sm space-y-2">
            <p>Miami</p>
            <p>New York</p>
            <p>Chicago</p>
            <p>Florida</p>
            <p>San Diego</p>
            <p>Los Angeles</p>
          </div>
        </div>
        <div>
          <p className="text-[#A1A1A1] mb-4">Quick Links</p>
          <div className="text-sm space-y-2">
            <p>About</p>
            <p>Contact</p>
            <p>Chicago</p>
            <p>Blog</p>
            <p>Pricing Plans</p>
            <p>Private Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div>
          <p className="text-[#A1A1A1] mb-4">Contact Us</p>
          <div className="text-sm space-y-2">
            <p>hi@justhome.com</p>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <div>
          <p className="text-[#A1A1A1] mb-4">Address</p>
          <p className="text-sm w-[170px]">
            99 Fifth Avenue, 3rd Floor San Francisco, CA 1980
          </p>
        </div>
        <div>
          <p className="text-[#A1A1A1] mb-4">Get the app</p>
          <button className="flex px-4 py-2 bg-[#2a2b2a] rounded-lg items-center">
            <img
              src="/real_estate/apple.svg"
              className="border-r-[#A1A1A1] border-r-[1px] pr-2"
            />
            <p className="text-xs pl-2">Download on the Apple</p>
          </button>
          <button className="flex px-4 py-2 bg-[#2a2b2a] rounded-lg items-center mt-4">
            <img
              src="/real_estate/googlePlay.svg"
              className="border-r-[#A1A1A1] border-r-[1px] pr-2"
            />
            <p className="text-xs pl-2">Get it on Google Play</p>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
