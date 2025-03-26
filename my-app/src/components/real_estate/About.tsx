export const About = () => {
  return (
    <div className="flex flex-col items-center gap-[30px] w-8/12 mx-auto mt-[160px]">
      <p className="text-3xl font-bold">Why You Should Work With Us</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="flex gap-8">
        <div className="flex flex-col gap-4 items-center">
          <img src="/real_estate/contract.svg" width={60} height={60} />
          <p>Wide Range of Properties</p>
          <p className="leading-6 text-center">
            We offer expert legal help for all related property items in Dubai.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img src="/real_estate/house_icon.svg" width={60} height={60} />
          <p>Buy or Rent Homes</p>
          <p className="leading-6 text-center">
            We sell your home at the best market price and very quickly as well.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <img src="/real_estate/shield.svg" width={60} height={60} />
          <p>Trusted by Thousands</p>
          <p className="leading-6 text-center">
            We offer you free consultancy to get a loan for your new home.
          </p>
        </div>
      </div>
    </div>
  );
};
