import BoxSkeleton from "@skeleton/BoxSkeleton";
import Icon from "@components/Icon";

export default function LoadingSkeleton({ count }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    return (
      <li className="flex items-end justify-between" key={i}>
        <div className="flex gap-2">
          <BoxSkeleton width={50} height={50} className="rounded-full" />

          <div className="flex flex-col justify-center ">
            <BoxSkeleton width={50} height={15} className="rounded-sm" />
            <BoxSkeleton width={30} height={10} className="rounded-sm" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BoxSkeleton width={30} height={10} className="rounded-sm" />
        </div>
      </li>
    );
  });
  return <>{CardSkelton}</>;
}
