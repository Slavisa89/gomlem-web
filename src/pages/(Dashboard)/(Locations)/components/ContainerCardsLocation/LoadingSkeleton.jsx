import BoxSkeleton from "@skeleton/BoxSkeleton";
import Icon from "@components/Icon";

export default function LoadingSkeleton({ count }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    return (
      <div key={i}>
        <div className="relative w-[330px] h-[220px] rounded-[20px]">
          <span className="text-sm text-text-main absolute flex gap-1 top-[12px] items-center z-10 right-[6px] rounded-2xl bg-white/50 blur-[7.5] px-3 py-2">
            <Icon name="loadingBlue" className="w-4 h-4" /> <span>Gomlers</span>
          </span>
          <BoxSkeleton selectTheme="blue" className="w-full h-full rounded-[20px] top-0 left-0 z-0" />
          <span className="absolute text-xl font-semibold text-white left-3 bottom-5 ">
            <BoxSkeleton width={80} height={20} />
          </span>
        </div>
      </div>
    );
  });
  return <div className="grid grid-cols-3 gap-10 pt-12">{CardSkelton}</div>;
}
