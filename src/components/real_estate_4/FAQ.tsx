import { CollapsibleItem } from "./CollapsibleItem";

const items = [
  {
    title: "How do I find the right property for my needs?",
    description:
      "We offer personalized recommendations based on your preferences, lifestyle, and budget. Our team works closely with you to ensure you find the perfect home or investment property.",
  },
  {
    title: "What is the process for buying a property?",
    description:
      "The process includes property search, site visits, negotiations, legal paperwork, and finalizing the deal. We guide you at every step to make it seamless and stress-free.",
  },
  {
    title: "Do you assist with financing options?",
    description:
      "Yes, we can connect you with trusted financial institutions and mortgage brokers to find the best financing options tailored to your needs.",
  },
  {
    title: "Are your listings updated regularly?",
    description:
      "Absolutely! Our listings are updated in real-time to provide you with the latest and most accurate information about available properties.",
  },
  {
    title: "Can you help me sell my property?",
    description:
      "Yes, we provide expert marketing and valuation services to ensure your property is sold at the best possible price in the shortest time.",
  },
];

export const FAQ = () => {
  return (
    <div className="px-4 py-20 ">
      <div className="max-w-[1200px] flex gap-[62px] mx-auto">
        <div className="flex flex-col gap-4 w-3/5">
          <p className="text-[38px] font-medium">Frequently asked questions.</p>
          <p className="text-[#707070]">
            We're here to make your real estate journey seamless and
            stress-free.
          </p>
        </div>
        <div>
          {items.map((item, index) => (
            <CollapsibleItem
              key={index}
              title={item.title}
              description={item.description}
              isOpenByDefault={index === 0}
              hasIcon={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
