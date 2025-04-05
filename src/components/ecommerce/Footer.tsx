const services = [
  "Bonus program",
  "Gift cards",
  "Credit and payment",
  "Service contracts",
  "Non-cash account",
  "Payment",
];

const items = [
  "Find an order",
  "Terms of delivery",
  "Exchange and return of goods",
  "Guarantee",
  "Frequently asked questions",
  "Terms of use of the site",
];

export const Footer = () => {
  return (
    <div className="px-40 py-[104px] bg-black">
      <div className="flex gap-[112px]">
        <div className="w-1/3">
          <img src="/ecommerce/logo.png" alt="logo" className="w-24 h-8" />
          <p className="text-xs text-[#CFCFCF] mt-6">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="grid grid-cols-2 flex-1">
          <div>
            <h2 className="text-md font-semibold mb-4 text-white">Services</h2>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-md font-semibold mb-4 text-white">
              Assistance to the buyer
            </h2>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex mt-6 w-[176px] gap-8">
        <img src="/ecommerce/twitter.svg" alt="twitter" />
        <img src="/ecommerce/fb.svg" alt="facebook" />
        <img src="/ecommerce/tiktok.svg" alt="tiktok" />
        <img src="/ecommerce/ig.svg" alt="insta" />
      </div>
    </div>
  );
};
