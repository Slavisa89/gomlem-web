import React, { useState } from "react";
import Icon from "@components/Icon";

export default function SearchBox({ searchInput, handlerChange }) {
  return (
    <label
      htmlFor="searchMenuFilters"
      className="relative flex items-center w-full gap-3 px-4 py-3 rounded-full bg-light-100"
    >
      <Icon name="search" className="w-3 h-3" />
      <input
        type="search"
        name=""
        placeholder="Search Help Request Stats By Location"
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
