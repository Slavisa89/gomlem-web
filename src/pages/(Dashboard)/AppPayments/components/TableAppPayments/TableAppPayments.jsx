import React, { useState, useMemo } from "react";
import DataTypesToggle from "./DataTypesToggle";
import FilterMenu from "@components/FilterMenu/FilterMenu";
import { Link } from "react-router-dom";

export default function TableAppPayments({ tableData }) {
  const [typeTable, setTypeTable] = useState(Object.keys(tableData)[0]);
  const [sortBy, setSortBy] = useState("NewToOld");

  function handelTypeTable(type) {
    setTypeTable(type);
  }

  function handlerSortBy(sort) {
    setSortBy(sort);
  }

  const tableHeaderRow = useMemo(() => tableData[typeTable].head, [typeTable]);
  const tableRecords = useMemo(() => tableData[typeTable].record, [typeTable]);

  return (
    <div className="mt-[27px] flex flex-col gap-4">
      <div className="flex justify-between">
        <DataTypesToggle
          typeList={Object.keys(tableData)}
          selectedType={typeTable}
          handleType={handelTypeTable}
        />
        <FilterMenu handlerSortBy={handlerSortBy} />
      </div>
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
                <td className="text-blue">{amountSpent}</td>
                <td>
                  <Link
                    to="/customers"
                    className="flex gap-[12px] text-text-lighter font-normal items-center">
                    <span>Customer Profile</span>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
