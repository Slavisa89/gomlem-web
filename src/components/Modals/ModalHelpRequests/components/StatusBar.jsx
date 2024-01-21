import Label from "@components/Label/Label";
import Icon from "@components/Icon";
import { convertDateFormat, getTime } from "@/script/script";
import Img from "@components/Img";
import {
  EmergencyBig,
  LowBig,
  HighBig,
  MediumBig,
} from "@components/Label/Label";

export default function StatusBar({ data }) {
  const { expertiseName, active, urgencyLevel, from, to, expertiseMedia } =
    data;
  const Labels = {
    Emergency: EmergencyBig,
    Low: LowBig,
    High: HighBig,
    Medium: MediumBig,
  };
  const CategoryElm = Labels[urgencyLevel];

  return (
    <div>
      <div className="mb-2">
        {active ? (
          <Label theme="green" size="small">
            Active
          </Label>
        ) : (
          <Label theme="red" size="small">
            Inactive
          </Label>
        )}
      </div>
      <div className="flex gap-2">
        <Label
          size="big"
          theme="blueBlack"
          className="flex items-center justify-center gap-2"
        >
          {expertiseMedia ? (
            <Img src={expertiseMedia} byte={true} className="w-4 h-4" />
          ) : (
            <Icon name="error" className="w-4 h-4 svg-blue" />
          )}
          <span>{expertiseName}</span>
        </Label>
        <Label size="border" theme="border">
          <Icon name="calender" className="w-[14px] h-[14px] svg-base" />
          <span className="font-normal">
            {convertDateFormat(from)} - {convertDateFormat(to)}
          </span>
        </Label>
        <Label size="border" theme="border">
          <Icon name="clock" className="w-[14px] h-[14px] svg-base" />
          <span className="font-normal">{getTime(to)}</span>
        </Label>
        <CategoryElm />
      </div>
    </div>
  );
}
