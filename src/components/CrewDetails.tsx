import { useState } from "react";
import data from "../data.json";
import { easeInOut, motion } from "framer-motion";

const crewData = data.crew;

export const CrewDetails = () => {
  const [activeCrewIndex, setActiveCrewIndex] = useState(0);
  const imageUrl = `${import.meta.env.BASE_URL}${
    crewData[activeCrewIndex].images.png
  }`;
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8">
      <div className="lg:min-h-[700px] lg:relative flex flex-col justify-center items-center lg:items-start gap-6">
        <motion.div
          key={crewData[activeCrewIndex].name}
          initial={{
            x: "-50%",
          }}
          animate={{
            x: 0,
          }}
          transition={{
            ease: easeInOut,
            duration: 1.5,
          }}
          className="flex flex-col gap-4 text-white text-center lg:text-left"
        >
          <h3 className="uppercase text-white text-opacity-50 text-[18px] md:text-[24px] lg:text-[32px]">
            {crewData[activeCrewIndex].role}
          </h3>
          <h1 className="uppercase text-[24px] md:text-[40px] lg:text-[56px]">
            {crewData[activeCrewIndex].name}
          </h1>
          <p className="text-[16px] md:text-[18px] leading-[180%]">
            {crewData[activeCrewIndex].bio}
          </p>
        </motion.div>
        <div className="flex gap-4 lg:gap-10 lg:absolute lg:bottom-0">
          <motion.button
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.25,
              duration: 0.5,
            }}
            onClick={() => setActiveCrewIndex(0)}
            className={`rounded-full w-2 h-2 lg:w-3 lg:h-3 ${
              activeCrewIndex === 0
                ? "bg-white"
                : "bg-white bg-opacity-20 hover:bg-opacity-50"
            } transition-colour duration-700 ease-in-out`}
          />
          <motion.button
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            onClick={() => setActiveCrewIndex(1)}
            className={`rounded-full w-2 h-2 lg:w-3 lg:h-3 ${
              activeCrewIndex === 1
                ? "bg-white"
                : "bg-white bg-opacity-20 hover:bg-opacity-50"
            } transition-colour duration-700 ease-in-out`}
          />
          <motion.button
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 0.75,
              duration: 0.5,
            }}
            onClick={() => setActiveCrewIndex(2)}
            className={`rounded-full w-2 h-2 lg:w-3 lg:h-3 ${
              activeCrewIndex === 2
                ? "bg-white"
                : "bg-white bg-opacity-20 hover:bg-opacity-50"
            } transition-colour duration-700 ease-in-out`}
          />
          <motion.button
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
            onClick={() => setActiveCrewIndex(3)}
            className={`rounded-full w-2 h-2 lg:w-3 lg:h-3 ${
              activeCrewIndex === 3
                ? "bg-white"
                : "bg-white bg-opacity-20 hover:bg-opacity-50"
            } transition-colour duration-700 ease-in-out`}
          />
        </div>
      </div>
      <motion.img
        key={crewData[activeCrewIndex].name}
        initial={{
          x: "100%",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "tween",
          duration: 1,
        }}
        src={imageUrl}
        alt={crewData[activeCrewIndex].name}
        className="w-[270px] h-[340px] md:w-[440px] md:h-[520px] lg:w-[605px] lg:h-[598px] self-center lg:self-end"
      />
    </div>
  );
};
