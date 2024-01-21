import AnimBox from "@animation/AnimBox";
import ModalLastKnownLocation from "./ModalLastKnownLocation";
import AnimBox2 from "@animation/AnimBox2";

export default function ModalContainer({
  handlerActiveModal,
  activeModalId,
}) {
  return (
    <>
      <AnimBox
        x={150}
        time={4}
        isOpen={activeModalId}
        className="fixed bottom-14 shadow-boo-1 right-[770px] z-20 rounded-[20px]"
      >
        <ModalLastKnownLocation id={activeModalId} handlerActiveModal={handlerActiveModal} />
      </AnimBox>
      <AnimBox2 time={8} isOpen={activeModalId}>
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-slate-800/10 blur-lg z-[2]"
          onClick={() => handlerActiveModal(false)}
        ></div>
      </AnimBox2>
    </>
  );
}
