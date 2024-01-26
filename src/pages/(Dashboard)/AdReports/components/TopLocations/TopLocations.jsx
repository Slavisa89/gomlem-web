import { useMemo, useState } from "react";
import SelectChart from "@components/SelectChart";
import BoxSkeleton from "@skeleton/BoxSkeleton";
import AnimBox from "@animation/AnimBox";
import useTripsData from "@hooks/useTripsData";
import Icon from "@components/Icon";
import CloseButton from "@components/CloseButton";
import LocationReportChartBox from "../LocationReportChartBox";
import useCustomerInfoData from "@hooks/useCustomerInfoData";
import SearchBox from "@components/SearchBox";
import ModalSearchArea from "../ModalSearchArea/ModalSearchArea";

export default function TopLocations() {
  const [dataMode, setDataMode] = useState("monthlyData");
  const [searchArea, setSearchArea] = useState("");
  const [isActiveModalChart, setIsActiveModalChart] = useState(false);

  function handlerActiveModal() {
    setIsActiveModalChart(!isActiveModalChart);
  }

  const [activeModal, setActiveModal] = useState(false);
  function handlerModal(id = false) {
    setActiveModal(id);
  }

  function handlerChange(value) {
    setSearchArea(value);
  }

  function handlerSubmit() {
    handlerActiveModal();
    console.log(searchArea);
  }

  const {
    customersInfoData,
    customersInfoPending,
    customersInfoError,
    // customersInfoMessageError,
  } = useCustomerInfoData();

  const {
    tripsPending,
    trips,
    // tripsMessageError,
    tripsError,
  } = useTripsData();

  function handlerDataMode(data) {
    setDataMode(data);
  }

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
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-between items-center mb-6 py-3 pl-[25px] pr-[15px] rounded-t-3xl text-white bg-text">
          <span className="font-semibold">Top Performing Locations</span>
          <button
            disabled={customersInfoPending}
            onClick={() => handlerModal(true)}>
            <Icon name="expand" className="" />
          </button>
        </div>
        <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
      </div>
      {tripsPending || tripsError ? (
        <BoxSkeleton height={400} />
      ) : (
        topLocationList.map((locationItem, i) => (
          <LocationReportChartBox key={i} locationItem={locationItem} />
        ))
      )}
      <AnimBox
        y={200}
        time={8}
        isOpen={activeModal}
        className="fixed bottom-14 shadow-boo-1 right-[70px] z-20 w-[783px]">
        <div className="flex flex-col font-semibold bg-white rounded-3xl">
          <div className="flex justify-between py-3 pl-[34px] pr-[17px] rounded-t-3xl text-white items-center bg-text w-full">
            <span>Top Performing Locations</span>
            <div className="flex gap-2">
              <CloseButton closeFn={() => handlerModal(false)} />
            </div>
          </div>
          {customersInfoData && (
            <div className="p-[15px]">
              <div className="mb-6 flex items-center justify-between">
                <SearchBox
                  searchBoxHandler={{
                    searchInput: searchArea,
                    handlerChange: handlerChange,
                    handlerSubmit: handlerSubmit,
                    placeHolder: "Search Area",
                    className: "py-2",
                  }}
                />
                <SelectChart
                  mode={dataMode}
                  handlerDataMode={handlerDataMode}
                />
              </div>
              <div className="row grid grid-cols-2 gap-[10px]">
                {topLocationList.map((locationItem, i) => (
                  <div key={i}>
                    <LocationReportChartBox locationItem={locationItem} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </AnimBox>
      {customersInfoPending || customersInfoError ? null : (
        <AnimBox
          y={200}
          time={8}
          isOpen={isActiveModalChart}
          className="fixed top-[100px] shadow-boo-1 right-[860px] z-20">
          <ModalSearchArea
            handlerActiveModal={handlerActiveModal}
            locationItem={topLocationList[0]}
          />
        </AnimBox>
      )}
    </div>
  );
}
