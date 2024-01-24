import React, { useState } from "react";
import Table from "@components/NewTable";
import Thead from "@components/NewTable/Thead";
import Tbody from "@components/NewTable/Tbody";
import TrowAdReports from "@components/NewTable/TRowAdReports";
import SelectChart from "@components/SelectChart";
import useAdReportsTable from "@hooks/useAdReportsTable";

const dataHead = [
  "Customer name",
  "Date Paid",
  "Company Name",
  "Locations Targeted",
  "Amount Paid",
  "Ad Reports",
];

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

export default function TableAdReports() {
  const [dataMode, setDataMode] = useState("monthlyData");

  function handlerDataMode(data) {
    setDataMode(data);
  }

  const { adReportsTableData, adReportsTablePending, adReportsTableError } =
    useAdReportsTable();

  return (
    <>
      <div className="mt-6 mb-6 flex items-center mb-16">
        <span className="font-semibold text-[28px] mr-6">Advertises</span>
        <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
      </div>
      <Table typeTable="helpRequests">
        <Thead dataHead={dataHead} />
        <Tbody isPending={adReportsTablePending}>
          {!adReportsTablePending &&
            adReportsTableData.map((dataRow, i) => {
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
