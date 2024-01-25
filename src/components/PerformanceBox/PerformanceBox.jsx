import LineStatus from "@components/LineStatus/LineStatus";

export default function PerformanceBox({
  locationName,
  impressionCount,
  clicksCount,
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-text">{locationName}</span>
      <span className="text-xs font-semibold text-text-lighter">
        Impressions
      </span>
      <small>{impressionCount}</small>
      <LineStatus theme="blue" value={33} className="h-2 w-[147px]" />
      <span className="text-xs font-semibold text-text-lighter">Clicks</span>
      <small>{clicksCount}</small>
      <LineStatus theme="gary" value={33} className="h-2 w-[147px]" />
    </div>
  );
}
