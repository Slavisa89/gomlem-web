import BoxSkeleton from "@skeleton/BoxSkeleton";
import Icon from "@components/Icon";

export default function LoadingSkeleton({ count }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    return (
      <div className="flex flex-col rounded-[20px]  max-w-sm" key={i}>
        <div className="relative h-[168px] w-full bg-text-lighter/50 rounded-t-[20px]">
          <BoxSkeleton
            width={50}
            height={50}
            className="absolute rounded-full top-5 right-8"
          />
        </div>
        <div className="px-3 pt-3 bg-light-100 pb-7 rounded-b-[20px]">
          <span className="flex flex-col gap-1">
            <BoxSkeleton height={20} selectTheme="blue" className="w-full" />
            <BoxSkeleton height={20} selectTheme="blue" width={100} />
          </span>
          <div className="flex items-center justify-between mt-2">
            <BoxSkeleton height={20} width={60} selectTheme="blue" className="w-full" />
            <BoxSkeleton height={20} width={60} selectTheme="blue" className="w-full" />
          </div>
        </div>
      </div>
    );
  });
  return <div className="grid grid-cols-2 gap-10 pt-12">{CardSkelton}</div>;
}
