import { useState } from "react";
import MiniChart from "./MiniChart";
import SelectChart from "@components/SelectChart";
import TitleChart from "./TitleChart";
import AnimBox from "@animation/AnimBox";
import BoxSkeleton from "@skeleton/BoxSkeleton";
import useHelpRequestsInfo from "@hooks/useHelpRequestsInfo";

export default function HelpRequestChart() {
  const [dataMode, setDataMode] = useState("monthlyData");
  function handlerDataMode(date) {
    setDataMode(date);
  }
  const {
    helpRequestsInfoPending,
    helpRequestsInfoData,
    helpRequestsInfoError,
    // helpRequestsInfoMessageError,
  } = useHelpRequestsInfo();
  return (
    <>
      <div className="z-10">
        <div className="mb-8">
          <div className="flex flex-col w-[280px] px-2 py-5 mb-4 font-semibold border rounded-2xl border-light-100">
            <TitleChart
              rate={helpRequestsInfoData?.sinceLastMonth}
              counter={helpRequestsInfoData?.totalHelpRequests}
              isPending={helpRequestsInfoPending || helpRequestsInfoError}
            />

            {helpRequestsInfoPending || helpRequestsInfoError ? (
              <BoxSkeleton
                height={300}
                className="mb-4 rounded-xl"
                selectTheme="blue"
              />
            ) : (
              <MiniChart
                datasApi={helpRequestsInfoData.helpRequestsChartsData[dataMode]}
              />
            )}
          </div>
          <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
        </div>
      </div>
    </>
  );
}
