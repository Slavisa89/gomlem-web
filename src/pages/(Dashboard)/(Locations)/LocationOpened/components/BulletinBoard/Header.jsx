import React, { useState } from "react";
import ExpandButton from "@components/ExpandButton";
import ModalBulletinBoardLocationPage from "@modals/ModalBulletinBoardLocationPage";

export default function Header() {
  const [isFull, setIsFull] = useState(false);

  function handlerActiveModal() {
    setIsFull(!isFull);
  }
  return (
    <>
      <div className="py-3 pr-[14px] pl-[26px]  rounded-t-[20px] bg-text flex justify-between items-center">
        <span className="text-lg font-semibold text-white">Bulletin Board</span>
        <ExpandButton expandFn={handlerActiveModal} isFull={isFull} />
      </div>
      <ModalBulletinBoardLocationPage
        handlerActiveModal={handlerActiveModal}
        activeModal={isFull}
      />
    </>
  );
}
