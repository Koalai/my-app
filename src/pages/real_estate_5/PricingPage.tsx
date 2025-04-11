import { CTA } from "../../components/real_estate_5/CTA";
import { Footer } from "../../components/real_estate_5/Footer";
import { Navbar } from "../../components/real_estate_5/Navbar";
import { PricingCard } from "../../components/real_estate_5/PricingCard";
import { ToggleSwitch } from "../../components/real_estate_5/ToggleSwitch";

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

export const PricingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px]">
        <div className="max-w-[1080px] mx-auto flex flex-col gap-[60px]">
          <div className="w-[754px] mx-auto text-center">
            <p className="text-center text-[50px]">Pricing</p>
            <p className="text-xl ">
              Choose the perfect plan tailored to your needs, with flexible
              pricing options designed to help your business grow and scale
              effortlessly.
            </p>
          </div>

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
      <CTA />
      <Footer />
    </div>
  );
};
