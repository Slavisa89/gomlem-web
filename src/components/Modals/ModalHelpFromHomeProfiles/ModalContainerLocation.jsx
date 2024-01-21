import CloseButton from "@components/CloseButton";
import AnimBox from "@animation/AnimBox";
import ModalHelpFromHomeProfiles from "./ModalHelpFromHomeProfiles";
import AnimBox2 from "@animation/AnimBox2";

export default function ModalContainer({
  handlerActiveModal,
  activeModal,
  userData,
}) {
  return (
    <>
      <AnimBox
        x={200}
        time={8}
        isOpen={activeModal}
        className="fixed bottom-[140px] shadow-boo-1 right-[492px] z-20 rounded-[20px]"
      >
        <div className="flex flex-col font-semibold bg-white rounded-3xl">
          <div className="flex justify-between py-3 pl-[34px] pr-[17px] rounded-t-3xl text-white items-center bg-text w-full">
            <span>Help From Home Profiles</span>
            <div className="flex gap-2">
              <CloseButton closeFn={handlerActiveModal} />
            </div>
          </div>
          <div className=" w-[550px] h-[380px] flex justify-center p-8 overflow-y-scroll">
            <ModalHelpFromHomeProfiles
              userData={userData}
              userId={activeModal}
            />
          </div>
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
