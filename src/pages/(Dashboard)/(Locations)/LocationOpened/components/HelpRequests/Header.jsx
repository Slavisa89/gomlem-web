import React, { useState } from "react";
import ExpandButton from "@components/ExpandButton";
import ModalHelpRequests from "@modals/ModalHelpRequests";

export default function Header() {
  const [isFull, setIsFull] = useState(false);

  function activeModal() {
    if (isFull) {
      setIsFull(!isFull);
      return;
    }
    setIsFull({ type: "withId", id: 1068 });
  }
  return (
    <>
      <div className="py-3 pr-[14px] pl-[26px]  rounded-t-[20px] bg-text flex justify-between items-center">
        <span className="text-lg font-semibold text-white">HelpRequests</span>
        <ExpandButton expandFn={activeModal} isFull={isFull} />
      </div>
      <ModalHelpRequests
        handlerActiveModal={activeModal}
        activeModal={isFull}
      />
    </>
  );
}
