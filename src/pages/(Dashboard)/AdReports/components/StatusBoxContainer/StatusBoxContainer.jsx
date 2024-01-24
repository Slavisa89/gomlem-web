import React, { useState } from "react";
import StatusBox from "@components/StatusBox";

export function StatusBoxContainer() {
  const [activeModalSetting, setActiveModalSetting] = useState(false);
  function handlerActiveModalSetting(nameModal) {
    setActiveModalSetting(nameModal);
  }

  return (
    <div className="flex gap-[26px]">
      <StatusBox
        typeBox="boxTypeOne"
        color="red"
        icon="dollar"
        title="Total Revenue"
        number="$50,000"
        profit="12.76"
        lastSince="Since last month"
      />
      <StatusBox
        typeBox="boxTypeOne"
        color="green"
        icon="person"
        title="Total Paying Customers"
        number={7}
        profit="12.76"
        lastSince="Since last month"
      />
      <StatusBox
        typeBox="boxTypeTwo"
        color="blue"
        icon="setting"
        title="Ad Report Settings"
        fnViewTitle="View And Edit"
        fnView={handlerActiveModalSetting}
        typeModal="Ad Report Settings"
      />
    </div>
  );
}
