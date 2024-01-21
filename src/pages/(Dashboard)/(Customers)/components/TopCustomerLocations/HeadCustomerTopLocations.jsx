import React,{useEffect, useState} from "react";
import { twMerge } from "tailwind-merge";
import SearchBox from "@components/SearchBox";

export default function HeadCustomerTopLocations({
  modeLocation,
  handlerModeLocation,
}) {
  const [searchArea, setSearchArea] = useState("");

  function handlerChange(value) {
    setSearchArea(value);
  }
  function handlerSubmit() {
    console.log(searchArea)
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      handlerSubmit();
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchArea]);
  return (
    <div className="py-[14px] pl-[21px] pr-[9px] rounded-t-[20px] shadow-boo-1 bg-white flex justify-between items-center">
      <span className="text-2xl font-semibold">Top Customer Locations</span>
      <div className="flex gap-2">
        <button
          className={twMerge(
            "_btn _btn-small",
            modeLocation == "countries" && "_btn-active"
          )}
          onClick={() => handlerModeLocation("countries")}
        >
          Country
        </button>
        <button
          className={twMerge(
            "_btn _btn-small",
            modeLocation == "cities" && "_btn-active"
          )}
          onClick={() => handlerModeLocation("cities")}
        >
          City
        </button>
        <SearchBox searchBoxHandler={{
                searchInput: searchArea,
                handlerChange: handlerChange,
                handlerSubmit: handlerSubmit,
                placeHolder: "Search Area",
              }}/>
      </div>
    </div>
  );
}
