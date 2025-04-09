import { CollapsibleItem } from "./CollapsibleItem";

const items = [
  {
    title: "Property Match",
    description:
      "Discover homes tailored to your lifestyle and budget with our personalized property search and expert recommendations.",
  },
  {
    title: "Market Insights",
    description:
      "Stay ahead with up-to-date market trends, property valuations, and investment opportunities to make informed decisions.",
  },
  {
    title: "Seamless Transactions",
    description:
      "From negotiations to paperwork, we handle every detail of the buying and selling process for a smooth and stress-free experience.",
  },
];

export const Services = () => {
  return (
    <div className="pt-20 pb-[120px]">
      <div className="flex gap-8 max-w-[1200px] mx-auto">
        <div className="flex flex-col justify-between w-1/2 min-h-[500px]">
          <div className="flex flex-col gap-4">
            <div className="bg-[#C5E0F2] py-2 px-4 rounded-[50px] w-[90px]">
              Services
            </div>
            <p className="text-[38px] font-medium">
              Our Expertise, Your Advantage
            </p>
            <p className="text-[#707070]">
              We’re here to guide you every step of the way.
            </p>
          </div>
          <div className="">
            {items.map((item, index) => (
              <CollapsibleItem
                key={index}
                title={item.title}
                description={item.description}
                isOpenByDefault={index === 0}
              />
            ))}
          </div>
        </div>
        <img
          src="/real_estate_4/services_img.png"
          className="w-1/2 rounded-3xl"
        />
      </div>
    </div>
  );
};
