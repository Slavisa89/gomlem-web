import Icon from "@components/Icon";

export default function SearchBoxHeader() {
  return (
    <form action="">
      <label
        className="flex items-center rounded-full gap-[18px] pl-[18px] bg-light-200 text-text-secondary focus-within:border-blue border border-transparent focus-within:brightness-95 transition-all duration-150  w-[340px]"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <button
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Icon name="search" />
        </button>
        <input type="text" placeholder="Search" className="bg-transparent p-4 pl-0" />
      </label>
    </form>
  );
}
