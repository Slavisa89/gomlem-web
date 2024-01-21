import React, { useState } from "react";
import Icon from "@components/Icon";
import ModalAddLocation from "@modals/ModalAddLocation";
export default function Header() {
  const [activeModalAddCity, setActiveModalAddCity] = useState(false);
  function handlerModalEditCity(show) {
    setActiveModalAddCity(show);
  }
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="text-[28px] font-semibold">Shuls</span>
          <span className="text-sm text-text-softGary">(100 Total)</span>
        </div>
        <button
          onClick={() => handlerModalEditCity(!activeModalAddCity)}
          className="px-12 py-3 bg-text-softGary rounded-[10px] items-center text-white text-xs flex gap-2"
        >
          <Icon name="add" className=" svg-white w-[14px] h-[14px]" />
          <span>Add Location</span>
        </button>
      </div>
      <ModalAddLocation
        handlerActiveModal={handlerModalEditCity}
        activeModal={activeModalAddCity}
      />
    </>
  );
}
