import React, { useEffect, useReducer, useState } from "react";
import SelectStatus from "./SelectStatus";
import SearchTable from "@components/SearchTable";
import SortBy from "../SortBy";
import TableHelpRequest from "./TableHelpRequest";
import useHelpRequestTable from "@hooks/useHelpRequestTable";
import { cleanObj } from "@/script/script";
import { ACTIONS, initialArg, reducerParam } from "./reducerParam";

export default function HelpRequestTable() {
  const [state, dispatch] = useReducer(reducerParam, initialArg);

  const {
    helpRequestTableData,
    helpRequestTablePending,
    helpRequestTableError,
    // HelpRequestTableMessageError,
  } = useHelpRequestTable(cleanObj(state));

  // this state hold last change input search
  const [searchText, setSearchText] = useState("");

  // set urgency level filter
  function handlerUrgencyLevel(UrgencyLevel) {
    dispatch({ type: ACTIONS.SET_URGENCY_LEVEL, payload: { UrgencyLevel } });
  }
  // change sort filter
  function handlerSortBy(sortOrder) {
    if (sortOrder == state.SortOrder) return;
    dispatch({
      type: ACTIONS.SET_SORT_ORDER,
      payload: { SortOrder: sortOrder },
    });
  }

  // change sort filter
  function handlerStatus(status) {
    if (status == state.Status) return;
    dispatch({
      type: ACTIONS.SET_STATUS,
      payload: { Status: status },
    });
  }

  // set last change searchbox
  function handlerChange(text) {
    setSearchText(text);
  }
  // Handler Submit search
  function handlerSubmit() {
    dispatch({ type: ACTIONS.SET_AREA_SEARCH, payload: { Text: searchText } });
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      handlerSubmit();
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchText]);
  return (
    <div className="mt-[90px]">
      {/* headers */}
      <div className="flex justify-between">
        <div className="flex items-center gap-6">
          <span className="text-[28px] font-semibold">Help Requests</span>
          <div>
            <SelectStatus
              handlerUrgencyLevel={handlerUrgencyLevel}
              UrgencyLevel={state.UrgencyLevel}
            />
          </div>
        </div>
        <div className="flex gap-[18px] mb-3">
          <SearchTable
            searchBoxHandler={{
              searchInput: searchText,
              handlerChange: handlerChange,
              handlerSubmit: handlerSubmit,
              placeHolder: "Search help requests by area",
            }}
          />{" "}
          <SortBy handlerSortBy={handlerSortBy} handlerStatus={handlerStatus} />
        </div>
      </div>
      <TableHelpRequest
        data={helpRequestTableData}
        isPending={helpRequestTableError || helpRequestTablePending}
      />
    </div>
  );
}
