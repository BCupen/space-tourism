import { useState } from "react";
import data from "../data.json";
import { motion } from "framer-motion";

const destinationData = data.destinations;

interface TabSectionProps {
  selectedDestinationIndex: number;
  setSelectedDestinationIndex: (i: number) => void;
}

export const DestinationDetails = () => {
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);
  const imageUrl = `${import.meta.env.BASE_URL}${
    destinationData[selectedDestinationIndex].images.png
  }`;
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 py-6 md:py-10 lg:py-[127px]">
      <motion.img
        key={destinationData[selectedDestinationIndex].name}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          ease: "easeInOut",
          delay: 0.5,
          duration: 1.5,
        }}
        src={imageUrl}
        alt={destinationData[selectedDestinationIndex].name}
        className="mx-7 w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[450px] lg:h-[450px]"
      />
      <motion.div
        initial={{
          y: "-200%",
        }}
        animate={{
          y: 0,
        }}
        transition={{
          type: "tween",
          delay: 1,
          duration: 1,
        }}
        className="md:px-8"
      >
        <TabSection
          selectedDestinationIndex={selectedDestinationIndex}
          setSelectedDestinationIndex={setSelectedDestinationIndex}
        />
        <motion.div
          key={destinationData[selectedDestinationIndex].name}
          initial={{
            x: "-50%",
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 1.5,
          }}
          className="flex flex-col gap-4 text-white text-center lg:text-left pb-6 lg:pb-10"
        >
          <h1 className="uppercase font-default text-[56px] md:text-[80px] lg:text-[96px]">
            {destinationData[selectedDestinationIndex].name}
          </h1>
          <p className="max-w-md font-body text-[16px] lg:text-[16px] leading-[180%]">
            {destinationData[selectedDestinationIndex].description}
          </p>
        </motion.div>
        <motion.div layout className="w-full py-6 lg:py-8 uppercase text-white flex flex-col gap-6 md:flex-row border-t border-white border-opacity-50">
          <span className="w-full md:w-[50%] text-center lg:text-left">
            <p className="text-[14px] tracking-[2px] font-sub">Avg. Distance</p>
            <motion.h3
              key={destinationData[selectedDestinationIndex].name}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.25,
                duration: 2,
              }}
              className="text-[28px] font-default"
            >
              {destinationData[selectedDestinationIndex].distance}
            </motion.h3>
          </span>
          <span className="w-full md:w-[50%] text-center lg:text-left">
            <p className="text-[14px] tracking-[2px] font-sub">
              Est. Travel Time
            </p>
            <motion.h3
              key={destinationData[selectedDestinationIndex].name}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.25,
                duration: 2,
              }}
              className="text-[28px] font-default"
            >
              {destinationData[selectedDestinationIndex].travel}
            </motion.h3>
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

const TabSection = ({
  selectedDestinationIndex,
  setSelectedDestinationIndex,
}: TabSectionProps) => {
  return (
    <ul className="flex gap-8 justify-center lg:justify-start">
      {destinationData.map((destination, index) => (
        <li
          key={destination.name}
          className={`cursor-pointer uppercase text-white font-sub py-3 text-[14px] md:text-[16px] tracking-[2px] border-b-4 ${
            selectedDestinationIndex === index
              ? "border-white"
              : "border-transparent hover:border-white hover:border-opacity-50"
          } transition-colors duration-700 ease-in-out`}
          onClick={() => setSelectedDestinationIndex(index)}
        >
          {destination.name}
        </li>
      ))}
    </ul>
  );
};
