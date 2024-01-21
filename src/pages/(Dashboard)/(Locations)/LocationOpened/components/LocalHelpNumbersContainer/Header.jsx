import React, { useState } from "react";
import Icon from "@components/Icon";
import ModalLocalHelpNumber from "@modals/ModalLocalHelpNumber";
export default function Header() {
  const [activeModal, setActiveModal] = useState(false);
  function handlerModal(show) {
    setActiveModal(show);
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2 text-[28px] font-semibold">
          Local Help Numbers
        </div>
        <button
          onClick={() => handlerModal("Add Help Number")}
          className="px-12 py-3 bg-text-softGary rounded-[10px] items-center text-white text-xs flex gap-2"
        >
          <Icon name="add" className=" svg-white w-[14px] h-[14px]" />
          <span>Add Help Number</span>
        </button>
      </div>
      <ModalLocalHelpNumber
        handlerActiveModal={handlerModal}
        activeModal={activeModal}
      />
    </>
  );
}
