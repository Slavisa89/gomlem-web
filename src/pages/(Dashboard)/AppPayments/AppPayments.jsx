import React from "react";
import StatusBoxContainer from "./components/StatusBoxContainer";
import Statistics from "@components/Statistics";
import TopPerformingLocations from "./components/TopPerformingLocations";
import TableAppPayments from "./components/TableAppPayments/TableAppPayments";

export default function AppPayments() {
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
      <TableAppPayments />
    </div>
  );
}
