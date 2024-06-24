import { useState } from "react";
import data from "../data.json";

const crewData = data.crew;

export const CrewDetails = () => {
  const [activeCrewIndex, setActiveCrewIndex] = useState(0);
  const imageUrl =`${import.meta.env.BASE_URL}${crewData[activeCrewIndex].images.png}`
  return (
    <div className="w-full flex flex-col lg:flex-row gap-8">
      <div className="lg:min-h-[700px] lg:relative flex flex-col justify-center items-center lg:items-start gap-6">
        <div className="flex flex-col gap-4 text-white text-center lg:text-left">
          <h3 className="uppercase text-white text-opacity-50 text-[18px] md:text-[24px] lg:text-[32px]">{crewData[activeCrewIndex].role}</h3>
          <h1 className="uppercase text-[24px] md:text-[40px] lg:text-[56px]">{crewData[activeCrewIndex].name}</h1>
          <p className="text-[16px] md:text-[18px] leading-[180%]">{crewData[activeCrewIndex].bio}</p>
        </div>
        <div className="flex gap-4 lg:gap-10 lg:absolute lg:bottom-0">
            <button onClick={() => setActiveCrewIndex(0)} className={`rounded-full w-2 h-2 lg:w-3 lg:h-3 ${activeCrewIndex === 0 ? "bg-white" : "bg-white bg-opacity-20 hover:bg-opacity-50"} transition-colour duration-700 ease-in-out`} />
            <button onClick={() => setActiveCrewIndex(1)} className={`rounded-full w-2 h-2 lg:w-3 lg:h-3 ${activeCrewIndex === 1 ? "bg-white" : "bg-white bg-opacity-20 hover:bg-opacity-50"} transition-colour duration-700 ease-in-out`} />
            <button onClick={() => setActiveCrewIndex(2)} className={`rounded-full w-2 h-2 lg:w-3 lg:h-3 ${activeCrewIndex === 2 ? "bg-white" : "bg-white bg-opacity-20 hover:bg-opacity-50"} transition-colour duration-700 ease-in-out`}  />
            <button onClick={() => setActiveCrewIndex(3)} className={`rounded-full w-2 h-2 lg:w-3 lg:h-3 ${activeCrewIndex === 3 ? "bg-white" : "bg-white bg-opacity-20 hover:bg-opacity-50"} transition-colour duration-700 ease-in-out`}  />
        </div>
      </div>
      <img src={imageUrl} alt={crewData[activeCrewIndex].name} className="w-[270px] h-[340px] md:w-[440px] md:h-[520px] lg:w-[605px] lg:h-[598px] self-center lg:self-end"/>
    </div>
  );
};
