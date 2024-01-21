import AnimBox from "@animation/AnimBox";
import AnimBox2 from "@animation/AnimBox2";
import ModalTotalTravelers from "./ModalTotalTravelers";
import HeaderModal from "./HeaderModal";

export default function ModalContainer({ handlerActiveModal, activeModal }) {
  return (
    <>
      <AnimBox
        y={200}
        time={8}
        isOpen={activeModal}
        className="fixed bottom-14 shadow-boo-1 right-[70px] z-20 rounded-[20px]"
      >
        <div className="flex flex-col font-semibold bg-white rounded-3xl w-[410px]">
          <HeaderModal handlerActiveModal={handlerActiveModal}/>
          <ModalTotalTravelers
            tripId={activeModal}
            handlerActiveModal={handlerActiveModal}
          />
        </div>
      </AnimBox>

      <AnimBox2 time={8} isOpen={activeModal}>
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-slate-800/10 blur-lg z-1"
          onClick={() => handlerActiveModal(false)}
        ></div>
      </AnimBox2>
    </>
  );
}
