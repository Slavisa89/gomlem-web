import { useState } from "react";
import { twMerge } from "tailwind-merge";
import SelectChart from "@components/SelectChart";
import CloseButton from "@components/CloseButton";
import ChartInModal from "./ChartInModal";
import SearchBox from "@components/SearchBox";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

export default function ModalChart({ handlerActiveModal, dataChart }) {
  const {pathname}  = useLocation();
  const [dataMode, setDataMode] = useState("weeklyData");
  function handlerDataMode(date) {
    setDataMode(date);
  }
  const [searchArea, setSearchArea] = useState("");

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
      <div className="flex bg-white rounded-3xl w-[730px] flex-col font-semibold">
        <div className="flex justify-between py-3 pl-8 pr-[37px] rounded-t-3xl text-white items-center bg-text">
          <span>New Customer Chart</span>
          <CloseButton closeFn={handlerActiveModal} />
        </div>
        <div className="pt-9 pb-[89px] px-7">
          <div className="flex items-center justify-between mb-16">
            <span>Statistics</span>
            <SelectChart mode={dataMode} handlerDataMode={handlerDataMode} />
            {pathname=="/customers" && (
              <SearchBox
                searchBoxHandler={{
                  searchInput: searchArea,
                  handlerChange: handlerChange,
                  handlerSubmit: handlerSubmit,
                  placeHolder: "Search Area",
                  className: "py-2",
                }}
              />
            )} 
          </div>
          <ChartInModal datasApi={dataChart[dataMode]} typeChart={dataMode} />
        </div>
      </div>
    </>
  );
}
