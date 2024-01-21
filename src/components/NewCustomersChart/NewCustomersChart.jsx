import { useState } from "react";
import MiniChart from "./MiniChart";
import SelectChart from "@components/SelectChart";
import TitleChart from "./TitleChart";
import ModalChart from "./ModalChart";
import AnimBox from "@animation/AnimBox";
import BoxSkeleton from "@skeleton/BoxSkeleton";
import useCustomerInfoData from "@hooks/useCustomerInfoData";

export default function NewCustomersChart() {
  const {
    customersInfoData,
    customersInfoPending,
    customersInfoError,
    // customersInfoMessageError,
  } = useCustomerInfoData();

  const [dataMode, setDataMode] = useState("monthlyData");
  function handlerDataMode(date) {
    setDataMode(date);
  }

  const [isActiveModalChart, setIsActiveModalChart] = useState(false);
  function handlerActiveModal() {
    setIsActiveModalChart(!isActiveModalChart);
  }

  return (
    <>
      <div className="z-10">
        <div className="mb-8">
          <div className="flex flex-col px-[14px] py-5 rounded-2xl font-semibold border border-light-100 mb-4">
            <TitleChart
              rate={customersInfoData?.sinceLastMonth}
              counter={
                customersInfoData?.newCustomersChartsData[dataMode][
                  customersInfoData?.newCustomersChartsData[dataMode].length - 1
                ].value
              }
              isPending={customersInfoPending || customersInfoError}
              handlerActiveModal={handlerActiveModal}
            />

            {customersInfoPending || customersInfoError ? (
              <BoxSkeleton
                height={300}
                className="mb-4 rounded-xl"
                selectTheme="blue"
              />
            ) : (
              <MiniChart
                datasApi={customersInfoData.newCustomersChartsData[dataMode]}
              />
            )}
          </div>
          <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
        </div>
        {customersInfoPending || customersInfoError ? null : (
          <AnimBox
            y={200}
            time={8}
            isOpen={isActiveModalChart}
            className="fixed bottom-14 shadow-boo-1 right-[70px] z-20"
          >
            <ModalChart
              handlerActiveModal={handlerActiveModal}
              dataChart={customersInfoData.newCustomersChartsData}
            />
          </AnimBox>
        )}
      </div>
    </>
  );
}
