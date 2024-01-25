import React, { useState } from "react";
import Table from "@components/NewTable";
import Thead from "@components/NewTable/Thead";
import Tbody from "@components/NewTable/Tbody";
import TrowAdReports from "@components/NewTable/TRowAdReports";
import useAdReportsTable from "@hooks/useAdReportsTable";
import SelectTable from "@components/SelectTable";

const dataHead = [
  "Customer name",
  "Date Paid",
  "Company Name",
  "Locations Targeted",
  "Amount Paid",
  "Ad Reports",
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
        <SelectTable mode={dataMode} handlerDataMode={handlerDataMode} />
      </div>
      <Table typeTable="adReports">
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
