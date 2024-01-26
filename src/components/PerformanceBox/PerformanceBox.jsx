import LineStatus from "@components/LineStatus/LineStatus";
import Icon from "@components/Icon";

export default function PerformanceBox({
  locationName,
  impressionCount,
  clicksCount,
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-text">{locationName}</span>
      <div className="flex flex-row justify-between">
        <div className="flex-row flex items-center gap-1">
          <Icon name="visitEye" className="w-3" />
          <span className="text-xs font-normal text-text-lighter">
            Impressions
          </span>
        </div>
        <small>{impressionCount}</small>
      </div>
      <LineStatus
        theme="blue"
        value={33}
        className="h-2 w-full"
        withLabelValue={false}
      />
      <div className="flex-row flex items-center gap-1">
        <Icon name="clicks" className="w-3" />
        <span className="text-xs font-normal text-text-lighter">Clicks</span>
      </div>
      <small>{clicksCount}</small>
      <LineStatus
        theme="gary"
        value={33}
        className="h-2 w-[147px]"
        withLabelValue={false}
      />
    </div>
  );
}
