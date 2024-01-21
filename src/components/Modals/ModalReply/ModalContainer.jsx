import AnimBox from "@animation/AnimBox";
import ModalReply from "./ModalReply";
import AnimBox2 from "@animation/AnimBox2";

export default function ModalContainer({
  handlerActiveModal,
  activeModal,
}) {
  return (
    <>
      <AnimBox
        x={100}
        time={4}
        isOpen={activeModal}
        className="fixed bottom-14 shadow-boo-1 right-[770px] z-20 rounded-[20px]"
      >
        <ModalReply data={activeModal} handlerActiveModal={handlerActiveModal} />
      </AnimBox>
      <AnimBox2 time={8} isOpen={activeModal}>
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-slate-800/10 blur-lg z-[2]"
          onClick={() => handlerActiveModal(false)}
        ></div>
      </AnimBox2>
    </>
  );
}
