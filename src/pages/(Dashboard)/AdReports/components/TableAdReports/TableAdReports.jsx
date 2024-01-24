import React, { useState } from "react";
import Table from "@components/NewTable";
import Thead from "@components/NewTable/Thead";
import Tbody from "@components/NewTable/Tbody";
import TrowAdReports from "@components/NewTable/TRowAdReports";
import SelectChart from "@components/SelectChart";

const dummy = [
  {
    id: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
    fullName: "Slavisa Test",
    country: "USA",
    amountPaid: "5,000$",
    companyName: "Telegram",
    registeredOn: "2023-12-14T10:33:34.1148514",
    tripsCount: 7,
  },
];

const dataHead = [
  "Customer name",
  "Date Paid",
  "Company Name",
  "Locations Targeted",
  "Amount Paid",
  "Ad Reports",
];

export default function TableAdReports({ isPending }) {
  const [dataMode, setDataMode] = useState("monthlyData");

  function handlerDataMode(data) {
    setDataMode(data);
  }

  return (
    <>
      <div className="mt-6 mb-6 flex items-center mb-16">
        <span className="font-semibold text-[28px] mr-6">Advertises</span>
        <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
      </div>
      <Table typeTable="helpRequests">
        <Thead dataHead={dataHead} />
        <Tbody isPending={false}>
          {!isPending &&
            dummy.map((dataRow, i) => {
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
    </>
  );
}
