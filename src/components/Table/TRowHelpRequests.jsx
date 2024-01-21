import Icon from "@components/Icon";
import Img from "@components/Img";
import { convertDateFormat } from "@/script/script";
import {
  EmergencyMedium,
  LowMedium,
  HighMedium,
  MediumMedium,
} from "@components/Label/Label";

export default function TRowHelpRequests({ body }) {
  const Labels = {
    Emergency: EmergencyMedium,
    Low: LowMedium,
    High: HighMedium,
    Medium: MediumMedium,
  };
  const { fullName, expertise, status, validUntil, location, userId, media } =
    body;
  // const imgSrc = `data:image/gif;base64,${media}`;
  const formatDate = convertDateFormat(validUntil);

  const LabelSelected = Labels[status];
  return (
    <li key={userId}>
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
          onClick={() => alert(body)}
          className="px-4 py-2 border rounded-lg border-light-100"
        >
          Details
        </button>
      </div>
    </li>
  );
}
