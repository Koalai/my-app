import { ServiceCard } from "./ServiceCard";

export const Services = () => {
  return (
    <div className="pt-[130px] px-5" id="services">
      <div className="max-w-[1370px] mx-auto py-20 px-[60px] rounded-[32px] bg-[#F5F5F5] flex flex-col gap-[60px]  w-full">
        <p className="text-[50px] font-medium text-center">
          Real Estate Management Services
        </p>
        <div className="grid grid-cols-3 grid-rows-2 gap-5">
          <div className="col-span-2">
            <ServiceCard
              img="/real_estate_5/fire.svg"
              title="Property Listings"
              description="Easily browse and manage all your property listings with our user-friendly platform."
            />
          </div>
          <div className="col-span-1">
            <ServiceCard
              img="/real_estate_5/cash.svg"
              title="Financial Reporting"
              description="Generate detailed financial statements and performance reports to stay on top of your property's financial health."
            />
          </div>
          <div className="col-span-1">
            <ServiceCard
              img="/real_estate_5/hand.svg"
              title="Service Requests"
              description="Efficiently handle maintenance requests and work orders through our app."
            />
          </div>
          <div className="col-span-2">
            <ServiceCard
              img="/real_estate_5/team.svg"
              title="Tenant Management"
              description="Keep track of tenant information and lease agreements without hassle. Our app allows you to store and manage all necessary details."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
