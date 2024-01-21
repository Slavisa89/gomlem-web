import Icon from "@components/Icon";
import {
  EmergencyMedium,
  HighMedium,
  MediumMedium,
  LowMedium,
} from "@components/Label/Label";
import Toggle from "@components/Toggle/Toggle";
import { useState } from "react";
import ModalCreateMessageTemplate from "@modals/ModalCreateMessageTemplate";

export default function ModalHelpRequestSettings() {
  const [activeModal, setActiveModal] = useState({
    modalName: false,
    category: "Emergency",
  });
  function handlerActiveModal({ modalName, titleTemplate, category }) {
    if (!modalName) {
      setActiveModal({
        modalName: false,
        category: "Emergency",
      });
      return;
    }
    setActiveModal({ modalName, titleTemplate, category });
  }

  return (
    <div className="px-[22px] py-6 pl-9 bg-white w-[393px] h-[550px] rounded-b-[20px] overflow-y-scroll">
      <ul className="flex flex-col gap-5 text-sm font-normal">
        <li>
          <EmergencyMedium />
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[230px]">Automatically Send User Message</span>
              <Toggle>
                <input type="checkbox" className="sr-only peer" />
              </Toggle>
            </div>
            <button
              className="flex gap-[10px] rounded-[20px] mt-[14px] py-[10px] px-[14px] items-center text-[10px] font-medium bg-light-200 text-text-lighter"
              onClick={() =>
                handlerActiveModal({
                  modalName: "Modal Create Message Template",
                  category: "Emergency",
                })
              }
            >
              <Icon name="add" className="w-[10px] h-[10px]" />
              <span>Create Message Template</span>
            </button>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[230px]">
                Automatically Message Emergency Contacts
              </span>
              <Toggle/>
            </div>
            <button
              className="flex gap-[10px] rounded-[20px] mt-[14px] py-[10px] px-[14px] items-center text-[10px] font-medium bg-light-200 text-text-lighter"
              onClick={() =>
                handlerActiveModal({
                  modalName: "Modal Create Message Template",
                  category: "Emergency",
                })
              }
            >
              <Icon name="add" className="w-[10px] h-[10px]" />
              <span>Create Message Templadte</span>
            </button>
          </div>
        </li>
        <hr className="text-light-100" />
        <li>
          <HighMedium />
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[230px]">Automatically Send User Message</span>
              <Toggle/>
            </div>
            <div className="flex items-center gap-2 mt-[14px]">
              <button className="p-[10px] rounded-full text-white text-[10px] font-normal bg-blue">
                High Message
              </button>
              <button
                className="flex gap-[10px] rounded-[20px] py-[10px] px-[14px] items-center text-[10px] font-medium bg-light-200 text-text-lighter"
                onClick={() =>
                  handlerActiveModal({
                    modalName: "Modal Create Message Template",
                    category: "High",
                  })
                }
              >
                <Icon name="add" className="w-[10px] h-[10px]" />
                <span>Create Message Template</span>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[230px]">
                Automatically Message Emergency Contacts
              </span>
              <Toggle/>
            </div>
            <button
              className="flex gap-[10px] rounded-[20px] mt-[14px] py-[10px] px-[14px] items-center text-[10px] font-medium bg-light-200 text-text-lighter"
              onClick={() =>
                handlerActiveModal({
                  modalName: "Modal Create Message Template",
                  category: "High",
                })
              }
            >
              <Icon name="add" className="w-[10px] h-[10px]" />
              <span>Create Message Template</span>
            </button>
          </div>
        </li>
        <hr className="text-light-100" />
        <li>
          <MediumMedium />
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[230px]">Automatically Send User Message</span>
              <Toggle/>
            </div>
            <div className="flex items-center gap-2 mt-[14px]">
              <button className="p-[10px] rounded-full text-white text-[10px] font-normal bg-blue">
                Medium Message
              </button>
              <button
                className="flex gap-[10px] rounded-[20px] py-[10px] px-[14px] items-center text-[10px] font-medium bg-light-200 text-text-lighter"
                onClick={() =>
                  handlerActiveModal({
                    modalName: "Modal Create Message Template",
                    category: "Medium",
                  })
                }
              >
                <Icon name="add" className="w-[10px] h-[10px]" />
                <span>Create Message Template</span>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[230px]">
                Automatically Message Emergency Contacts
              </span>
              <Toggle/>
            </div>
            <button
              className="flex gap-[10px] rounded-[20px] mt-[14px] py-[10px] px-[14px] items-center text-[10px] font-medium bg-light-200 text-text-lighter"
              onClick={() =>
                handlerActiveModal({
                  modalName: "Modal Create Message Template",
                  category: "Medium",
                })
              }
            >
              <Icon name="add" className="w-[10px] h-[10px]" />
              <span>Create Message Template</span>
            </button>
          </div>
        </li>
        <hr className="text-light-100" />
        <li>
          <LowMedium />
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[230px]">Automatically Send User Message</span>
              <Toggle/>
            </div>
            <div className="flex items-center gap-2 mt-[14px]">
              <button
                className="flex gap-[10px] rounded-[20px] py-[10px] px-[14px] items-center text-[10px] font-medium bg-light-200 text-text-lighter"
                onClick={() =>
                  handlerActiveModal({
                    modalName: "Modal Create Message Template",
                    category: "Low",
                  })
                }
              >
                <Icon name="add" className="w-[10px] h-[10px]" />
                <span>Create Message Template</span>
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[230px]">
                Automatically Message Emergency Contacts
              </span>
              <Toggle/>
            </div>
            <button
              className="flex gap-[10px] rounded-[20px] mt-[14px] py-[10px] px-[14px] items-center text-[10px] font-medium bg-light-200 text-text-lighter"
              onClick={() =>
                handlerActiveModal({
                  modalName: "Modal Create Message Template",
                  category: "Low",
                })
              }
            >
              <Icon name="add" className="w-[10px] h-[10px]" />
              <span>Create Message Template</span>
            </button>
          </div>
        </li>
      </ul>

      <ModalCreateMessageTemplate
        handlerActiveModal={handlerActiveModal}
        activeModal={activeModal}
      />
    </div>
  );
}
