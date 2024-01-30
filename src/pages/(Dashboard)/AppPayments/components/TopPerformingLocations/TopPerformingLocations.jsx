import React, { useState, useMemo } from "react";
import LocationTable from "./LocationTable";
import SelectChart from "@components/SelectChart";
import AnimBox from "@animation/AnimBox";
import CloseButton from "@components/CloseButton";
import ReportChartBox from "./ReportChart";
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
