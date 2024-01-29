import ReportChart from "./ReportChart";

export default function LocationCharts({ locationItem }) {
  return (
    <div className="bg-light-100 rounded-[20px] p-[22px] pb-0">
      <div className="flex justify-between">
        <span className="font-semibold">{locationItem.name}</span>
        <span className="font-semibold text-[12px] text-text-lighter">
          ${locationItem.totalAdSpent} total ad spent
        </span>
      </div>
      <ReportChart datasApi={locationItem.data} />
    </div>
  );
}
