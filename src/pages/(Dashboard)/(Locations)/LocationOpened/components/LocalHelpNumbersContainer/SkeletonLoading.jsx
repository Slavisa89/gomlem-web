import BoxSkeleton from "@skeleton/BoxSkeleton";
import Icon from "@components/Icon";

export default function LoadingSkeleton({ count }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    return (
      <div
        className="bg-light-100 rounded-[20px] pb-2 flex justify-center items-center gap-6 flex-col min-w-[340px]  relative"
        key={i}
      >
        <BoxSkeleton
          width={30}
          height={30}
          className="top-[22px] absolute right-4 "
          selectTheme="blue"
        />
        <BoxSkeleton width={130} height={25} selectTheme="blue" />
        <BoxSkeleton
          width={130}
          height={20}
          selectTheme="blue"
          className="mt-1"
        />
      </div>
    );
  });
  return <div className="grid grid-cols-1 gap-x-2 gap-y-6 lg:grid-cols-2 mt-9 ">{CardSkelton}</div>;
}
