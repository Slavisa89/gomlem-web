import React, { useState } from "react";
import Img from "@components/Img";
import Icon from "@components/Icon";
import FadeListItem from "@animation/FadeListItem";
import ModalHelpFromHomeProfiles from "@modals/ModalHelpFromHomeProfiles/ModalContainerLocation";

export default function TravelList({ data }) {
  const [activeModal, setActiveModal] = useState({ userId: "", userData: "" });
  function handlerModal(userId, userData) {
    if (!userId || !userData) {
      setActiveModal(false);
      return;
    }
    setActiveModal({ userId, userData });
  }
  return (
    <div className="overflow-y-scroll h-[410px] w-full hiddenScroll">
      <div className="flex flex-col justify-center w-full mt-6">
        <ListProfile data={data} handlerModal={handlerModal} />
      </div>
      <ModalHelpFromHomeProfiles userData={activeModal.userData} activeModal={activeModal.userId} handlerActiveModal={handlerModal}/>
    </div>
  );
}

const ListProfile = ({ data, handlerModal }) =>
  data.map(({ fullName, userId, media }, i) => {
    return (
      <FadeListItem x={-100} time={1 * i} key={i}>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-2">
            <Img
              src={media}
              alt=""
              className="w-[50px] h-[50px] rounded-full"
            />
            <span className="text-sm font-medium">{fullName}</span>
          </div>
          <button
            className="flex items-center gap-2"
            onClick={() => handlerModal(userId, { fullName, media })}
          >
            <span className="text-xs font-semibold text-text-lighter">
              View Profile
            </span>
            <Icon name="arrow" className="w-3 h-[10px]" alt="" />
          </button>
        </div>
        {i + 1 == data.length ? "" : <hr className="my-5 text-light-100" />}
      </FadeListItem>
    );
  });
