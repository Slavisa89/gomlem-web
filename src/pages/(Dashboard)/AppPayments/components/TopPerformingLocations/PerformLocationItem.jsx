import MiniCart from "./MiniChart";

export default function PerformLocationItem({ city, total }) {
  return (
    <div className="flex items-center border-b-[1px] border-light-100">
      <div className="font-bold text-text-lighter size-[14px] mr-[12px]">
        {city}
      </div>
      <div>
        <MiniCart />
      </div>
      <div className="ml-[24px]">
        <span className="bg-light-100 py-[10px] px-[14px] rounded-[15px] font-normal text-text-lighter size-[14px]">
          ${total}
        </span>
      </div>
    </div>
  );
}
