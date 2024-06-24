import { CrewDetails } from "../components/CrewDetails"
import NavBar from "../components/NavBar"
import { SubHeading } from "../components/SubHeading"

export const Crew = () => {
  return (
    <div className="w-full h-screen bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-no-repeat bg-cover">
      <NavBar />
      <div className="max-w-[1440px] flex flex-col gap-6 mx-auto p-6 md:p-7 lg:py-12 lg:px-[140px]">
        <SubHeading headingNo="02" headingTitle="Meet your crew" />
        <CrewDetails />
      </div>
      
    </div>
  )
}
