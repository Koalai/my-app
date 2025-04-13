import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  name: string;
  img: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      style={{ backgroundImage: `url(${img})` }}
      className="bg-center bg-no-repeat bg-cover rounded-[20px] relative min-h-[1044px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute  left-8 right-8 bottom-8 rounded-lg bg-white p-5 flex items-center"
          >
            <p className="flex-1 text-[40px]">{name}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
