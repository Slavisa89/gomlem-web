import React, { useState } from "react";
import Icon from "@components/Icon";
import ModalSendMessageInApp from "@components/SendMessage/ModalSendMessageInApp";
import ModalSendMessageEmail from "@components/SendMessage/ModalSendMessageEmail";
export default function ButtonsSendMessage() {
  const [activeModal, setActiveModal] = useState(false);
  function handlerActiveModal(nameModal) {
    if (!activeModal) {
      setActiveModal(nameModal);
      return;
    }
    if (activeModal && nameModal == activeModal) {
      setActiveModal(false);
      return;
    }
    if (activeModal && nameModal != activeModal) {
      setActiveModal(nameModal);
      return;
    }
  }
  return (
    <section className="flex gap-[22px] mb-[25px]">
      <button
        onClick={() => handlerActiveModal("sendMessageEmail")}
        className="flex _btn-small gap-2 bg-text-softGary hover:bg-text-softGary/90 h-auto text-white text-xs py-[10px] rounded-full"
      >
        <Icon name="message" className="w-[14px] h-[14px] svg-white" />
        <span>Send Mass Email</span>
      </button>
      <button
        onClick={() => handlerActiveModal("sendMessageInApp")}
        className="flex _btn-small gap-2 bg-text-softGary hover:bg-text-softGary/90 h-auto text-white text-xs py-[10px] rounded-full"
      >
        <Icon name="chat" className="w-[14px] h-[14px] svg-white" />
        <span>Send Mass In App Message</span>
      </button>
      <ModalSendMessageEmail handlerActiveModal={handlerActiveModal} activeModal={activeModal} />
      <ModalSendMessageInApp handlerActiveModal={handlerActiveModal} activeModal={activeModal} />
    </section>
  );
}
