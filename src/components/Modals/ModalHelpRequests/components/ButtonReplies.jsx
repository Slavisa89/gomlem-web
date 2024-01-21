import React, { useState } from "react";
import Icon from "@components/Icon";
import { twMerge } from "tailwind-merge";
import ModalReply from "@modals/ModalReply";


export default function ButtonReplies({ data }) {
  if (data?.length == 0) return <span></span>
  const [activeModalReply, setActiveModalReply] = useState(false);

  function handlerActiveModalReply(data = false) {
    setActiveModalReply(data);
  }
  return (
    <>
      <button
        className={twMerge(
          "flex text-xs font-semibold items-center gap-2",
          activeModalReply && "underline"
        )}
        disabled={!data?.length}
        onClick={() => handlerActiveModalReply(data)}
      >
        <Icon name="reply" className="w-[18px] h-[18px]" />
        <div>
          {data?.length
            ? activeModalReply
              ? "Hide Replies"
              : `View ${data?.length} Replies`
            : "No Reply"}
        </div>
      </button>
      <div className="absolute">
        <ModalReply
          handlerActiveModal={handlerActiveModalReply}
          activeModal={activeModalReply}
        />
      </div>
    </>
  );
}
