import { useState } from "react";

const TabButtons = () => {
  const [activeTab, setActiveTab] = useState("sale");

  return (
    <div className="flex gap-6">
      <button
        onClick={() => setActiveTab("sale")}
        className={`text-white text-sm  pb-1 ${
          activeTab === "sale"
            ? "border-b-2 border-white"
            : "border-b-2 border-transparent"
        } focus:outline-none transition-all duration-300`}
      >
        Sale
      </button>

      <button
        onClick={() => setActiveTab("rent")}
        className={`text-white text-sm  pb-1 ${
          activeTab === "rent"
            ? "border-b-2 border-white"
            : "border-b-2 border-transparent"
        } focus:outline-none transition-all duration-300`}
      >
        Rent
      </button>
    </div>
  );
};

export default TabButtons;
