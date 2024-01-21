import CloseButton from "@components/CloseButton";
import ExpandButton from "@components/ExpandButton";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import AnimBox from "@animation/AnimBox";
import FormSendMessageInApp from "./FormSendMessageInApp";
import FormSendMessageInAppSelectedUser from "./FormSendMessageInAppSelectedUser";

export default function ModalSendMessageInApp({
  handlerActiveModal,
  activeModal,
  sendTo,
}) {
  const [fullPage, setFullPage] = useState(false);
  function handlerFullPage() {
    setFullPage(!fullPage);
  }
  return (
    <>
      <AnimBox
        y={200}
        time={8}
        isOpen={activeModal == "sendMessageInApp"}
        className={twMerge(
          "fixed bottom-14 shadow-boo-1 right-[70px] z-20 rounded-[20px] transition-all",
          fullPage && " right-0 bottom-0  duration-300"
        )}
      >
        <div
          className={twMerge(
            "flex bg-white rounded-3xl w-[643px] flex-col font-semibold transition-all duration-300",
            fullPage && "w-screen h-screen delay-300 "
          )}
        >
          <div className="flex justify-between py-3 pl-[34px] pr-[17px] rounded-t-3xl text-white items-center bg-text w-full">
            <span>Send In App Message</span>
            <div className="flex gap-2">
              {sendTo ? (
                ""
              ) : (
                <ExpandButton expandFn={handlerFullPage} isFull={fullPage} />
              )}
              <CloseButton closeFn={handlerActiveModal} />
            </div>
          </div>
          {sendTo ? (
            <FormSendMessageInAppSelectedUser sendTo={sendTo} />
          ) : (
            <FormSendMessageInApp />
          )}
        </div>
      </AnimBox>
    </>
  );
}
