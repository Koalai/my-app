import { motion } from "framer-motion";

const data = [
  "/law/45deg.svg",
  "/law/alphaWave.svg",
  "/law/altShift.svg",
  "/law/beltShift.svg",
  "/law/biosynthesis.svg",
  "/law/caleScence.svg",
];

export const Partners = () => {
  const scrollVariants = {
    animate: {
      x: "-50%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="py-20 px-16 bg-[#830000] overflow-hidden">
      <p className="w-full text-white mb-10 text-lg">They have trusted us</p>
      <div className="relative">
        <motion.div
          className="flex gap-[160px]"
          variants={scrollVariants}
          animate="animate"
        >
          {[...data, ...data].map((item, index) => (
            <img
              key={index}
              src={item}
              alt="brand logo"
              className="h-[50px] mx-4 inline-block"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
