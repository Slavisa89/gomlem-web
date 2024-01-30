import React, { useState } from "react";
import LocationTable from "./LocationTable";
import ModalTopPerformingLocations from "./ModalTopPerformingLocations";

export default function TopPerformingLocations() {
  const [activeModal, setActiveModal] = useState(undefined);

  return (
    <div className="flex flex-col gap-5">
      <LocationTable
        locationType="Trips"
        handleModal={setActiveModal}
        activeModal={activeModal}
      />
      <LocationTable
        locationType="Subscriptions"
        handleModal={setActiveModal}
        activeModal={activeModal}
      />
      <ModalTopPerformingLocations
        handleModal={setActiveModal}
        activeModal={activeModal}
      />
    </div>
  );
}
