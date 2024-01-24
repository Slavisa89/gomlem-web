import React, { useState } from "react";
import FadeListItem from "@animation/FadeListItem";
import StatusBox from "@components/StatusBox";
import ModalHelpRequests from "@modals/ModalHelpRequests";
import ModalHelpRequestSettings from "@modals/ModalHelpRequestSettings";
import useHelpRequestsInfo from "@hooks/useHelpRequestsInfo";

export default function ContainerBoxs() {
  // Get Data Boxes
  const {
    helpRequestsInfoPending,
    helpRequestsInfoData,
    helpRequestsInfoError,
    // helpRequestsInfoMessageError,
  } = useHelpRequestsInfo();

  const [activeModalSetting, setActiveModalSetting] = useState(false);
  function handlerActiveModalSetting(nameModal) {
    setActiveModalSetting(nameModal);
  }
  // State Modal
  const [activeModalActiveEmergency, setActiveModalActiveEmergency] =
    useState(false);
  function handlerActiveModalActiveEmergency(id) {
    if (id) setActiveModalActiveEmergency({ type: "byUserId", id: 1068 });
    else setActiveModalActiveEmergency(false);
  }

  return (
    <div className="flex gap-[26px]">
      <FadeListItem time={2} y={-100}>
        <StatusBox
          typeBox="boxTypeThree"
          color="error"
          icon="error2"
          title="Active Emergency Requests"
          isPending={helpRequestsInfoPending || helpRequestsInfoError}
          number={helpRequestsInfoData?.activeEmergencyRequests}
          // fnView={handlerActiveModalActiveEmergency}
          fnView={() => {
            alert("help Request Emergency");
          }}
          typeModal="ActiveEmergencyRequests"
        />
      </FadeListItem>
      <FadeListItem time={4} y={-100}>
        <StatusBox
          typeBox="boxTypeOne"
          color="green"
          icon="helpRequest"
          title="Total Help Requests"
          number={helpRequestsInfoData?.totalHelpRequests}
          profit={helpRequestsInfoData?.sinceLastMonth}
          isPending={helpRequestsInfoPending || helpRequestsInfoError}
          lastSince="Since last month"
        />
      </FadeListItem>
      <FadeListItem time={6} y={-100}>
        <StatusBox
          typeBox="boxTypeThree"
          color="orange"
          icon="setting"
          title="Help Request Settings"
          isPending={helpRequestsInfoPending || helpRequestsInfoError}
          fnViewTitle="View And Edit"
          fnView={handlerActiveModalSetting}
          typeModal="Help Request Settings"
        />
      </FadeListItem>
      <ModalHelpRequests
        handlerActiveModal={handlerActiveModalActiveEmergency}
        activeModal={activeModalActiveEmergency}
      />
      <ModalHelpRequestSettings
        handlerActiveModal={handlerActiveModalSetting}
        activeModal={activeModalSetting}
      />
    </div>
  );
}
