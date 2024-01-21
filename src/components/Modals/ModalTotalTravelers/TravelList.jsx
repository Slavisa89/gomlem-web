import React, { useState } from "react";
import Img from "@components/Img";
import Icon from "@components/Icon";
import FadeListItem from "@animation/FadeListItem";
import ModalTripProfile from "@modals/ModalTripProfile/ModalContainerLocation";

export default function TravelList({ data }) {
  const [activeModal, setActiveModal] = useState({ cityId: "", userData: "" });
  function handlerModal(cityId, userData) {
    if (!cityId || !userData) {
      setActiveModal(false);
      return;
    }
    setActiveModal({ cityId, userData });
  }
  return (
    <div className="overflow-y-scroll h-[410px] w-full mt-4 hiddenScroll">
      <div className="flex flex-col justify-center w-full mt-6">
        <ListProfile data={data} handlerModal={handlerModal} />
      </div>
      <ModalTripProfile
        handlerActiveModal={handlerModal}
        activeModal={activeModal.cityId}
        userData={activeModal.userData}
      />
    </div>
  );
}

const ListProfile = ({ data, handlerModal }) =>
  data.map(({ fullName, startDate, endDate, cityId, media }, i) => {
    return (
      <FadeListItem x={-100} time={1 * i} key={i}>
        <div>
          <div className="flex gap-2">
            <Img
              src={media}
              alt=""
              className="w-[50px] h-[50px] rounded-full"
            />
            <div className="flex flex-col gap-2 grow">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{fullName}</span>
                <button
                  className="flex items-center gap-[6px] text-xs font-semibold text-text-lighter"
                  onClick={() => handlerModal(cityId, { fullName, media })}
                >
                  <span>View Trip Profile</span>
                  <Icon name="arrow" className="w-3 h-[10px]" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <Icon
                  name="calender"
                  className="w-[14px] h-[14px] svg-grey-soft"
                  alt=""
                />
                <span className="text-xs font-semibold text-text-softGary">
                  {startDate} - {endDate}
                </span>
              </div>
            </div>
          </div>
          {data.length == i + 1 ? "" : <hr className="my-5 text-light-100 " />}
        </div>
      </FadeListItem>
    );
  });
