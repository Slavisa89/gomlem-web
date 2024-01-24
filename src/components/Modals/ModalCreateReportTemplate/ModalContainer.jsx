import CloseButton from "@components/CloseButton";
import AnimBox from "@animation/AnimBox";
import ModalCreateReportTemplate from "./ModalCreateReportTemplate";
import AnimBox2 from "@animation/AnimBox2";

export default function ModalContainer({ handlerActiveModal, activeModal }) {
  return (
    <>
      <AnimBox
        x={200}
        time={8}
        isOpen={activeModal.modalName == "Modal Create Report Template"}
        className="fixed bottom-14 shadow-boo-1 right-[470px] z-20 rounded-[20px]">
        <div className="z-20 flex flex-col font-semibold bg-white rounded-3xl">
          <div className="flex justify-between py-3 pl-[34px] pr-[17px] rounded-t-3xl text-white items-center bg-text w-full">
            <div className="flex items-center gap-2">
              <span>Modal Create Report Template</span>
            </div>
            <div className="flex gap-2">
              <CloseButton closeFn={handlerActiveModal} />
            </div>
          </div>
          <ModalCreateReportTemplate template={activeModal} />
        </div>
      </AnimBox>
      <AnimBox2
        time={8}
        isOpen={activeModal.modalName == "Modal Create Report Template"}>
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-slate-800/10 blur-lg z-2"
          onClick={() => handlerActiveModal(false)}></div>
      </AnimBox2>
    </>
  );
}
