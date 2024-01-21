import React, { useState } from "react";
import FadeListItem from "@animation/FadeListItem";
import StatusBox from "@components/StatusBox";
import ModalTotalTravelers from "@modals/ModalTotalTravelers";
import ModalTotalHelpers from "@modals/ModalTotalHelpers";

export default function ContainerBoxs() {
  const [activeModal, setActiveModal] = useState(false);
  function handlerModal(show) {
    setActiveModal(show);
  }

  return (
    <>
      <div className="flex gap-[26px]">
        <FadeListItem time={2} y={-100}>
          <StatusBox
            typeBox="boxTypeOne"
            color="orange"
            icon="persons"
            title="Total Users"
            number="$5,000"
            lastSince="Since last month"
            profit={17}
          />
        </FadeListItem>
        <FadeListItem time={4} y={-100}>
          <StatusBox
            typeBox="boxTypeFour"
            color="green"
            icon="bag"
            title="Total Travelers"
            isPending={false}
            number="2,400"
            fnModal={handlerModal}
            lastSince="Since last month"
            profit={14}
          />
        </FadeListItem>
        <FadeListItem time={4} y={-100}>
          <StatusBox
            typeBox="boxTypeFour"
            color="blue"
            icon="home2"
            title="Total Helpers"
            isPending={false}
            number="2,400"
            fnModal={handlerModal}
            lastSince="Since last month"
            profit={14}
          />
        </FadeListItem>
      </div>
      <ModalTotalTravelers
        activeModal={activeModal == "Total Travelers"}
        handlerActiveModal={handlerModal}
      />
      <ModalTotalHelpers
        activeModal={activeModal == "Total Helpers"}
        handlerActiveModal={handlerModal}
      />
    </>
  );
}
