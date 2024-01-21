import SearchBox from "@components/SearchBox";
import { useState } from "react";
import SortBy from "./../SortBy";
import Icon from "@components/Icon";
import Cards from "./Cards";

export default function ContainerCardsLocation() {
  const [searchInput, setSearchInput] = useState("");
  function handlerChange(value) {
    setSearchInput(value);
  }
  function handlerSubmit() {
    console.log(searchInput);
  }

  const [sortBy, setSortBy] = useState("");
  function handlerSortBy(value) {
    setSortBy(value);
    console.log(sortBy);
  }

  return (
   <div>
     <div className="flex justify-between pr-16 mt-12">
      <div className="flex items-center gap-6 ">
        <div className="flex items-baseline gap-5">
          <span className="text-[28px] font-semibold">Locations</span>
          <span className="text-sm text-text-softGary">(400 total)</span>
        </div>
        <div>
          <SearchBox
            searchBoxHandler={{
              searchInput: searchInput,
              handlerChange: handlerChange,
              handlerSubmit: handlerSubmit,
              placeHolder: "Search Area",
              className: "w-[214px] h-[38px]",
            }}
          />
        </div>
        <SortBy handlerSortBy={handlerSortBy} />
      </div>
      <div>
        <button className="px-12 py-3 bg-text-softGary rounded-[10px] items-center text-white text-xs flex gap-2">
          <Icon name="add" className=" svg-white w-[14px] h-[14px]" />
          <span>Add Location</span>
        </button>
      </div>
    </div>
    <Cards />
   </div>

  );
}
