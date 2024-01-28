import { twMerge } from "tailwind-merge";

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
                "capitalize",
              )}
              onClick={() => handleType(typeItem)}>
              {typeItem}
            </button>
          );
        })}
      </div>
    </div>
  );
}
