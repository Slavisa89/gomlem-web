import ChartBar from "../ChartBar";

export default function Activity() {
  const a = [
    { name: "Mon", value: 11 },
    { name: "Tue", value: 10 },
    { name: "Wed", value: 14 },
    { name: "Thu", value: 12 },
    { name: "Fri", value: 1 },
    { name: "Sat", value: 5 },
    { name: "Sun", value: 8 },
  ];

  return (
    <div className="w-full h-52 pl-5 pr-4 pt-2 pb-4 border-2 border-light-100 rounded-2xl min-w-[380px]">
      <span className="text-xl font-semibold text-text-lighter">Activity</span>
      <ChartBar datasApi={a} />
    </div>
  );
}
