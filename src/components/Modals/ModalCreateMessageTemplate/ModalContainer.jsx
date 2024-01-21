import CloseButton from "@components/CloseButton";
import AnimBox from "@animation/AnimBox";
import ModalCreateMessageTemplate from "./ModalCreateMessageTemplate";
import AnimBox2 from "@animation/AnimBox2";
import {
  EmergencyMedium,
  HighMedium,
  MediumMedium,
  LowMedium,
} from "@components/Label/Label";

export default function ModalContainer({ handlerActiveModal, activeModal }) {
  const labels = {
    Emergency: EmergencyMedium,
    High: HighMedium,
    Medium: MediumMedium,
    Low: LowMedium,
  };
  const Label = labels[activeModal.category];
  return (
    <>
      <AnimBox
        x={200}
        time={8}
        isOpen={activeModal.modalName == "Modal Create Message Template"}
        className="fixed bottom-14 shadow-boo-1 right-[470px] z-20 rounded-[20px]"
      >
        <div className="z-20 flex flex-col font-semibold bg-white rounded-3xl">
          <div className="flex justify-between py-3 pl-[34px] pr-[17px] rounded-t-3xl text-white items-center bg-text w-full">
            <div className="flex items-center gap-2">
              <span>Modal Create Message Template</span>
              <Label />
            </div>
            <div className="flex gap-2">
              <CloseButton closeFn={handlerActiveModal} />
            </div>
          </div>
          <ModalCreateMessageTemplate template={activeModal} />
        </div>
      </AnimBox>
      <AnimBox2 time={8} isOpen={activeModal.modalName == "Modal Create Message Template"}>
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-slate-800/10 blur-lg z-2"
          onClick={() => handlerActiveModal(false)}
        ></div>
      </AnimBox2>
    </>
  );
}
