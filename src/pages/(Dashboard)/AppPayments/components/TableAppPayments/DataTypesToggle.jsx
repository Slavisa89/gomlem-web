import { twMerge } from "tailwind-merge";
import { capitalizeFirstLetter } from "@services/utils/string-helper";

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
              {capitalizeFirstLetter(typeItem)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
