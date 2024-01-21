import React, { useState } from "react";
import Icon from "@components/Icon";
import AnimBox from "@animation/AnimBox";
export default function Filters({ children }) {
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
      >
        <Icon name={isActiveMenu ? "filtersActive" : "filters"} />
      </button>
      <AnimBox
        y={200}
        time={8}
        isOpen={isActiveMenu}
        className="absolute top-0 right-14 rounded-[20px] z-10 bg-white"
      >
        {children}
      </AnimBox>
      {isActiveMenu && (
        <div
          className="fixed z-1 w-screen h-screen top-0 left-0"
          onClick={() => handlerActiveMenu()}
        ></div>
      )}
    </div>
  );
}
