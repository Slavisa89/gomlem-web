import Icon from "@components/Icon";
import BoxSkeleton from "@skeleton/BoxSkeleton";
export default function TitleChart({
  rate,
  counter,
  handlerActiveModal,
  isPending,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <span className="text-sm text-gary-100">Help Request</span>
        <div className="flex text-[10px] items-center gap-5">
          {isPending ? (
            <BoxSkeleton height={12} width={20} />
          ) : (
            <span className={`${rate >= 0 ? "text-green" : "text-red"}`}>
              {parseFloat(rate).toFixed(2)}%
            </span>
          )}
        </div>
      </div>
      {isPending ? (
        <BoxSkeleton height={12} width={25} />
      ) : (
        <span className="text-xl">{counter}</span>
      )}
    </div>
  );
}
