import React, { useState } from "react";
import Icon from "@components/Icon";

export default function SearchBoxFilter() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <label htmlFor="searchMenuFilters" className="py-3 px-4 items-center rounded-full flex gap-3 bg-light-100">
      <Icon name="search" className="w-3 h-3" />
      <input
        type="search"
        name=""
        placeholder="Search area to send to"
        className="bg-transparent text-[10px] placeholder:text-gary"
        id="searchMenuFilters"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      {searchInput && (
        <button onClick={() => setSearchInput("")} className="absolute w-7 h-7 bg-text-softGary rounded-full p-1 right-4">
          <Icon name="close" className="" />
        </button>
      )}
    </label>
  );
}
