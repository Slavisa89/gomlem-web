import Label from "@components/Label";
import Icon from "@components/Icon";

export default function BoxTypeThree({
  color,
  icon,
  title,
  number,
  fnView,
  typeModal,
  fnViewTitle,
  isPending,
  labelCount,
}) {
  const LabelCard = () => {
    if (labelCount > 0)
      return (
        <Label size="small" theme="green">
          {labelCount} Active
        </Label>
      );
    if (labelCount < 0)
      return (
        <Label size="small" theme="red">
          {labelCount} Inactive
        </Label>
      );
  };
  return (
    <li
      className={`flex flex-col justify-between rounded-[20px] pl-[18px] pt-[14px] pr-4 pb-[20px] w-[212px] h-[122px] font-semibold ${color.bgBox}`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-text-lighter">
            {isPending ? <Icon name="loading2" className="w-4 h-4" /> : title}
          </span>

          {labelCount && labelCount != 0 ? <LabelCard /> : null}
        </div>
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
        {isPending ? (
          <Icon name="loading2" className="w-4 h-4" />
        ) : (
          <span className="text-[20px]">{number}</span>
        )}
        <button
          className="relative text-text-softGary text-[10px] flex  items-center gap-2 p-2 rounded-lg border duration-300 border-transparent hover:border-white hover:shadow-md"
          onClick={() => fnView(typeModal)}
        >
          {fnViewTitle ? <span>{fnViewTitle}</span> : <span>View</span>}
          <Icon name="arrow" className="w-3 h-2" />
        </button>
      </div>
    </li>
  );
}
