import React, { useState } from "react";
import ModalLastKnownLocation from "@modals/ModalLastKnownLocation";
import Icon from "@components/Icon";

export default function ButtonViewLastKnownLocation({ id }) {
  const [activeModal, setActiveModal] = useState(false);
  function handlerModal(id = false) {
    setActiveModal(id);
  }
  return (
    <>
      <button
        className="flex gap-[5px] items-center"
        onClick={() => handlerModal(1)}
      >
        <span className="underline text-text-lighter">
          View Last Known Location
        </span>
        <Icon name="arrow" className="w-[14px] h-[10px]" />
      </button>
      <div className="absolute">
        <ModalLastKnownLocation
          handlerActiveModal={handlerModal}
          activeModalId={activeModal}
        />
      </div>
    </>
  );
}
