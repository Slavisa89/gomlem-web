import { useState } from "react";
import Toggle from "@components/Toggle/Toggle";
import HowOftenCheckbox from "./HowOftenCheckbox";
import Icon from "@components/Icon";
import ModalCreateReportTemplate from "@modals/ModalCreateReportTemplate";

export default function ModalAdReportsSettings() {
  const [activeModal, setActiveModal] = useState({
    modalName: false,
    category: "Emergency",
  });
  function handlerActiveModal({ modalName, titleTemplate, category }) {
    if (!modalName) {
      setActiveModal({
        modalName: false,
      });
      return;
    }
    setActiveModal({ modalName, titleTemplate, category });
  }

  return (
    <div className="px-[22px] py-6 pl-9 bg-white w-[393px] h-[550px] rounded-b-[20px] overflow-y-scroll">
      <ul className="flex flex-col gap-5 text-sm font-normal">
        <li>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[230px] font-semibold">
                Automatically Send User Ad Report
              </span>
              <Toggle>
                <input type="checkbox" className="sr-only peer" />
              </Toggle>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[242px] font-semibold">
                How often Do You Want To Send Ad Report?
              </span>
            </div>
            <span className="text-[12px] text-text-lighter">
              {"(Choose as many options as you like)"}
            </span>
          </div>
          <HowOftenCheckbox handler={(value) => console.log(">", value)} />
        </li>
        <li>
          <span className="font-semibold">Ad Report Templates</span>
          <div className="flex items-center gap-2 mt-[14px]">
            <button className="p-[10px] rounded-full text-white text-[10px] font-normal bg-blue">
              Template 1
            </button>
            <button
              className="flex gap-[10px] rounded-[20px] py-[10px] px-[14px] items-center text-[10px] font-medium bg-light-200 text-text-lighter"
              onClick={() =>
                handlerActiveModal({
                  modalName: "Modal Create Report Template",
                  category: "Medium",
                })
              }>
              <Icon name="add" className="w-[10px] h-[10px]" />
              <span>Create Report Template</span>
            </button>
          </div>
        </li>
      </ul>
      <ModalCreateReportTemplate
        handlerActiveModal={handlerActiveModal}
        activeModal={activeModal}
      />
    </div>
  );
}
