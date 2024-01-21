import React, { useState } from "react";
import Replies from "./Replies";
import CloseButton from "@components/CloseButton";
import Message from "./Message";
import Img from "@components/Img";
import Icon from "@components/Icon";

export default function ModalTripProfile({ data, handlerActiveModal }) {
  if (!data) return <></>;
  const [conversationId, setConversationId] = useState("");
  function handlerViewConversation(id) {
    const activeReply = data.filter((reply) => {
      if (id == reply.chatId) return reply;
    });
    setConversationId(activeReply[0]);
  }
  return (
    <div className="flex flex-col font-semibold transition-all duration-300 bg-white rounded-3xl">
      <div className="flex justify-between py-3 pl-[34px] pr-[17px] rounded-t-3xl text-white items-center bg-text w-full">
        {conversationId ? (
          <button
            className="w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center"
            onClick={() => handlerViewConversation("")}
          >
            <Icon name="arrow2" />
          </button>
        ) : (
          <>
            <span>Replies</span>
            <div className="flex gap-2">
              <CloseButton closeFn={handlerActiveModal} />
            </div>
          </>
        )}
      </div>
      <div className="py-10 px-7 bg-white w-[393px] pl-[78px] pt-9 pb-[67px] hiddenScroll pr-[66px] rounded-b-[20px] h-[577px] overflow-y-scroll">
        {conversationId ? (
          <div>
            <div className="flex gap-2">
              <Img
                src={conversationId.media}
                className="w-10 h-10 rounded-full"
              />
              <span className="text-sm font-semibold">
                {conversationId.fullName}
              </span>
            </div>
            <Message accountDetails={conversationId} />
          </div>
        ) : (
          <Replies
            listReply={data}
            handlerViewConversation={handlerViewConversation}
          />
        )}
      </div>
    </div>
  );
}
