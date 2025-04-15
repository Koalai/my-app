export const Consultation = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="py-[160px] px-12 flex flex-col gap-8 items-start">
        <p className="text-[40px]">
          Everyone who walks through our door is important{" "}
        </p>
        <p className="text-[#696969]">
          At the heart of our values is a commitment to treating each individual
          with the utmost respect and care.
        </p>
        <button className="py-4 px-8 bg-[#830000] text-white">
          Request Consultation
        </button>
      </div>
      <img src="/law/consult_bg.png" alt="banner" className="h-full" />
    </div>
  );
};
