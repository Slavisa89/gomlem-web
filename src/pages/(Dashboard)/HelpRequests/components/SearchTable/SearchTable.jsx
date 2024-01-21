import React, { useState } from "react";
import Icon from "@components/Icon";
import AnimBox from "@animation/AnimBox";
import { twMerge } from "tailwind-merge";
import CloseButton from "@components/CloseButton";
import SearchBoxFilter from "./SearchBox";
export default function SearchTable({ value, handlerChange }) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  function handlerActiveMenu() {
    setIsActiveMenu(!isActiveMenu);
  }
  return (
    <div className="relative z-10">
      <button
        onClick={() => {
          handlerActiveMenu();
        }}
        className={twMerge(
          "w-[50px] h-[50px] rounded-full flex justify-center items-center bg-light-200",
          isActiveMenu && "bg-blue"
        )}
      >
        <Icon
          name="search2"
          className={twMerge("w-[18px] h-[18px]", isActiveMenu && "svg-white")}
        />
      </button>
      <AnimBox
        y={200}
        time={8}
        isOpen={isActiveMenu}
        className="absolute top-[60px] w-[379px] right-0 rounded-[20px] z-30 bg-white"
      >
        <div className="shadow-boo-1 pt-[29px] px-[17px]  rounded-[20px] h-[208px] flex flex-col gap-[27px] relative z-10">
          <div className="flex items-center justify-between">
            <SearchBoxFilter
              searchInput={value}
              handlerChange={handlerChange}
            /> 
            <CloseButton
              closeFn={() => {
                handlerActiveMenu();
              }}
            />
          </div>
        </div>
      </AnimBox>
      {isActiveMenu && (
        <div
          className="fixed top-0 left-0 z-20 w-screen h-screen"
          onClick={() => handlerActiveMenu()}
        ></div>
      )}
    </div>
  );
}
