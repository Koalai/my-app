import { Link } from "react-router-dom";

const data = [
  {
    img: "/pages/agency.png",
    text: "Agency Template",
    navigate: "/landing_page_agency",
  },
  {
    img: "/pages/real_estate_1.png",
    text: "Real_estate_1 Template",
    navigate: "/landing_page_real_estate",
  },
  {
    img: "/pages/real_estate_2.png",
    text: "Real_estate_2 Template",
    navigate: "/landing_page_real_estate_2",
  },
  {
    img: "/pages/real_estate_3.png",
    text: "Real_estate_3 Template",
    navigate: "/landing_page_real_estate_3",
  },
  {
    img: "/pages/real_estate_4.png",
    text: "Real estate 4 Template",
    navigate: "/landing_page_real_estate_4",
  },
  {
    img: "/pages/real_estate_5.png",
    text: "Real estate 5 Template",
    navigate: "/landing_page_real_estate_5",
  },
  {
    img: "/pages/ecommerce.png",
    text: "Ecommerce Template",
    navigate: "/landing_page_ecommerce",
  },
  {
    img: "/pages/ecommerce_2.png",
    text: "Ecommerce 2 Template",
    navigate: "/landing_page_ecommerce_2",
  },
];
export const Home = () => {
  return (
    <div className="relative h-full ">
      <div className="w-full flex justify-between fixed p-6 items-center left-0 top-0 bg-white">
        <img src="logo_real_estate_dark.svg" alt="logo" />
        <div className="flex gap-8 text-xl">
          <a href="">Home</a>
          <a href="">Demo</a>
          <a href="">Contact</a>
        </div>
        <button className="py-4 px-10 rounded-[32px] bg-[#425CEC] text-white text-sm font-medium">
          BUY NOW
        </button>
      </div>
      <div className="pt-[300px] ">
        <div className="flex gap-6 max-w-[1370px] mx-auto ">
          <div className="flex flex-col w-1/2 items-start justify-between">
            <div className="flex flex-col gap-6">
              <p className="text-[40px] font-bold">
                Highly flexible and reliable Website theme
              </p>
              <p className="text-lg text-[#666B80] w-3/4">
                Create a fully functioning website with JustHome, one of the
                most crafted and customizable theme on the market
              </p>
            </div>
            <button className="py-4 px-10 rounded-[32px] bg-[#425CEC] text-white text-sm font-medium">
              SEE THE DEMOS
            </button>
          </div>
          <img
            src="/real_estate_4/property_4.png"
            alt="banner"
            className="w-1/2 rounded-xl"
          />
        </div>
      </div>
      <div className="pt-[250px]">
        <div className="max-w-[1440px] flex flex-col gap-6 mx-auto items-center">
          <p className="text-[#0C73E1] text-[30px] font-bold">
            {data.length} Pre-made Demo Websites
          </p>
          <div className="grid grid-cols-3 gap-8">
            {data.map((items, index) => (
              <Link to={items.navigate} key={index}>
                <div className="rounded-lg bg-gray-100 border-[1px] p-4">
                  <img
                    src={items.img}
                    className="h-[300px] rounded-md object-contain"
                    alt="project picture"
                  />
                  <p className="text-2xl font-medium mt-4">{items.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
