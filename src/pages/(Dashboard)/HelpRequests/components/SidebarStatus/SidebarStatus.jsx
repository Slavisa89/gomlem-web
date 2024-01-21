import React, { useEffect, useState } from "react";
import SearchBox from "@components/SearchBox";
import useAnalyze from "@hooks/useAnalyze";
import ItemAnalyze from "./ItemAnalyze";
import LoadingSkeleton from "./LoadingSkeleton";

export default function SidebarStatus() {
  // last Value SearchBox
  const [searchArea, setSearchArea] = useState("");
  // param location for hook analyze
  const [location, setLocation] = useState();
  // Set New Value
  function handlerChange(value) {
    setSearchArea(value);
  }
  // Set Value For Param and change value eq new request
  function handlerSubmit() {
    setLocation(searchArea);
  }
  useEffect(() => {
    const timerId = setTimeout(() => {
      handlerSubmit();
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchArea]);
  const {
    analyzeData,
    analyzePending,
    analyzeError,
    // analyzeMessageError,
  } = useAnalyze(location);

  return (
    <div className="px-4 pt-[34px] shadow-boo-2 flex gap-6 flex-col bg-white rounded-[20px] pb-3 border-light-100 border">
      <SearchBox
        searchBoxHandler={{
          searchInput: searchArea,
          handlerChange: handlerChange,
          handlerSubmit: handlerSubmit,
          placeHolder: "Search Help Request Stats By Location",
          useDebounce: true,
        }}
      />
      {!analyzePending && !analyzeError ? (
        <ItemAnalyze data={analyzeData} />
      ) : (
        <LoadingSkeleton count={8} />
      )}
    </div>
  );
}
