import BoxSkeleton from "@skeleton/BoxSkeleton";

export default function LoadingSkeleton({ mode }) {
  return (
    <div className="py-10 px-7 bg-white w-[421px] rounded-b-[20px] h-[526px] overflow-y-scroll">
      <div className="flex items-center gap-2 mb-5 -mt-5">
        <BoxSkeleton height={50} width={50}  className="rounded-full"/>
        <BoxSkeleton height={15} width={70} />
      </div>
      <div className="relative mb-[22px]">
        <BoxSkeleton height={230} className="w-full rounded-[20px]" />
      </div>
      <BoxSkeleton height={50} className="w-full mb-[22px] rounded-full" />
      <BoxSkeleton height={50} width={150} className="mb-[22px] rounded-full" />
      <div className="flex flex-col">
        <BoxSkeleton height={30} count={2} className="w-full rounded-lg" />
        <div className="flex gap-2 mt-2">
          <BoxSkeleton height={50} width={100} className="rounded-full" />
          <BoxSkeleton height={50} width={100} className="rounded-full" />
        </div>
        {!mode && (
          <div className="flex self-end gap-3">
            <BoxSkeleton height={40} width={40} />
            <BoxSkeleton height={40} width={40} />
          </div>
        )}
      </div>
    </div>
  );
}
