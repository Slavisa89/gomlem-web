import React, { useState, useMemo } from "react";
import DataTypesToggle from "./DataTypesToggle";

export default function TableAppPayments({ tableData }) {
  const [typeTable, setTypeTable] = useState(Object.keys(tableData)[0]);
  function handelTypeTable(type) {
    setTypeTable(type);
  }

  const tableHeaderRow = useMemo(() => tableData[typeTable].head, [typeTable]);
  const tableRecords = useMemo(() => tableData[typeTable].record, [typeTable]);

  return (
    <div className="mt-[27px] flex flex-col gap-4">
      <DataTypesToggle
        typeList={Object.keys(tableData)}
        selectedType={typeTable}
        handleType={handelTypeTable}
      />
      <table>
        <thead>
          <tr className="text-left text-[14px] font-normal text-gray-300 rounded-2xl">
            {tableHeaderRow.map((headerItem, i) => (
              <th key={i}>{headerItem}</th>
            ))}
          </tr>
        </thead>
        <div className="m-6"></div>
        <tbody className="text-xs font-normal text-gray-600">
          {tableRecords.map((recordItem) => {
            const { userName, amountSpent, totalMonthsPaid, date } = recordItem;
            return (
              <tr>
                <td>
                  <div className="flex flex-row items-center gap-2 py-2 px-0">
                    <img
                      src={recordItem.avatar}
                      className="rounded-full w-10"
                      alt="avatar"
                    />
                    <span>{userName}</span>
                  </div>
                </td>
                <td>{date}</td>
                <td>{amountSpent}</td>
                <td>{totalMonthsPaid} months</td>
                <td>{amountSpent}</td>
                <td>Test test</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
