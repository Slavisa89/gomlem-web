import React, { useState } from "react";
import Icon from "@components/Icon";
import AnimBox from "@animation/AnimBox";
import SortByMenu from "./SortByMenu";
export default function SortBy({ handlerSortBy, handlerStatus }) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  function handlerActiveMenu() {
    setIsActiveMenu(!isActiveMenu);
  }
  return (
    <div className="relative flex z-1">
      <button
        onClick={() => {
          handlerActiveMenu();
        }}
      >
        <Icon
          name={isActiveMenu ? "filtersActive" : "filters"}
          className="w-[50px] h-[50px]"
        />
      </button>
      <AnimBox
        y={200}
        time={8}
        isOpen={isActiveMenu}
        className="absolute top-[60px] right-0 rounded-[20px] z-30 bg-white"
      >
        <SortByMenu
          handlerActiveMenu={handlerActiveMenu}
          handlerSortBy={handlerSortBy}
          handlerStatus={handlerStatus}
        />
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
