import Icon from "@components/Icon";

export default function BoxTypeTwo({
  icon,
  color,
  title,
  message,
  newMessage = false,
  isPending,
}) {
  return (
    <li
      className={`flex flex-col justify-between rounded-[20px] pl-[18px] pt-[14px] pr-3 pb-[20px] w-[212px] h-[122px] font-semibold relative ${color.bgBox}`}
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
      <span className="text-[20px]">
        {isPending ? <Icon name="loading2" className="w-4 h-4" /> : message}
      </span>
      {newMessage && (
        <div className="absolute right-12 bottom-14">
          <span className="w-[6px] h-[6px] rounded-full bg-red top-[18px] left-[29px] absolute animate-ping"></span>
          <span className="w-[6px] h-[6px] rounded-full bg-red top-[18px] left-[29px] absolute animate-pulse"></span>
        </div>
      )}
    </li>
  );
}
