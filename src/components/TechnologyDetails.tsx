import { useState } from "react";
import data from "../data.json";
import { motion } from "framer-motion";

const techData = data.technology;

export const TechnologyDetails = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const imageUrl = `${import.meta.env.BASE_URL}${
    techData[selectedIndex].images.portrait
  }`;
  const imageUrlLandscape = `${import.meta.env.BASE_URL}${
    techData[selectedIndex].images.landscape
  }`;
  return (
    <div className=" flex flex-col-reverse gap-8 lg:flex-row">
      <div className="lg:w-[50%] flex flex-col gap-10 lg:flex-row lg:gap-16 items-center">
        <div className="flex flex-row lg:flex-col gap-4 lg:gap-8">
          <motion.button
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.25,
              duration: 1,
            }}
            onClick={() => setSelectedIndex(0)}
            className={`${
              selectedIndex === 0
                ? "bg-white text-navy"
                : "bg-transparent text-white border-opacity-50 hover:border-opacity-100"
            } border border-white rounded-full text-[18px] md:text-[24px] lg:text-[32px] w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] transition-colors duration-700 ease-in-out`}
          >
            1
          </motion.button>
          <motion.button
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            onClick={() => setSelectedIndex(1)}
            className={`${
              selectedIndex === 1
                ? "bg-white text-navy"
                : "bg-transparent text-white border-opacity-50 hover:border-opacity-100"
            } border border-white rounded-full text-[18px] md:text-[24px] lg:text-[32px] w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] transition-colors duration-700 ease-in-out`}
          >
            2
          </motion.button>
          <motion.button
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: 0.75,
              duration: 1,
            }}
            onClick={() => setSelectedIndex(2)}
            className={`${
              selectedIndex === 2
                ? "bg-white text-navy"
                : "bg-transparent text-white border-opacity-50 hover:border-opacity-100"
            } border border-white rounded-full text-[18px] md:text-[24px] lg:text-[32px] w-[40px] h-[40px] md:w-[56px] md:h-[56px] lg:w-[80px] lg:h-[80px] transition-colors duration-700 ease-in-out`}
          >
            3
          </motion.button>
        </div>
        <motion.div
          key={techData[selectedIndex].name}
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 0.25,
          }}
          className="text-center lg:text-left px-6"
        >
          <h3 className="uppercase text-[18px] md:text-[24px] lg:text-[32px] text-white text-opacity-50">
            The Terminology
          </h3>
          <h1 className="py-4 uppercase text-white text-[24px] md:text-[40px] lg:text-[56px]">
            {techData[selectedIndex].name}
          </h1>
          <p className="text-white font-body text-[16px] lg:text-[18px] leading-[180%] max-w-xl">
            {techData[selectedIndex].description}
          </p>
        </motion.div>
      </div>
      <motion.div
        key={techData[selectedIndex].name}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.25,
        }}
        className="lg:w-[50%] w-full"
      >
        <img
          src={imageUrlLandscape}
          alt={techData[selectedIndex].name}
          className="w-full lg:hidden block object-cover"
        />
        <img
          src={imageUrl}
          alt={techData[selectedIndex].name}
          className="hidden w-[100vw] lg:block object-scale-down lg:object-right"
        />
      </motion.div>
    </div>
  );
};
