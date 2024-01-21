import BoxSkeleton from "@skeleton/BoxSkeleton";
import Icon from "@components/Icon";

export default function LoadingSkeleton({ count }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    return (
      <div className="flex justify-between" key={i}>
        <div className="flex items-center gap-1 text-xs font-semibold">
          <BoxSkeleton width={60} height={25} className="rounded-full" />
        </div>
        <div className="flex items-center gap-2">
          <BoxSkeleton width={120} height={14} className="rounded-full" />
          <Icon name="loadingBlue" className="w-4 h-4 rounded-full" />
        </div>
      </div>
    );
  });
  return <div className="flex gap-[14px] flex-col">{CardSkelton}</div>;
}
