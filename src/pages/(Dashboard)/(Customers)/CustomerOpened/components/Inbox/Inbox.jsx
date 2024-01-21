import React, { useState } from "react";
import Icon from "@components/Icon";
import ModalInbox from "@modals/ModalInbox";
import UserInbox from "./UserInbox";
import useCustomerInbox from "@hooks/useCustomerInbox";
import { useParams } from "react-router-dom";
import SkeletonLoading from "./SkeletonLoading";

export default function Inbox() {
  const [activeModal, setActiveModal] = useState();
  function handlerActiveModal(idChat) {
    setActiveModal(idChat);
  }
  const { userId } = useParams();
  const {
    customerInboxData,
    customerInboxPending,
    customerInboxError,
    // customerInboxMessageError,
  } = useCustomerInbox(userId, { Page: 1, Size: 5 });
  return (
    <div className="pt-9 w-[300px] px-5 pb-2 bg-white rounded-2xl shadow-boo-2 mt-12">
      <div className="flex justify-between">
        <span className="font-semibold">Inbox</span>
        <button
          className="flex items-center gap-3"
          onClick={() => handlerActiveModal("Inbox")}
          disabled={
            customerInboxPending ||
            customerInboxError ||
            customerInboxData.length == 0
          }
        >
          <span className="text-sm font-semibold text-text-lighter">
            View All
          </span>
          <Icon name="arrow" className="w-[18px] h-[14px]" />
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-8">
        {customerInboxPending || customerInboxError ? (
          <SkeletonLoading />
        ) : (
          <>
            <UserInbox
              data={customerInboxData}
              handlerActiveModal={handlerActiveModal}
            />
          </>
        )}
        {!customerInboxPending &&
          !customerInboxError &&
          customerInboxData?.length > 0 && (
            <ModalInbox
              activeModal={activeModal}
              handlerActiveModal={handlerActiveModal}
            />
          )}
      </div>
    </div>
  );
}
