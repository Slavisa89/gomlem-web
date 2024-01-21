import ButtonViewLastKnownLocation from "./ButtonViewLastKnownLocation";

export default function LocationDetails({ data }) {
  if (!data) return "";
  return (
    <div className="text-xs">
      <div className="flex justify-between w-full">
        <p className="text-[18px] font-semibold mb-[10px]">Location Details</p>
        <ButtonViewLastKnownLocation id={1} />
      </div>
      <p className="font-medium">{data}</p>
    </div>
  );
}
