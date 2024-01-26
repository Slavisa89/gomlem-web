import React, { useState } from "react";
import StatusBox from "@components/StatusBox";
import ModalAdReportsSettings from "@modals/ModalAdReportsSettings";

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
        isPending={false}
        number="$50,000"
        profit="12.76"
        lastSince="Since last month"
      />
      <StatusBox
        typeBox="boxTypeOne"
        color="green"
        icon="person"
        title="Total Paying Customers"
        isPending={false}
        number={7}
        profit="12.76"
        lastSince="Since last month"
      />
      <StatusBox
        typeBox="boxTypeThree"
        color="blue"
        icon="setting"
        title="Ad Reports Settings"
        isPending={false}
        fnViewTitle="View And Edit"
        fnView={handlerActiveModalSetting}
        typeModal="Ad Reports Settings"
      />
      <ModalAdReportsSettings
        handlerActiveModal={handlerActiveModalSetting}
        activeModal={activeModalSetting}
      />
    </div>
  );
}
