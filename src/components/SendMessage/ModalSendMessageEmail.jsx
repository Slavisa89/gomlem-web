import { useState } from "react";
import CloseButton from "@components/CloseButton";
import ExpandButton from "@components/ExpandButton";
import AnimBox from "@animation/AnimBox";
import ButtonInsertPreMadeMessage from "./ButtonInsertPreMadeMessage";
import { twMerge } from "tailwind-merge";
import Profile from "@dashboard/(Customers)/components/Profile/Profile";
import FormSendEmail from "./FormSendEmail";
import FormSendEmailSelectedUser from "./FormSendEmailSelectedUser";

export default function ModalSendMessageEmail({
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
        isOpen={activeModal == "sendMessageEmail"}
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
          <div className="flex justify-between py-3 pl-[56px] pr-[17px] rounded-t-3xl text-white items-center bg-text">
            <span>Send Email</span>
            <div className="flex gap-2">
              {sendTo ? null : (
                <ExpandButton expandFn={handlerFullPage} isFull={fullPage} />
              )}
              <CloseButton closeFn={handlerActiveModal} />
            </div>
          </div>
          <div className="flex flex-col px-[30px] pb-[26px]">
            <div>
              <div className="flex justify-between items-center pl-[26px] pt-[22px] pb-3 border-b border-light-100">
                <Profile />
                <ButtonInsertPreMadeMessage />
              </div>
            </div>
            <div className="grow">
              {sendTo ?
              <FormSendEmailSelectedUser sendTo={sendTo} />
              :
              <FormSendEmail />
              }
            </div>
          </div>
        </div>
      </AnimBox>
    </>
  );
}
