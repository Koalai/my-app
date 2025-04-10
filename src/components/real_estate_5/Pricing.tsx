import { PricingCard } from "./PricingCard";
import { ToggleSwitch } from "./ToggleSwitch";

const data = [
  {
    list: [
      "Property Listings",
      "Tenant Management",
      "Maintenance Requests",
      "Basic Reporting",
    ],
    money: 0,
  },
  {
    list: [
      "Property Listings",
      "Tenant Management",
      "Maintenance Requests",
      "Financial Reporting",
      "Integrations",
      "Support",
    ],
    money: 14.99,
  },
  {
    list: [
      "Property Listings",
      "Tenant Management",
      "Maintenance Requests",
      "Financial Reporting",
      "Integrations",
      "Priority Support",
      "User Permissions",
      "Custom Workflows",
    ],
    money: 29.99,
  },
];

export const Pricing = () => {
  return (
    <div className="pt-[130px]">
      <div className="max-w-[1080px] mx-auto flex flex-col gap-[60px]">
        <p className="text-center text-[50px]">Pricing</p>
        <div className="flex flex-col gap-[30px]">
          <ToggleSwitch />
          <div className="grid grid-cols-3 gap-5 h-[521px]">
            {data.map((item, index) => (
              <PricingCard
                list={item.list}
                money={item.money}
                key={index}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
