import BoxSkeleton from "@skeleton/BoxSkeleton";

export default function SkeltonLoading() {
  return (
    <li className="flex flex-col gap-[18px]">
      <BoxSkeleton width={40} height={20} className="rounded-full" />
      <div className="flex gap-4 ">
        <BoxSkeleton width={100} height={50} className="rounded-full" />
        <BoxSkeleton width={130} height={50} className="rounded-full" />
        <BoxSkeleton width={100} height={50} className="rounded-full" />
        <BoxSkeleton width={100} height={50} className="rounded-full" />
      </div>
      <p className="text-[18px] font-semibold mb-[10px]">Request Details</p>
      <div>
        <BoxSkeleton className="w-full" count={3} height={15} />
        <BoxSkeleton width={120} height={15} />
      </div>
      <div className="text-xs">
        <div className="flex justify-between">
          <p className="text-[18px] font-semibold mb-[10px]">
            Location Details
          </p>
          <BoxSkeleton width={120} height={15} />
        </div>
        <div>
          <BoxSkeleton className="w-full" count={3} height={15} />
          <BoxSkeleton width={120} height={15} />
        </div>{" "}
      </div>
      <div>
        <p className="text-[18px] font-semibold mb-[10px]">Contact Methods</p>
        <div className="flex text-xs text-text-softGary">
          <div className="flex gap-[14px]">
            <BoxSkeleton width={50} height={30} />
            <BoxSkeleton width={50} height={30} />
            <BoxSkeleton width={50} height={30} />
          </div>
        </div>
      </div>
      <div className="pt-[38px] flex justify-between">
        <BoxSkeleton width={80} height={30} />
        <div className="flex gap-[10px]">
          <BoxSkeleton width={40} className="rounded-lg" height={40} />{" "}
          <BoxSkeleton width={40} className="rounded-lg" height={40} />
          <BoxSkeleton width={40} className="rounded-lg" height={40} />
        </div>
      </div>
    </li>
  );
}
