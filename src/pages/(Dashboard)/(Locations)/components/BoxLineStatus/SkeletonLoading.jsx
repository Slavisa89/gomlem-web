import BoxSkeleton from "@skeleton/BoxSkeleton";
import Icon from "@components/Icon";

export default function SkeletonLoading({ count }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    return (
      <div key={i}>
        <div>
          <div className="pt-[10px] pl-3 rounded-[20px] w-[220px] gap-[22px] flex h-40 pb-6 justify-between border border-light-100 flex-col">
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-text">
                <BoxSkeleton width={40} height={10} />
              </span>
              <div className="text-[10px] text-text-softGary font-semibold flex gap-2">
                <Icon name="loadingBlue" className="w-4 h-4" />{" "}
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-text-lighter">
                  Helpers
                </span>
                <BoxSkeleton width={150} height={10} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-text-lighter">
                  Trips
                </span>
                <BoxSkeleton width={150} height={10} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{CardSkelton} </>;
}
