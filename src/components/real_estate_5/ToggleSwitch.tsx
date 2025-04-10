import { motion } from "framer-motion";
import { useState } from "react";

export const ToggleSwitch = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <div className="flex items-center space-x-3 m-auto">
      <span
        className={`text-sm font-medium ${
          !isYearly ? "text-purple-600" : "text-black"
        }`}
      >
        Monthly
      </span>

      <div
        className="relative w-[58px] h-[26px] bg-gray-200 rounded-full cursor-pointer border-[2px] border-[#CBB3FF] flex items-center p-[2px]"
        onClick={handleToggle}
      >
        <motion.div
          className="absolute w-5 h-5 bg-[#CBB3FF] rounded-full shadow-md"
          animate={{ x: isYearly ? 30 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        />
      </div>
      <span
        className={`text-sm font-medium ${
          isYearly ? "text-purple-600" : "text-black"
        }`}
      >
        Yearly
      </span>
    </div>
  );
};
