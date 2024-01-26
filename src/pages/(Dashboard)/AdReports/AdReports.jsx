import React, { useState } from "react";
import Statistics from "@components/Statistics";
import TopLocations from "./components/TopLocations";
import { StatusBoxContainer } from "./components/StatusBoxContainer/StatusBoxContainer";
import TableAdReports from "./components/TableAdReports/TableAdReports";

export default function AdReports() {
  return (
    <div className="overflow-y-scroll h-[calc(100vh-112px)]">
      <div className="py-9 pl-11 pr-[30px] flex gap-[35px]">
        <main className="w-[70%]">
          <StatusBoxContainer />
          <Statistics />
          <TableAdReports />
        </main>
        <aside className="w-[30%]">
          <TopLocations />
        </aside>
      </div>
    </div>
  );
}
