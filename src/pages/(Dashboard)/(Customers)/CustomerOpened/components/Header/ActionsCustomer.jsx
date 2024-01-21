import React, { useState } from "react";
import Icon from "@components/Icon";
import ModalEmergencyContact from "@modals/ModalEmergencyContact";
import ModalBlockUser from "@modals/ModalBlockUser";
import ModalSendMessageEmail from "@components/SendMessage/ModalSendMessageEmail";
import ModalSendMessageInApp from "@components/SendMessage/ModalSendMessageInApp";

export default function ActionsCustomer({
  data,
  isPending,
  isError,
}) {
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
    <div className="bg-white pt-[7px] pb-[15px] flex gap-6 items-center">
      <div className="flex gap-[21px] ml-[171px] ">
        <button
          disabled={isPending || isError}
          className="flex gap-2 _btn _btn-small"
          onClick={() => handlerActiveModal("sendMessageEmail", data)}
        >
          <Icon name="message" className="w-[14px] h-[14px] svg-grey-soft" />
          <span className="text-text-softGary">Email</span>
        </button>
        <button
          disabled={isPending || isError}
          className="flex gap-2 _btn _btn-small"
          onClick={() => handlerActiveModal("sendMessageInApp")}
        >
          <Icon name="chat" className="w-[14px] h-[14px] svg-grey-soft" />
          <span className="text-text-softGary">Send In App Message</span>
        </button>
        <button
          disabled={isPending || isError}
          className="_btn-error _btn-error-solid _btn-small"
          onClick={() => handlerActiveModal(["Block User",`${data?.blocked}`])}
        >
          <Icon
            name={isPending ? "loading" : "error"}
            className="w-[14px] h-[14px]"
          />
          <span>{data?.blocked ? "Unblock User" : "Block User"}</span>
        </button>
      </div>
      <div className="vl-13 bg-light-100"></div>
      <button
        disabled={isPending || isError}
        className="_btn-error _btn-error-outline _btn-small"
        onClick={() => handlerActiveModal("Emergency Contacts")}
      >
        <span>Emergency Contacts</span>
        <Icon name="arrow" className="w-[14px] h-[14px] svg-red" />
      </button>
      <ModalEmergencyContact
        handlerActiveModal={handlerActiveModal}
        activeModal={activeModal}
      />
      <ModalBlockUser
        handlerActiveModal={handlerActiveModal}
        activeModal={activeModal[0]}
        isBlock={activeModal[1]}
      />
      {isPending || isError ? null : (
        <>
          <ModalSendMessageEmail
            sendTo={data}
            handlerActiveModal={handlerActiveModal}
            activeModal={activeModal}
          />
          <ModalSendMessageInApp
            sendTo={data}
            handlerActiveModal={handlerActiveModal}
            activeModal={activeModal}
          />
        </>
      )}
    </div>
  );
}
