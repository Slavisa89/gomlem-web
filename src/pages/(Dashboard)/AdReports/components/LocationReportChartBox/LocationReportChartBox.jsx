import LocationReportChart from "./LocationReportChart";

export default function LocationReportChartBox({ locationItem }) {
  return (
    <div className="bg-light-100 rounded-[20px] p-[22px]">
      <div className="flex justify-between">
        <span className="font-semibold">{locationItem.name}</span>
        <span className="font-semibold text-[12px] text-text-lighter">
          ${locationItem.totalAdSpent} total ad spent
        </span>
      </div>
      <LocationReportChart datasApi={locationItem.data} />
    </div>
  );
}
