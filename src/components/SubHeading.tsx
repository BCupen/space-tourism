
export interface SubHeadingProps {
    headingNo: string;
    headingTitle: string;
}

export const SubHeading = ({headingNo, headingTitle}: SubHeadingProps) => {
  return (
    <h2 className="w-full text-white tracking-[4px] font-sub flex justify-center md:justify-start gap-1 uppercase text-[16px] md:text-[20px] lg:text-[28px] ">
      <p className="opacity-25 font-medium">{headingNo}</p>
      {headingTitle}
    </h2>
  );
};
