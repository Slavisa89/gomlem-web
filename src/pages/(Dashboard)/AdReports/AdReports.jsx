import React, {useState} from 'react'
import StatusBox from "@components/StatusBox";
import Statistics from "@components/Statistics";
import Table from "@components/NewTable";
import Thead from "@components/NewTable/Thead";
import Tbody from "@components/NewTable/Tbody";
import TrowAdReports from '@components/NewTable/TRowAdReports';
import SelectChart from "@components/SelectChart";
import useTripsData from "@hooks/useTripsData";
import {faker } from "@faker-js/faker";

export default function AdReports() {
  const [dataMode, setDataMode] = useState("monthlyData");
  function handlerDataMode(data) {
    setDataMode(data);
    }

  const {
    tripsPending,
    trips,
    // tripsMessageError,
    tripsError,
  } = useTripsData();

  const dataHead = ["Customer name", "Date Paid", "Company Name", "Locations Targeted", "Amount Paid", "Ad Reports"];

  const dummy = [{
    id: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
    fullName: "Slavisa Test",
    country: "USA",
    amountPaid: '5,000$',
    companyName: 'Telegram',
    registeredOn: "2023-12-14T10:33:34.1148514",
    tripsCount: 7,
  }]
const isPending = false

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
    <div className="pl-[42px] pt-[34px]  h-[calc(100vh-112px)] overflow-y-scroll pb-10">
      <div className='d-flex flex-row'>
    <div className='flex gap-[26px]'>
      <StatusBox
            typeBox="boxTypeOne"
            color="red"
            icon="dollar"
            title="Total Revenue"
            number="$50,000"
            profit="12.76"
            lastSince="Since last month"
      />
      <StatusBox
            typeBox="boxTypeOne"
            color="green"
            icon="person"
            title="Total Paying Customers"
            number={7}
            profit="12.76"
            lastSince="Since last month"
      />
          <StatusBox
            typeBox="boxTypeTwo"
            color="blue"
            icon="setting"
            title="Ad Report Settings"
            fnViewTitle="View And Edit"
          />
    </div>
    <div className="w-1/2">
        <span className="font-semibold">Top Performing Locations</span>
        <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
        <Statistics/>
    </div>
    <Statistics />
    </div>
    <Table typeTable="helpRequests">
        <Thead dataHead={dataHead} />
        <Tbody isPending={false}>
        {!isPending && dummy.map((dataRow, i) => {
            return (
              <TrowAdReports
                key={i}
                handlerActiveId={() => true}
                body={dataRow}
              />
            );
          })}
        </Tbody>
      </Table>
    </div>
  )
}
