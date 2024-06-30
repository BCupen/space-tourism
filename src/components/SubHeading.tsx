import { motion } from "framer-motion";
export interface SubHeadingProps {
  headingNo: string;
  headingTitle: string;
}

export const SubHeading = ({ headingNo, headingTitle }: SubHeadingProps) => {
  return (
    <motion.h2
      initial={{
        x: '-100%'
      }}
      animate={{
        x: 0
      }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        
      }}
    className="w-full text-white tracking-[4px] font-sub flex justify-center md:justify-start gap-1 uppercase text-[16px] md:text-[20px] lg:text-[28px] ">
      <p className="opacity-25 font-medium">{headingNo}</p>
      {headingTitle}
    </motion.h2>
  );
};
