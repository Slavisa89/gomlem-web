import React, { useEffect, useRef, useState } from "react";
import ModalUserInbox from "./ModalUserInbox";
import ContainerMessage from "./ContainerMessage";
import useCustomerInbox from "@hooks/useCustomerInbox";
import { useParams } from "react-router-dom";
import SkeletonLoadingUser from "./SkeletonLoadingUser";

export default function ModalInbox({ selectedChat }) {
  const { userId } = useParams();
  const { customerInboxData, customerInboxPending, customerInboxError } =
    useCustomerInbox(userId, { Page: 1 });

  const [activeChat, setActiveId] = useState();

  // Select Active Chat
  const prevFormIdRef = useRef(selectedChat);
  useEffect(() => {
    prevFormIdRef.current = selectedChat;
  }, [selectedChat?.id]);

  if (
    selectedChat &&
    selectedChat?.id != activeChat?.id &&
    prevFormIdRef.current?.id != selectedChat?.id
  ) {
    setActiveId(selectedChat);
  }

  function handelActiveChat(id) {
    setActiveId(id);
  }

  return (
    <div className="flex pl-6 pr-8 bg-white pt-9  rounded-b-[20px]">
      <div className="flex flex-col h-[414px] overflow-y-scroll hiddenScroll gap-2">
        {!customerInboxPending && !customerInboxError ? (
          <ModalUserInbox
            usersInbox={customerInboxData}
            activeId={activeChat?.id}
            handelActiveChat={handelActiveChat}
          />
        ) : (
          <SkeletonLoadingUser />
        )}
      </div>
      <div className="mr-4 vl ml-11"></div>
      {selectedChat == "Inbox" && !activeChat? (
        <div className="flex flex-col w-[320px] items-center justify-center">
          Select an Inbox
        </div>
      ) : (
        <ContainerMessage activeChat={activeChat} />
      )}
    </div>
  );
}
