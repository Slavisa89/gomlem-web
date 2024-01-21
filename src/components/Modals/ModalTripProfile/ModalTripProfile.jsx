import Label from "@components/Label";
import Icon from "@components/Icon";
import { formatDate } from "@/script/script";
import Img from "@components/Img";
import LoadingSkeleton from "./LoadingSkeleton";
import { twMerge } from "tailwind-merge";
import useTripDetails from "@hooks/useTripDetails";

export default function ModalTripProfile({
  tripId,
  userData,
  removePending,
  handlerRemoveTrip,
}) {
  const { tripDetailsPending, tripDetailsError, tripDetailsData } =
    useTripDetails(tripId);

  if (tripDetailsPending || tripDetailsError)
    return <LoadingSkeleton mode={userData} />;

  return (
    <div
      className={twMerge(
        "py-10 px-7 bg-white w-[421px] rounded-b-[20px] h-[526px] overflow-y-scroll",
        userData && "pt-5"
      )}
    >
      <div className="relative mb-[22px]">
        {userData && (
          <div className="flex items-center gap-2 mb-[22px]">
            <Img
              src={userData.media}
              className="w-[50px] h-[50px] rounded-full"
            />
            <span className="text-sm font-medium">{userData.fullName}</span>
          </div>
        )}
        <div className="w-[368px] h-[230px] rounded-[20px] relative overflow-hidden">
          <img
            src={tripDetailsData.city.media}
            className="absolute top-0 left-0 w-full min-h-[230px]"
          />
        </div>
        <span className="absolute bottom-[30px] left-5 text-white text-[25px] font-semibold">
          {tripDetailsData.city.name}
        </span>
      </div>
      <Label size="big" theme="blueBlack" className="w-full mb-[22px]">
        <Icon name="calender" className="w-[14px] h-[14px] svg-base" />
        <span>
          {formatDate(tripDetailsData.from)} - {formatDate(tripDetailsData.to)}
        </span>
      </Label>
      <div className="flex flex-col">
        <p className="font-semibold text-lg mb-[13px]">
          Areas Willing To Help With
        </p>
        {/* Static */}
        <Label
          theme="blueBlack"
          size="big"
          className="flex mb-2 font-semibold max-w-max"
        >
          🕍 Minyan
        </Label>
        {/* Static */}
        <p className="text-xs border-l border-text-softGary pl-2 font-normal mb-[17px]">
          In town for a little while. Would love to make a shachris minyan every
          morning at 8.
        </p>
        <div className="flex gap-3 mb-[50px]">
          {tripDetailsData.expertises.map((expertise, i) => {
            return (
              <Label
                theme="blueBlack"
                size="big"
                className="flex items-center gap-2 mb-2 font-semibold"
                key={i}
              >
                <img
                  src={`data:image/gif;base64,${expertise.media}`}
                  className="w-4 h-4"
                  alt=""
                />
                <span>{expertise.name}</span>
              </Label>
            );
          })}
        </div>
        {!userData && (
          <div className="flex self-end gap-3">
            <button
              className="p-[10px] rounded-xl border border-light-100"
              onClick={() => handlerRemoveTrip()}
            >
              <Icon name="trash" />
            </button>
            <button className="p-[10px] rounded-xl border border-light-100">
              <Icon name="chat" />
            </button>
          </div>
        )}
      </div>
      {removePending ? (
        <div className="absolute w-full h-full top-0 right-0 flex justify-center items-center bg-slate-400/50 rounded-[20px]">
          <Icon name="loading" className="w-14 h-14" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
