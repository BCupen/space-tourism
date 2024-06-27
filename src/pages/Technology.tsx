import NavBar from "../components/NavBar";
import { SubHeading } from "../components/SubHeading";
import { TechnologyDetails } from "../components/TechnologyDetails";

export const Technology = () => {
  return (
    <div className="w-full min-h-screen bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop bg-no-repeat bg-cover">
      <NavBar />
      <div className="max-w-[1440px] flex flex-col gap-6 mx-auto py-6 md:py-7 lg:py-12 lg:pl-[120px]">
        <span className="w-full px-6 md:px-7">
            <SubHeading headingNo="03" headingTitle="Space Launch 101" />
        </span>
        
        <TechnologyDetails />
      </div>
    </div>
  );
};
