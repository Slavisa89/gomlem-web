import Label from "@components/Label";
import Icon from "@components/Icon";
import { formatDate, getTime } from "@/script/script";
import {
  EmergencyBig,
  LowBig,
  HighBig,
  MediumBig,
} from "@components/Label/Label";

export default function CardHelpRequests({ data }) {
  if(data.length == 0)return<div className="flex justify-center items-center h-[578px]">Sample message for this box being empty</div>
  const Labels = {
    Emergency: EmergencyBig,
    Low: LowBig,
    High: HighBig,
    Medium: MediumBig,
  };
  const Card = () =>
    data.map(
      (
        {
          // expertiseId,
          expertiseName,
          from,
          to,
          active,
          urgencyLevel,
          description,
          locationInfo,
          contactMethods,
          replies,
        },
        i
      ) => {
        const LabelLevel = Labels[urgencyLevel];
        const listMethods = contactMethods.split(",");
        return (
          <li className="flex flex-col  gap-[18px]" key={i}>
            {active ? (
              <Label theme="green" size="small">
                Active
              </Label>
            ) : (
              <Label theme="red" size="small">
                Inactive
              </Label>
            )}

            <div className="flex gap-4">
              <Label size="big" theme="blueBlack">
                {expertiseName}
              </Label>
              <Label size="border" theme="border">
                <Icon name="calender" className="w-[14px] h-[14px] svg-base" />
                <span className="font-normal">
                  {formatDate(from)} - {formatDate(to)}
                </span>
              </Label>
              <Label size="border" theme="border">
                <Icon name="clock" className="w-[14px] h-[14px] svg-base" />
                <span className="font-normal">{getTime(to)}</span>
              </Label>
              <LabelLevel />
            </div>
            {description && (
              <div>
                <p className="text-[18px] font-semibold mb-[10px]">
                  Request Details
                </p>
                <p className="text-xs font-medium">{description}</p>
              </div>
            )}
            {locationInfo && (
              <div className="text-xs">
                <div className="flex justify-between">
                  <p className="text-[18px] font-semibold mb-[10px]">
                    Location Details
                  </p>
                  <div className="flex gap-[5px] items-center">
                    <span className="underline text-text-lighter">
                      View Last Known Location
                    </span>
                    <Icon name="arrow" className="w-[14px] h-[10px]" />
                  </div>
                </div>
                <p className="font-medium">{locationInfo}</p>
              </div>
            )}
            <div>
              <p className="text-[18px] font-semibold mb-[10px]">
                Contact Methods
              </p>
              <div className="flex text-xs text-text-softGary">
                {listMethods.map((method, i) => {
                  return (
                    <div key={i} className="flex gap-[14px]">
                      <button className="flex items-center gap-2 font-normal">
                        <Icon
                          name={method}
                          className="w-[14px] h-[14px] svg-grey-soft "
                        />
                        <span>{method}</span>
                      </button>
                      {listMethods.length > i + 1 && (
                        <div className="vl mr-[14px]"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pt-[88px] flex justify-between">
              <button
                className="flex items-center gap-2"
                disabled={!replies.length}
              >
                <Icon name="reply" className="w-[18px] h-[18px]" />
                <span className="">
                  {replies.length > 0
                    ? `View ${replies} Replies`
                    : "No Replies"}
                </span>
              </button>
              <div className="flex gap-[10px]">
                <button className="p-[10px] rounded-xl border border-light-100">
                  <Icon name="trash" />
                </button>
                <button className="p-[10px] rounded-xl border border-light-100">
                  <Icon name="chat" />
                </button>
                <button className="p-[10px] rounded-xl border border-light-100">
                  <Icon name="reply2" />
                </button>
              </div>
            </div>
            {data.length != i + 1 && (
              <hr className="text-light-100 my-[18px]" />
            )}
          </li>
        );
      }
    );
  return <Card />;
}
