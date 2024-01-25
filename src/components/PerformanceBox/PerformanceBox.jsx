import LineStatus from "@components/LineStatus/LineStatus";

export default function PerformanceBox({
  locationName,
  impressionCount,
  clicksCount,
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-text">{locationName}</span>
      <div className="flex flex-row justify-between">
        <span className="text-xs font-normal text-text-lighter">
          Impressions
        </span>
        <small>{impressionCount}</small>
      </div>
      <LineStatus
        theme="blue"
        value={33}
        className="h-2 w-full"
        withLabelValue={false}
      />
      <span className="text-xs font-normal text-text-lighter">Clicks</span>
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
