import { useState } from "react";
import Chart from "./Chart";
import SelectChart from "@components/SelectChart";
import BoxSkeleton from "@skeleton/BoxSkeleton";

import { faker } from "@faker-js/faker";
import useTripsData from "@hooks/useTripsData";

export default function Statistics() {
  const {
    tripsPending,
    trips,
    // tripsMessageError,
    tripsError,
  } = useTripsData();
  const [dataMode, setDataMode] = useState("monthlyData");
  function handlerDataMode(data) {
    setDataMode(data);
  }
  let dataFromApi = [];
  if (!tripsPending && !tripsError) {
    dataFromApi = [
      {
        label: "Trips",
        data: trips?.tripsChartsData[dataMode],
      },
      {
        label: "Subscriptions",
        data: trips?.tripsChartsData[dataMode].map((item) => {
          return {
            name: item.name,
            value: item.value + faker.number.int({ min: 0, max: 5 }),
          };
        }),
      },
    ];
  }

  return (
    <div className="flex flex-col gap-5 mt-[58px] shadow-boo-2 p-6">
      <div className="flex justify-between">
        <span className="font-semibold">Statistics</span>
        <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
      </div>
      {tripsPending || tripsError ? (
        <BoxSkeleton height={400} />
      ) : (
        <Chart dataFromApi={dataFromApi} />
      )}
    </div>
  );
}
