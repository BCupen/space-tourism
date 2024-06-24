import { useState } from "react";
import data from "../data.json";

const destinationData = data.destinations;

export const DestinationDetails = () => {
  const [selectedDestinationIndex, setSelectedDestinationIndex] = useState(0);
  const imageUrl = `${import.meta.env.BASE_URL}${destinationData[selectedDestinationIndex].images.png}`
  return (
    <div>
      <img src={imageUrl} alt={destinationData[selectedDestinationIndex].name} />
    </div>
  );
};
