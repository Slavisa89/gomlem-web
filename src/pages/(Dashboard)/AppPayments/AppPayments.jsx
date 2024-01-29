import React, { useReducer } from "react";
import StatusBoxContainer from "./components/StatusBoxContainer";
import Statistics from "@components/Statistics";
import TopPerformingLocations from "./components/TopPerformingLocations";
import useAppPaymentsTable from "@hooks/useAppPaymentsTable";
import TableAppPayments from "./components/TableAppPayments/TableAppPayments";
import { cleanObj } from "@/script/script";
import {
  ACTIONS,
  initialArg,
  reducerParam,
} from "@services/utils/reducerParam";

export default function AppPayments() {
  const [state, dispatch] = useReducer(reducerParam, initialArg);
  const { data, isPending } = useAppPaymentsTable(cleanObj(state));

  // change sort filter
  function handlerSortBy(sortOrder) {
    if (sortOrder == state.SortOrder) return;
    dispatch({
      type: ACTIONS.SET_SORT_ORDER,
      payload: { SortOrder: sortOrder },
    });
  }

  return (
    <div className="overflow-y-scroll h-[calc(100vh-112px)]">
      <div className="py-9 pl-11 pr-[30px] flex gap-[35px]">
        <main className="w-[70%]">
          <StatusBoxContainer />
          <Statistics />
        </main>
        <aside className="w-[30%]">
          <TopPerformingLocations />
        </aside>
      </div>
      {!isPending && (
        <TableAppPayments
          tableData={data}
          state={state}
          handlerSortBy={handlerSortBy}
        />
      )}
    </div>
  );
}
