
export default function RequestDetails({ data }) {
  if (!data) return "";
  return (
    <div>
      <p className="text-[18px] font-semibold mb-[10px]">Request Details</p>
      <p className="text-xs font-medium">{data}</p>
    </div>
  );
}
