import IconArrow from "@assets/icons/arrow_right2.svg";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

export default function DataTypesToggle({
  typeList,
  selectedType,
  handleType,
}) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-[19px] main-btn-table">
        {typeList.map((typeItem, i) => {
          return (
            <button
              key={i}
              className={twMerge(
                "_btn-outline",
                typeItem === selectedType && "active",
              )}
              onClick={() => handleType(typeItem)}>
              {typeItem}
            </button>
          );
        })}
      </div>
      {
        <Link
          to={selectedType == "appPayment" ? "/app-payments" : "/ad-reports"}
          className="flex gap-[13px] text-text-lighter font-semibold items-center">
          <span>View All</span>
          <img src={IconArrow} className="w-[14px] h-[18px]" />
        </Link>
      }
    </div>
  );
}
