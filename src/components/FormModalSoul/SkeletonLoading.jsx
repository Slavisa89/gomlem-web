import BoxSkeleton from "@skeleton/BoxSkeleton";

export default function SkeletonLoading() {
  return (
    <div>
      <BoxSkeleton width={336} height={227} className="rounded-[20px]" />
      <div>
        <p className="text-text-lighter text-[18px] font-semibold mt-6 mb-4">
          Name
        </p>
        <BoxSkeleton height={40} className="w-full rounded-[20px]" />
      </div>

      <div>
        <p className="text-text-lighter text-[18px] font-semibold mt-6 mb-4">
          Address
        </p>
        <BoxSkeleton height={40} className="w-full rounded-[20px]" />
      </div>

      <div>
        <p className="text-text-lighter text-[18px] font-semibold mt-6 mb-4">
          Website
        </p>
        <BoxSkeleton height={40} className="w-full rounded-[20px]" />
      </div>

      <div className="flex flex-col gap-4 mt-12">
        <BoxSkeleton height={40} className="w-full rounded-[20px]" />
        <BoxSkeleton height={40} className="w-full rounded-[20px]" />
      </div>
    </div>
  );
}
