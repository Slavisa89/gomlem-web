import { useState, useEffect } from "react";
import CloseButton from "@components/CloseButton";
import SearchBox from "@components/SearchBox";
import LocationReportChartBox from "../LocationReportChartBox";

export default function ModalSearchArea({ handlerActiveModal, locationItem }) {
  const [searchArea, setSearchArea] = useState("");

  useEffect(() => {
    setSearchArea(locationItem.name);
  }, []);

  function handlerChange(value) {
    setSearchArea(value);
  }
  function handlerSubmit() {
    console.log(searchArea);
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
    <>
      <div className="flex bg-white rounded-3xl w-[341px] h-[392px] flex-col font-semibold">
        <div className="flex justify-between py-3 pl-8 pt-[12px] pr-[14px] rounded-t-3xl text-white items-center bg-text">
          <span>Search Area</span>
          <CloseButton closeFn={handlerActiveModal} />
        </div>
        <div className="pt-[15px] pb-[89px] px-7">
          <SearchBox
            searchBoxHandler={{
              searchInput: searchArea,
              handlerChange: handlerChange,
              handlerSubmit: handlerSubmit,
              placeHolder: "Search Area",
              className: "py-2 w-[214px] mb-[25px] pl-8",
            }}
          />
          <LocationReportChartBox locationItem={locationItem} />
        </div>
      </div>
    </>
  );
}
