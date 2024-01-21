import Icon from "@components/Icon";

export default function SearchBoxFilter({ searchInput, handlerChange }) {
  return (
    <label
      htmlFor="searchMenuFilters"
      className="py-3 px-4 relative items-center rounded-full flex gap-3 bg-light-100 w-[calc(100%-60px)]"
    >
      <Icon name="search2" className="w-3 h-3" />
      <input
        type="search"
        name=""
        placeholder="Search Area"
        className="bg-transparent text-[10px] placeholder:text-gary w-full"
        id="searchMenuFilters"
        value={searchInput}
        onChange={(e) => {
          handlerChange(e.target.value);
        }}
      />
      {searchInput && (
        <button
          onClick={() => handlerChange("")}
          className="absolute p-1 rounded-full w-7 h-7 bg-text-softGary right-4"
        >
          <Icon name="close" className="" />
        </button>
      )}
    </label>
  );
}
