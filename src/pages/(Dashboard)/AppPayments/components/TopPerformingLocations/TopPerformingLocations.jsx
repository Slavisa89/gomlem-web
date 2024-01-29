import React, { useState, useMemo } from "react";
import LocationTable from "./LocationTable";
import SelectChart from "@components/SelectChart";
import AnimBox from "@animation/AnimBox";
import CloseButton from "@components/CloseButton";
import ReportChartBox from "./ReportChart";
import useCustomerInfoData from "@hooks/useCustomerInfoData";
import ModalTopPerformingLocations from "./ModalTopPerformingLocations";

export default function TopPerformingLocations() {
  const [activeModal, setActiveModal] = useState(undefined);
  const [dataMode, setDataMode] = useState("monthlyData");

  const {
    customersInfoData,
    customersInfoPending,
    customersInfoError,
    // customersInfoMessageError,
  } = useCustomerInfoData();

  const topLocationList = useMemo(() => {
    return customersInfoData
      ? [
          {
            name: "Brooklyn",
            totalAdSpent: "20.000",
            data: customersInfoData.newCustomersChartsData[dataMode],
          },
          {
            name: "London",
            totalAdSpent: "10.000",
            data: customersInfoData.newCustomersChartsData[dataMode],
          },
          {
            name: "Manhattan",
            totalAdSpent: "15.000",
            data: customersInfoData.newCustomersChartsData[dataMode],
          },
        ]
      : [];
  }, [customersInfoData, dataMode]);

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
        locationsData={topLocationList}
        customersInfoData={customersInfoData}
        dataMode={dataMode}
        handlerDataMode={setDataMode}
        customersInfoPending={customersInfoPending}
      />
    </div>
  );
}
