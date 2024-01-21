import Icon from "@components/Icon";

export default function BoxTypeOne({
  color,
  icon,
  title,
  number,
  profit,
  lastSince,
  isPending,
}) {
  return (
    <li
      className={`flex flex-col justify-between rounded-[20px] pl-[18px] pt-[14px] pr-3 pb-[20px] w-[212px] h-[122px] font-semibold ${color.bgBox}`}
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-xs font-semibold text-text-lighter">
          {isPending ? <Icon name="loading2" className="w-4 h-4" /> : title}
        </span>
        <div
          className={`w-[30px] h-[30px] flex justify-center items-center rounded-full ${color.bgIcon}`}
        >
          <Icon
            name={isPending ? "loading" : icon}
            className="w-4 h-4 svg-gray-soft"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[20px]">
          {isPending ? <Icon name="loading2" className="w-4 h-4" /> : number}
        </span>
        <div className="relative text-[10px]">
          {isPending ? (
            <Icon name="loading2" className="w-4 h-4" />
          ) : (
            <span className={+profit > 0 ? "text-green" : "text-red"}>
              {profit > 0 ? "+" : ""}
              {Number(profit) ? parseFloat(profit).toFixed(2) : 0}%
            </span>
          )}
          <span className="text-gary font-normal absolute right-0 top-[14px] text-nowrap">
            {lastSince}
          </span>
        </div>
      </div>
    </li>
  );
}
