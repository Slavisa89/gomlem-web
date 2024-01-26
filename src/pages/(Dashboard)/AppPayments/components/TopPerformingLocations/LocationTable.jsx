import { useState } from "react";
import SelectChart from "@components/SelectChart";
import Icon from "@components/Icon";
import PerformLocationItem from "./PerformLocationItem";

export default function LocationTable({ locationType, isPending = false }) {
  const [dataMode, setDataMode] = useState("monthlyData");

  function handlerDataMode(data) {
    setDataMode(data);
  }

  return (
    <div className="flex flex-col gap-5 shadow-boo-2 rounded-[20px]">
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-between items-center mb-6 py-3 pl-[25px] pr-[15px] rounded-t-3xl text-white bg-text">
          <span className="font-semibold">
            Top Performing Locations ({locationType})
          </span>
          <button disabled={isPending} onClick={() => handlerModal(true)}>
            <Icon name="expand" className="" />
          </button>
        </div>
        <div className="px-[24px]">
          <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
        </div>
      </div>
      <div className="px-[24px] pb-[24px]">
        <PerformLocationItem city={"Brooklyn"} total={"5,000"} />
        <PerformLocationItem city={"Manhattan"} total={"4,000"} />
        <PerformLocationItem city={"Queens"} total={"3,700"} />
      </div>

      {/* {tripsPending || tripsError ? (
            <BoxSkeleton height={400} />
          ) : (
            topLocationList.map((locationItem, i) => (
              <LocationReportChartBox key={i} locationItem={locationItem} />
            ))
          )} */}
      {/* <AnimBox
            y={200}
            time={8}
            isOpen={activeModal}
            className="fixed bottom-14 shadow-boo-1 right-[70px] z-20 w-[783px]"
          >
            <div className="flex flex-col font-semibold bg-white rounded-3xl">
              <div className="flex justify-between py-3 pl-[34px] pr-[17px] rounded-t-3xl text-white items-center bg-text w-full">
                <span>Top Performing Locations</span>
                <div className="flex gap-2">
                  <CloseButton closeFn={() => handlerModal(false)} />
                </div>
              </div>
    
              {customersInfoData && (
                <div className="p-[15px]">
                  <div className="mb-6">
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
          </AnimBox> */}
    </div>
  );
}
