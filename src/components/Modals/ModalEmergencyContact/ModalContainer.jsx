import CloseButton from "@components/CloseButton";
import AnimBox from "@animation/AnimBox";
import ModalEmergencyContact from "./ModalEmergencyContact";
import AnimBox2 from "@animation/AnimBox2";

export default function ModalContainer({ handlerActiveModal, activeModal }) {
  return (
    <>
      <AnimBox
        y={200}
        time={8}
        isOpen={activeModal == "Emergency Contacts"}
        className="fixed bottom-14 shadow-boo-1 right-[70px] z-20 rounded-[20px]"
      >
        <div className="flex flex-col font-semibold bg-white rounded-3xl">
          <div className="flex justify-between py-3 pl-[34px] pr-[17px] rounded-t-3xl text-white items-center bg-text w-full">
            <span>Emergency Contacts</span>
            <div className="flex gap-2">
              <CloseButton closeFn={handlerActiveModal} />
            </div>
          </div>
          <ModalEmergencyContact />
        </div>
      </AnimBox>
      <AnimBox2 time={8} isOpen={activeModal == "Emergency Contacts"}>
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-slate-800/10 blur-lg z-1"
          onClick={() => handlerActiveModal(false)}
        ></div>
      </AnimBox2>
    </>
  );
}
