import Icon from "@components/Icon";
import { twMerge } from "tailwind-merge";

export default function SearchBoxFilter({ searchBoxHandler }) {
  const { searchInput, handlerChange, handlerSubmit, placeHolder, className } =
    searchBoxHandler;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlerSubmit();
    }
  };

  return (
    <label
      htmlFor="searchMenuFilters"
      className={twMerge(
        "py-3 px-4 relative items-center rounded-full flex gap-3 bg-light-100 pr-10",
        className
      )}
    >
      {!searchInput ? (
        <button>
          <Icon name="search2" className="w-3 h-3" />
        </button>
      ) : (
        <button
          onClick={() => handlerChange("")}
          className={twMerge("relative w-3 h-3 ", searchInput && "opacity-100")}
        >
          <Icon name="close" className="absoulute w-3 h-3" />
        </button>
      )}
      <input
        type="search"
        name=""
        placeholder={placeHolder || "Search Area"}
        className="bg-transparent text-[10px] placeholder:text-gary w-full"
        id="searchMenuFilters"
        value={searchInput}
        onChange={(e) => {
          handlerChange(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
    </label>
  );
}
