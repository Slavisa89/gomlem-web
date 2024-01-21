import React, { useState } from "react";
import Tbody from "./Tbody";
import Thead from "./Thead";

export default function TableMain({tableApiData,typeTable}) {
  return (
    <div className="_table _table_Main">
      <Thead dataHead={tableApiData.head} />
      <Tbody dataBody={tableApiData.record} typeTable={typeTable} />
    </div>
  );
}