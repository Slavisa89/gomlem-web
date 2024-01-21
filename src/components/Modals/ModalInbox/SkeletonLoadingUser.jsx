import BoxSkeleton from "@skeleton/BoxSkeleton";
import CircleSkeleton from "@skeleton/CircleSkeleton";

export default function SkeletonLoadingUser(count) {

  return <div className=" w-[285px] flex flex-col gap-4">
    <div className="flex justify-between">
        <div className="flex gap-2">
          <CircleSkeleton height={50} />
          <div className="flex flex-col gap-2">
            <BoxSkeleton width={60} height={15} />
            <BoxSkeleton width={30} height={15} />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <BoxSkeleton width={30} height={15} />
          <BoxSkeleton width={60} height={15} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <CircleSkeleton height={50} />
          <div className="flex flex-col gap-2">
            <BoxSkeleton width={60} height={15} />
            <BoxSkeleton width={30} height={15} />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <BoxSkeleton width={30} height={15} />
          <BoxSkeleton width={60} height={15} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <CircleSkeleton height={50} />
          <div className="flex flex-col gap-2">
            <BoxSkeleton width={60} height={15} />
            <BoxSkeleton width={30} height={15} />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <BoxSkeleton width={30} height={15} />
          <BoxSkeleton width={60} height={15} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <CircleSkeleton height={50} />
          <div className="flex flex-col gap-2">
            <BoxSkeleton width={60} height={15} />
            <BoxSkeleton width={30} height={15} />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <BoxSkeleton width={30} height={15} />
          <BoxSkeleton width={60} height={15} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <CircleSkeleton height={50} />
          <div className="flex flex-col gap-2">
            <BoxSkeleton width={60} height={15} />
            <BoxSkeleton width={30} height={15} />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <BoxSkeleton width={30} height={15} />
          <BoxSkeleton width={60} height={15} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <CircleSkeleton height={50} />
          <div className="flex flex-col gap-2">
            <BoxSkeleton width={60} height={15} />
            <BoxSkeleton width={30} height={15} />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <BoxSkeleton width={30} height={15} />
          <BoxSkeleton width={60} height={15} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <CircleSkeleton height={50} />
          <div className="flex flex-col gap-2">
            <BoxSkeleton width={60} height={15} />
            <BoxSkeleton width={30} height={15} />
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <BoxSkeleton width={30} height={15} />
          <BoxSkeleton width={60} height={15} />
        </div>
      </div>
  </div>;
}
