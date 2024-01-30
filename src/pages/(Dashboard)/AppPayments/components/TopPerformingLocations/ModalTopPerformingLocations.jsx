import { useState, useEffect, useMemo } from "react";
import CloseButton from "@components/CloseButton";
import SearchBox from "@components/SearchBox";
import SelectChart from "@components/SelectChart";
import AnimBox from "@animation/AnimBox";
import LocationCharts from "./LocationsCharts";
import ModalSearchArea from "./ModalSearchArea";
import useCustomerInfoData from "@hooks/useCustomerInfoData";

const locationItem = {
  name: "Brooklyn",
  totalAdSpent: "20.000",
  data: [1, 400, 0, 50, 480],
};

export default function ModalTopPerformingLocations({
  activeModal,
  handleModal,
}) {
  const [searchArea, setSearchArea] = useState("");
  const [openMiniModal, setOpenMiniModal] = useState(false);
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

  useEffect(() => {
    setSearchArea(locationItem.name);
  }, []);

  function handlerChange(value) {
    setSearchArea(value);
  }
  function handlerSubmit() {
    setOpenMiniModal(true);
  }

  const showModal = useMemo(
    () => activeModal === "Subscriptions" || activeModal === "Trips" || false,
    [activeModal],
  );

  const handleCloseMainModal = () => {
    handleModal(false);
    setOpenMiniModal(false);
  };

  return (
    <>
      <div
        style={{ pointerEvents: activeModal ? "auto" : "none" }}
        className="fixed bottom-14 right-[40px] z-20 flex">
        <AnimBox
          y={200}
          time={8}
          isOpen={showModal}
          className="fixed bottom-14 shadow-boo-1 right-[70px] z-20 w-[783px]">
          <div className="flex flex-col font-semibold bg-white rounded-3xl w-full">
            <div className="flex bg-white rounded-3xl flex-col font-semibold w-full">
              <div className="flex justify-between py-3 pl-8 pt-[12px] pr-[14px] rounded-t-3xl text-white items-center bg-text">
                <span>Modal Top Performing Locations ({activeModal})</span>
                <CloseButton closeFn={handleCloseMainModal} />
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
                      handlerDataMode={setDataMode}
                    />
                  </div>
                  <div className="row grid grid-cols-2 gap-[10px]">
                    {topLocationList.map((locationItem, i) => (
                      <div key={i}>
                        <LocationCharts locationItem={locationItem} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </AnimBox>
      </div>
      {customersInfoPending ? null : (
        <div className="!-translate-x-full absolute top-[100px] left-[42rem]">
          <AnimBox
            y={200}
            time={8}
            isOpen={openMiniModal}
            className="relative top-[0px] shadow-boo-1 left-[0px] z-20">
            <ModalSearchArea
              handlerActiveModal={setOpenMiniModal}
              locationItem={topLocationList[0]}
            />
          </AnimBox>
        </div>
      )}
    </>
  );
}
