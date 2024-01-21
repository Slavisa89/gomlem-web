import BoxSkeleton from "@skeleton/BoxSkeleton";
import Icon from "@components/Icon";
import { twMerge } from 'tailwind-merge';

export default function LoadingSkeleton({ count }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    const randomWidth  = Math.floor((Math.random()*150)+70)
    return (
      <div key={i} className={twMerge(i>0 && "pr-6")}>
        <div className="flex items-center justify-between pr-8 ">
          <div className="flex items-center gap-2 ">
            <BoxSkeleton width={40} height={40} className="rounded-full" />
            <BoxSkeleton width={80} height={15} className="rounded-lg" />
          </div>
          <BoxSkeleton width={40} height={15} className="rounded-lg" />
        </div>
        <div className="mt-6">
          <BoxSkeleton height={15} className="w-full rounded-lg" />
          <BoxSkeleton height={15} className="w-full rounded-lg" />
          <BoxSkeleton height={15} className="w-full rounded-lg" />
          <BoxSkeleton height={15} width={randomWidth} className="rounded-lg" />
        </div>
        {i == 0 && <div className="flex items-center gap-2 mt-4"><Icon name="loadingBlue" className="w-4 h-4" /> Replies</div>}
        <hr className="mt-4 text-light-100" />
      </div>
    );
  });
  return <div className="flex flex-col gap-6 mt-6">{CardSkelton}</div>;
}
