import { DestinationDetails } from "../components/DestinationDetails";
import NavBar from "../components/NavBar";
import { SubHeading } from "../components/SubHeading";

export const Destinations = () => {
  return (
    <div className="w-full min-h-screen bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-no-repeat bg-cover">
      <NavBar />
      <div className="max-w-[1440px] flex flex-col gap-6 mx-auto p-6 md:p-10 lg:py-12 lg:px-[165px]">
        <SubHeading headingNo="01" headingTitle="Pick your Destination" />
        <DestinationDetails />
      </div>
    </div>
  );
};
