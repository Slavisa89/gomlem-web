import CircleSkeleton from "@skeleton/CircleSkeleton";
import BoxSkeleton from "./../../Skeleton/BoxSkeleton";
import Icon from "@components/Icon";
export default function SkeletonLoadingMessage() {
  return (
    <div className="pl-[30px] pb-[63px] w-[343px] pr-[69px]  h-[515px] flex flex-col gap-4 overflow-y-scroll hiddenScroll">
      <div className="flex flex-col">
        <div className="border flex border-light-100 rounded-[20px] gap-3 flex-col w-full p-3 pt-2 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CircleSkeleton width={40} height={40} />
              <BoxSkeleton width={40} height={20} />
            </div>
            <BoxSkeleton width={40} height={20} />
          </div>
          <BoxSkeleton className="w-full" count={3} height={20} />
        </div>
        <p className="mt-[15px] flex gap-2 items-center">
          <Icon name="loading2" className="w-4 h-4" />
          Replies
        </p>
      </div>
      <div className="border flex border-light-100 rounded-[20px] gap-3 flex-col w-full p-3 pt-2 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CircleSkeleton width={40} height={40} />
            <BoxSkeleton width={40} height={20} />
          </div>
          <BoxSkeleton width={40} height={20} />
        </div>
        <BoxSkeleton className="w-full" count={3} height={20} />
      </div>
      <div className="border flex border-light-100 rounded-[20px] gap-3 flex-col w-full p-3 pt-2 text-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CircleSkeleton width={40} height={40} />
            <BoxSkeleton width={40} height={20} />
          </div>
          <BoxSkeleton width={40} height={20} />
        </div>
        <BoxSkeleton className="w-full" count={3} height={20} />
      </div>
    </div>
  );
}
