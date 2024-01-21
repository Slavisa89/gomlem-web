import FadeOnScreen from "@animation/FadeOnScreen";
import LineStatus from "@components/LineStatus/LineStatus";
import Img from "@components/Img";
import {
  EmergencyMedium,
  LowMedium,
  HighMedium,
  MediumMedium,
} from "@components/Label/Label";

export default function ItemAnalyze({ data }) {
  if (data.length == 0) return <>Empty</>;
  // All Labels
  const labels = {
    Emergency: <EmergencyMedium />,
    Low: <LowMedium />,
    High: <HighMedium />,
    Medium: <MediumMedium />,
  };

  const dataUrgencyLevel = [];
  const dataExpertise = [];
  data.forEach((item,i) => {
    if (item.type == "Expertise")
      dataExpertise.push(
        <FadeOnScreen time={0.5} x={-100} key={i}>
          <div className="flex justify-between">
            <div className="flex items-center gap-1 text-xs font-semibold">
              <Img src={item.media} className="w-4 h-4" byte={true} />
              <span>{item.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <LineStatus value={item.value} className="w-[112px] h-2" />
            </div>
          </div>
        </FadeOnScreen>
      );
    else {
      dataUrgencyLevel.push(
        <FadeOnScreen time={0.5} x={-100} key={i}>
          <div className="flex justify-between">
            {labels[item.name]}
            <div className="flex items-center gap-2">
              <LineStatus value={item.value} className="w-[112px] h-2" />
            </div>
          </div>
        </FadeOnScreen>
      );
    }
  });
  return (
    <div className="flex gap-[14px] flex-col">
      {dataUrgencyLevel}
      <hr />
      {dataExpertise}
    </div>
  );
}
