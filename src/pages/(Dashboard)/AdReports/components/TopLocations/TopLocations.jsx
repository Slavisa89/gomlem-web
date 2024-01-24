import { useState } from "react";
import SelectChart from "@components/SelectChart";
import BoxSkeleton from "@skeleton/BoxSkeleton";
import AnimBox from "@animation/AnimBox";
import { faker } from "@faker-js/faker";
import useTripsData from "@hooks/useTripsData";
import Icon from "@components/Icon";
import CloseButton from "@components/CloseButton";
import MiniLocationChart from "../MiniLocationChart";
import useCustomerInfoData from "@hooks/useCustomerInfoData";

export default function TopLocations({ isPending = false }) {
  const [dataMode, setDataMode] = useState("monthlyData");

  const [activeModal, setActiveModal] = useState(false);
  function handlerModal(id = false) {
    setActiveModal(id);
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

  const topLocationList = [
    {
      name: "Brooklyn",
      totalAdSpent: "20.000",
      data: customersInfoData.newCustomersChartsData[dataMode],
    },
    {
      name: "London",
      totalAdSpent: "20.000",
      data: customersInfoData.newCustomersChartsData[dataMode],
    },
    {
      name: "Zvornik",
      totalAdSpent: "20.000",
      data: customersInfoData.newCustomersChartsData[dataMode],
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-between">
        <div className="flex flex-row justify-between items-center mb-6 py-3 pl-[25px] pr-[15px] rounded-t-3xl text-white bg-text">
          <span className="font-semibold">Top Performing Locations</span>
          <button disabled={isPending} onClick={() => handlerModal(true)}>
            <Icon name="expand" className="" />
          </button>
        </div>
        <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
      </div>
      {tripsPending || tripsError ? (
        <BoxSkeleton height={400} />
      ) : (
        topLocationList.map((locationItem, i) => (
          <div key={i}>
            <div className="flex justify-between">
              <span className="font-semibold">{locationItem.name}</span>
              <span className="font-semibold">
                ${locationItem.totalAdSpent} total ad spent
              </span>
            </div>
            <MiniLocationChart datasApi={locationItem.data} />
          </div>
        ))
      )}
      <AnimBox
        y={200}
        time={8}
        isOpen={activeModal}
        className="fixed bottom-14 shadow-boo-1 right-[70px] z-20 w-[643px]">
        <div className="flex flex-col font-semibold bg-white rounded-3xl">
          <div className="flex justify-between py-3 pl-[34px] pr-[17px] rounded-t-3xl text-white items-center bg-text w-full">
            <span>Add Location</span>
            <div className="flex gap-2">
              <CloseButton closeFn={() => handlerModal(false)} />
            </div>
          </div>
          <div className="p-10">
            <div className="mb-6">
              <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
            </div>
            <div className="row d-flex">
              <MiniLocationChart
                datasApi={customersInfoData.newCustomersChartsData[dataMode]}
              />
              <MiniLocationChart
                datasApi={customersInfoData.newCustomersChartsData[dataMode]}
              />
            </div>
          </div>
        </div>
      </AnimBox>
    </div>
  );
}
