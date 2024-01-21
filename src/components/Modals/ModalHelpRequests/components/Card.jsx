import RequestDetails from "./RequestDetails";
import LocationDetails from "./LocationDetails";
import ContactMethods from "./ContactMethods";
import Replay from "./Replay";
import ButtonEmergency from "./ButtonEmergency";
import ButtonReplies from "./ButtonReplies";
import RemoveHelpRequest from "./RemoveHelpRequest";
import Profile from "./Profile";
import MessageUser from "./MessageUser";
import StatusBar from "./StatusBar";

export default function CardArray({ data, type, handlerActiveModal }) {
  return (
    <li className="flex flex-col  gap-[18px]">
      {type != "getHelpById" && (
        <Profile media={data?.media} fullName={data?.fullName} />
      )}
      <StatusBar
        data={{
          expertiseName: data?.expertiseName,
          active: data?.active,
          urgencyLevel: data?.urgencyLevel,
          from: data?.from,
          to: data?.to,
          expertiseMedia: data?.expertiseMedia,
        }}
      />
      <RequestDetails data={data?.description} />
      <LocationDetails data={data?.locationInfo} />
      <ContactMethods data={data?.contactMethods} />
      <div className="pt-[88px] flex justify-between">
        <ButtonReplies data={data?.replies} />

        <div className="flex gap-[10px]">
          <RemoveHelpRequest
            id={data?.id}
            handlerActiveModal={handlerActiveModal}
          />
          <MessageUser id={data?.id} />
          <Replay id={data?.id} />
          {data?.urgencyLevel == "Emergency" && <ButtonEmergency />}
        </div>
      </div>
    </li>
  );
}
