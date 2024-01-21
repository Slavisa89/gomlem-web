import BoxSkeleton from "@skeleton/BoxSkeleton";
import Icon from "@components/Icon";

export default function LoadingSkeleton({ count }) {
  let CardSkelton = Array(count).fill();
  CardSkelton = CardSkelton.map((item, i) => {
    return (
      <div className="flex flex-col rounded-[20px] max-w-sm bg-gray-50" key={i}>
        <div className="relative h-[168px] w-full overflow-hidden">
          <span className=" z-10 absolute bottom-[22px] text-white text-xl font-semibold left-[14px]">
            <BoxSkeleton width={210} height={20} className="rounded-lg"/>
          </span>
          <button className="absolute z-10 flex items-center justify-center w-10 h-10 rounded-full top-5 right-8 bg-white/20">
            <BoxSkeleton width={50} height={50} className="rounded-full"/>
          </button>

        </div>
        <div className="px-3 pt-6 text-xs font-semibold bg-light-100 text-text-lighter pb-9 rounded-b-[20px]">
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-3">
              <Icon name="location3" className="w-4 h-5" />
              <BoxSkeleton width={110} height={15} className="rounded-lg" selectTheme="blue"/>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="phone2" className="w-4 h-5" />
              <BoxSkeleton width={110} height={15} className="rounded-lg" selectTheme="blue"/>
            </li>
            <li className="flex items-center gap-3">
              <Icon name="link" className="w-4 h-5" />
              <BoxSkeleton width={110} height={15} className="rounded-lg" selectTheme="blue"/>
            </li>
          </ul>
        </div>
      </div>
    );
  });
  return <div className="grid grid-cols-2 gap-10 pt-12">{CardSkelton}</div>;
}
