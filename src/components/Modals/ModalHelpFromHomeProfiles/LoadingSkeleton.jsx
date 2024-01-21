import BoxSkeleton from "@skeleton/BoxSkeleton";
import { twMerge } from "tailwind-merge";

export default function LoadingSkeleton({ count, border }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    return (
      <div
        className={twMerge(
          "rounded-[20px] w-[470px]",
          !border &&
            "pt-[14px] pb-[30px] border border-text-softGary px-[14px] "
        )}
        key={i}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <BoxSkeleton width={50} height={50} className="rounded-full" />
            <BoxSkeleton width={50} height={15} className="rounded-full" />
          </div>
          <div className="flex items-center justify-between mb-5">
            <BoxSkeleton width={120} height={40} className="rounded-full" />
            <BoxSkeleton width={120} height={20} className="rounded-lg" />
          </div>
          <BoxSkeleton width={50} height={20} className="mb-5 rounded-lg" />
          <BoxSkeleton width={200} height={30} className="mb-5 rounded-lg" />
          <div className="flex gap-6">
            <div className="flex flex-col gap-3">
              <BoxSkeleton width={60} height={60} className="rounded-lg" />
              <BoxSkeleton width={60} height={20} className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-3">
              <BoxSkeleton width={60} height={60} className="rounded-lg" />
              <BoxSkeleton width={60} height={20} className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-3">
              <BoxSkeleton width={60} height={60} className="rounded-lg" />
              <BoxSkeleton width={60} height={20} className="rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="overflow-y-scroll h-[410px] w-full hiddenScroll">
      <div className="flex flex-col justify-center w-full gap-6 mt-4">
        {CardSkelton}
      </div>
    </div>
  );
}
