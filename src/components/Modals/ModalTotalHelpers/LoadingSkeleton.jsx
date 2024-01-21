import BoxSkeleton from "@skeleton/BoxSkeleton";
import Icon from "@components/Icon";

export default function LoadingSkeleton({ count }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    return (
      <div key={i}>
        <div className="flex gap-2">
          <BoxSkeleton width={50} selectTheme="blue" height={50} className="rounded-full" />
          <div className="flex flex-col gap-2 grow">
            <div className="flex justify-between">
              <BoxSkeleton width={80} height={15} className="rounded-lg" />
              <BoxSkeleton width={120} height={15} className="rounded-lg" />
            </div>
            <BoxSkeleton width={50} height={14} className="rounded-full" />
          </div>
        </div>
        {count == i + 1 ? "" : <hr className="my-5 text-light-100 " />}
      </div>
    );
  });
  return (
    <div className="overflow-y-scroll h-[410px] w-full mt-4 hiddenScroll">
      <div className="flex flex-col justify-center w-full mt-6">
        {CardSkelton}
      </div>
    </div>
  );
}
