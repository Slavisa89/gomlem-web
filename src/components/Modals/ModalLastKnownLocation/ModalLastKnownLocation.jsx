import React, { useState } from "react";
import CloseButton from "@components/CloseButton";
import Icon from "@components/Icon";
import Map from "./Map"

export default function ModalTripProfile({ id, handlerActiveModal }) {
  return (
    <div className="flex flex-col font-semibold transition-all duration-300 bg-white rounded-3xl">
      <div className="flex justify-between py-3 pl-[34px] pr-[17px] rounded-t-3xl text-white items-center bg-text w-full">
        <span>Last Known Location{id}</span>
        <div className="flex gap-2">
          <CloseButton closeFn={handlerActiveModal} />
        </div>
      </div>
      <div className="bg-white w-[393px] p-6 pt-8 hiddenScroll rounded-b-[20px] h-[577px] overflow-y-scroll">
        {/* <Img src="sampleMapImg" className="h-[240px]" /> */}
        <Map />
        <div className="text-sm ">
          <div className="flex items-center gap-4 border-b border-light-100 py-[14px] mt-5">
            <Icon name="clock" className="w-[18px] h-[18px]" />
            <span>Last seen here at 10:15 pm on 05/20/23</span>
          </div>

          <div className="flex items-center gap-4 border-b border-light-100 py-[14px]">
            <Icon name="location" className="w-[18px] h-[18px] svg-black" />
            <span>Example address inserted here</span>
          </div>
          <p className="text-text-softGary font-normal my-[30px]">
            Disclaimer: This may not be the persons current address. It is the
            last time they were active on the app.{" "}
          </p>
          <button className="w-full py-[10px] bg-blue font-semibold text-white rounded-2xl">
            Send Location
          </button>
        </div>  
      </div>
    </div>
  );
}
