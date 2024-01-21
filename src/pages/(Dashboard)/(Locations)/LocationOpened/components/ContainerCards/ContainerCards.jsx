import React, { useState } from "react";
import SelectTypeCard from "./SelectTypeCard";
import ShulsContainer from "../ShulsContainer";
import ChabadHousesContainer from "../ChabadHousesContainer";
import KosherRestaurantsContainer from "../KosherRestaurantsContainer";
import LocalHelpNumbersContainer from "../LocalHelpNumbersContainer";
import LocalNewsLinksContainer from "../LocalNewsLinksContainer";
export default function ContainerCards() {
  const [typeCard, setTypeCard] = useState("Shuls");
  function handlerSelectType(type) {
    setTypeCard(type);
  }
  const Cards = {
    Shuls: <ShulsContainer />,
    "Chabad Houses": <ChabadHousesContainer />,
    "Kosher Restaurants": <KosherRestaurantsContainer />,
    "Local Help Numbers": <LocalHelpNumbersContainer />,
    "Local News Links": <LocalNewsLinksContainer />,
  };
  const SelectCard = () => Cards[typeCard];
  return (
    <div className="mt-24">
      <SelectTypeCard type={typeCard} handlerSelectType={handlerSelectType} />
      <SelectCard />
    </div>
  );
}
