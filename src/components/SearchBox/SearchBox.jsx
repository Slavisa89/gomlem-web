import Icon from "@components/Icon";
import { twMerge } from "tailwind-merge";

export default function SearchBoxFilter({ searchBoxHandler }) {
  const { searchInput, handlerChange, handlerSubmit, placeHolder, className } =
    searchBoxHandler;

  return (
    <label
      htmlFor="searchMenuFilters"
      className={twMerge(
        "py-3 px-4 relative items-center rounded-full flex gap-3 bg-light-100 pr-10",
        className,
      )}>
      <button onClick={() => handlerSubmit()}>
        <Icon name="search2" className="w-3 h-3" />
      </button>
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
        onKeyDown={handlerSubmit}
      />

      <button
        onClick={() => handlerChange("")}
        className={twMerge(
          " absolute p-1 rounded-full w-7 h-7 bg-text-softGary right-2 opacity-0",
          searchInput && "opacity-100",
        )}>
        <Icon name="close" className="" />
      </button>
    </label>
  );
}
