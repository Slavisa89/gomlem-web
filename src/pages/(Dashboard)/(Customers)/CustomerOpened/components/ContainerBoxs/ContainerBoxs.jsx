import React, { useState } from "react";
import FadeListItem from "@animation/FadeListItem";
import StatusBox from "@components/StatusBox";
import ModalHelpFromHomeProfiles from "@modals/ModalHelpFromHomeProfiles";
import ModalHelpRequests from "@modals/ModalHelpRequests";
import { useParams } from "react-router-dom";

export default function ContainerBoxs({ data, isPending, isError }) {
  const [activeModalProfiles, setActiveModalProfiles] = useState(false);
  const { userId } = useParams();

  function handlerModalProfiles(nameModal) {
    setActiveModalProfiles(nameModal);
  }
  const [activeModalHelpRequests, setActiveModalHelpRequests] = useState(false);

  function handlerModalHelpRequests(type) {
    setActiveModalHelpRequests({ type, id: userId });
  }

  return (
    <div className="flex gap-[26px]">
      <FadeListItem time={2} y={-100}>
        <StatusBox
          typeBox="boxTypeThree"
          color="red"
          icon="dollar"
          title="Money Spent"
          number="$100"
          fnView={() => alert("Money Spent")}
          typeModal="Money Spent"
        />
      </FadeListItem>
      <FadeListItem time={4} y={-100}>
        <StatusBox
          typeBox="boxTypeThree"
          color="green"
          icon="home2"
          title="Help From Home Profiles"
          isPending={isPending || isError}
          number={data?.helpFromHomeProfiles}
          fnView={handlerModalProfiles}
          typeModal={userId}
        />
      </FadeListItem>
      <FadeListItem time={6} y={-100}>
        <StatusBox
          typeBox="boxTypeThree"
          color="blue"
          icon="helpRequest"
          title="Help Requests"
          isPending={isPending || isError}
          number={data?.totalHelpRequests}
          fnView={handlerModalHelpRequests}
          typeModal="getHelpById"
          labelCount={data?.activeHelpRequests}
        />
      </FadeListItem>
      <ModalHelpFromHomeProfiles
        handlerActiveModal={handlerModalProfiles}
        activeModal={activeModalProfiles}
      />
      <ModalHelpRequests
        handlerActiveModal={handlerModalHelpRequests}
        activeModal={activeModalHelpRequests}
      />
    </div>
  );
}
