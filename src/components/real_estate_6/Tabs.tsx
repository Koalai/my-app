import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

enum TabId {
  Residential = "residential",
  Commercial = "commercial",
  Interior = "interior",
}

interface TabContent {
  id: TabId;
  title: string;
  description: string;
  img: string;
}

const tabs: TabContent[] = [
  {
    id: TabId.Residential,
    title: "Residential Design",
    description:
      "Interior design is the art and science of enhancing the interiors of spaces to create functional, aesthetically pleasing, and comfortable environments. It involves selecting and arranging elements such as furniture, color schemes, lighting, and decor to meet the needs and preferences of occupants.",
    img: "/real_estate_6/service1.png",
  },
  {
    id: TabId.Commercial,
    title: "Commercial Design",
    description:
      "Commercial design focuses on creating functional and appealing spaces for businesses, such as offices, retail stores, and hospitality venues. It balances aesthetics with practicality to enhance productivity and customer experience.",
    img: "/real_estate_6/service2.png",
  },
  {
    id: TabId.Interior,
    title: "Interior Design",
    description:
      "Interior design is the art and science of enhancing the interiors of spaces to create functional, aesthetically pleasing, and comfortable environments. It involves selecting and arranging elements such as furniture, color schemes, lighting, and decor to meet the needs and preferences of occupants.",
    img: "/real_estate_6/service3.png",
  },
];

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>(TabId.Residential);

  const handleTabClick = (tabId: TabId) => {
    setActiveTab(tabId);
  };

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`p-8 text-[33px] rounded-[20px] ${
              activeTab === tab.id ? "bg-black text-white" : "bg-[#F5F5F5]"
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {activeContent && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ backgroundImage: `url(${activeContent.img})` }}
            className="bg-center bg-no-repeat bg-cover rounded-[20px] min-h-[918px] relative"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-8 bg-white p-8 left-8 rounded-[20px] w-1/3"
            >
              {activeContent.description}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
