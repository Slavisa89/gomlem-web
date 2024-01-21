import Icon from "@components/Icon";
import { convertDateFormat } from "@/script/script";
import FadeOnScreen from "@animation/FadeOnScreen";
import Img from "@components/Img";
import {
  EmergencyMedium,
  LowMedium,
  HighMedium,
  MediumMedium,
} from "@components/Label/Label";
export default function TRowHelpRequests({ body, handlerActiveId }) {
  const Labels = {
    Emergency: EmergencyMedium,
    Low: LowMedium,
    High: HighMedium,
    Medium: MediumMedium,
  };
  const { fullName, expertise, status, validUntil, location, id, media } = body;
  const formatDate = convertDateFormat(validUntil);
  const LabelSelected = Labels[status];
  return (
    <FadeOnScreen time={0.2} x={-100}>
      <li key={id}>
        <div className="flex gap-[10px] items-center">
          {media ? (
            <Img src={media} byte={true} className="rounded-full" />
          ) : (
            <Icon name="person" />
          )}
          <span>{fullName}</span>
        </div>

        <div className="flex gap-[10px] items-center">{expertise}</div>
        <div className="flex gap-[10px] items-center">
          <LabelSelected />
        </div>
        <div>{formatDate}</div>
        <div>{location}</div>
        <div>
          <button
            onClick={() => {
              handlerActiveId("withId",id);
            }}
            className="px-4 py-2 border rounded-lg border-light-100"
          >
            Details
          </button>
        </div>
      </li>
    </FadeOnScreen>
  );
}
