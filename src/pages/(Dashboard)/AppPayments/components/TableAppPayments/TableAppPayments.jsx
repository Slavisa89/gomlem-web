import React, { useState, useReducer, useEffect } from "react";
import DataTypesToggle from "./DataTypesToggle";
import { Link } from "react-router-dom";
import useAppPaymentsTable from "@hooks/useAppPaymentsTable";
import { cleanObj } from "@/script/script";
import {
  ACTIONS,
  initialArg,
  reducerParam,
} from "@services/utils/reducerParam";
import FilterMenuAppPayments from "./FilterMenuAppPayments";

export default function TableAppPayments() {
  const [typeTable, setTypeTable] = useState("");
  const [state, dispatch] = useReducer(reducerParam, initialArg);

  const { data, isPending } = useAppPaymentsTable(cleanObj(state));

  useEffect(() => {
    if (data) {
      setTypeTable(Object.keys(data)[0]);
    }
  }, []);

  // change sort filter
  function handlerSortBy(sortOrder) {
    event.preventDefault();
    if (sortOrder == state.SortOrder) return;
    dispatch({
      type: ACTIONS.SET_SORT_ORDER,
      payload: { SortOrder: sortOrder },
    });
  }

  function handelTypeTable(type) {
    setTypeTable(type);
  }

  return (
    <>
      {!isPending ? (
        <div className="mt-[27px] flex flex-col gap-4 pl-8 pr-8">
          <div className="flex justify-between mb-4">
            <DataTypesToggle
              typeList={Object.keys(data)}
              selectedType={typeTable}
              handleType={handelTypeTable}
            />
            <FilterMenuAppPayments handlerSortBy={handlerSortBy} />
          </div>
          <table>
            <thead>
              <tr className="text-left text-[14px] font-normal text-gray-300 rounded-2xl">
                {data[typeTable]?.head.map((headerItem, i) => (
                  <th key={i} className="pb-8">
                    {headerItem}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-xs font-normal text-gray-600">
              {data[typeTable]?.record.map((recordItem, i) => {
                const { userName, amountSpent, totalMonthsPaid, date } =
                  recordItem;
                return (
                  <tr key={i}>
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
      ) : null}
    </>
  );
}
