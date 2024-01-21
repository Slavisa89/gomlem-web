import BoxSkeleton from "@skeleton/BoxSkeleton";
import Icon from "@components/Icon";
import { twMerge } from "tailwind-merge";

export default function LoadingSkeleton({ count, border }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    return (
      <div key={i}>
        <div className="flex items-center justify-between pr-8 ">
          <div className="flex items-center gap-2 ">
            <BoxSkeleton width={40} height={40} className="rounded-lg" />

            <BoxSkeleton width={60} height={20} className="rounded-lg" />
          </div>
          <BoxSkeleton
            width={40}
            height={20}
            className="rounded-lg mr-[22px]"
          />
        </div>
        <BoxSkeleton height={20} className="w-full pr-8 mt-3 " />
        <BoxSkeleton height={20} className="w-full pr-8 mt-3 " />
        <BoxSkeleton height={20} className="w-full pr-8 mt-3 " />

        <p className="flex gap-2 pt-6 text-sm font-semibold">
          <Icon name="loadingBlue" className="w-5 h-5" />
          Reply
        </p>
        <hr className="mt-4 text-light-100" />
      </div>
    );
  });
  return (
    <div>
      <div className="flex justify-between gap-2">
        <BoxSkeleton width={60} height={30}/>
        <BoxSkeleton width={60} height={30}/>
        <BoxSkeleton width={60} height={30}/>
        <BoxSkeleton width={60} height={30}/>
      </div>
      <div className="flex flex-col gap-6 mt-6">{CardSkelton}</div>;
    </div>
  );
}
