import React, { useState } from "react";
import Header from "./Header";
import Cards from "./Cards";
import SkeletonLoading from "./SkeletonLoading";
import ModalLocalHelpNumber from "@modals/ModalLocalHelpNumber";
const localHelpNumbersData = [
  { fullName: "Hatzolah", number: "000-000-0000", numberId: "1" },
  { fullName: "Ambulance", number: "000-000-0000", numberId: "2" },
  { fullName: "Police", number: "000-000-0000", numberId: "3" },
  { fullName: "Fire Department", number: "000-000-0000", numberId: "4" },
  { fullName: "Chaveirim", number: "000-000-0000", numberId: "5" },
  { fullName: "Shomrim", number: "000-000-0000", numberId: "6" },
  { fullName: "Hatzolah", number: "000-000-0000", numberId: "7" },
];
export default function LocalHelpNumbersContainer() {
  const [activeModal, setActiveModal] = useState(false);
  function handlerActiveModal(numberId) {
    setActiveModal(numberId);
  }
  const [localHelpNumbersPending, setPending] = useState(true);
  const localHelpNumbersError = false;
  setTimeout(() => {
    setPending(false);
  }, 5000);
  return (
    <>
      <div>
        <Header />
        {!localHelpNumbersPending && !localHelpNumbersError ? (
          <Cards
            data={localHelpNumbersData}
            handlerActiveModal={handlerActiveModal}
          />
        ) : (
          <SkeletonLoading count={9} />
        )}
        <ModalLocalHelpNumber
          handlerActiveModal={handlerActiveModal}
          activeModal={activeModal}
        />
      </div>
    </>
  );
}
