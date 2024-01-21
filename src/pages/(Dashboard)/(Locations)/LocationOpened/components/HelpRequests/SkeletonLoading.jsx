import BoxSkeleton from "@skeleton/BoxSkeleton";
import Icon from "@components/Icon";

export default function SkeletonLoading({ count }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    return (
      <div key={i}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BoxSkeleton
              height={40}
              selectTheme="blue"
              className="rounded-full"
              width={40}
            />
            <BoxSkeleton height={15} selectTheme="blue" width={70} />
          </div>
          <BoxSkeleton height={15} selectTheme="blue" width={50} />
        </div>
        <div className="mt-[10px] flex justify-between items-center">
          <BoxSkeleton
            height={40}
            selectTheme="blue"
            className="rounded-full"
            width={100}
          />
          <BoxSkeleton
            height={40}
            selectTheme="blue"
            className="rounded-full"
            width={100}
          />
        </div>
        <div className="mt-3">
          <BoxSkeleton
            height={15}
            count={2}
            selectTheme="blue"
            className="w-full "
          />
          <BoxSkeleton height={15} width={50} selectTheme="blue" />
        </div>
        {CardSkelton.length == i + 1 ? (
          ""
        ) : (
          <hr className="mt-[14px] text-light-100" />
        )}
      </div>
    );
  });
  return (
    <div className="flex h-[280px] hiddenScroll overflow-y-scroll flex-col pl-[26px]  py-4 rounded-b-[20px] gap-4 pr-[14px] shadow-boo-2">
      {CardSkelton}
    </div>
  );
}
