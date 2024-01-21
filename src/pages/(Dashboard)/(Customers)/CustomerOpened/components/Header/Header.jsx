import React, { useState } from "react";
import Icon from "@components/Icon";
import ActionsCustomer from "./ActionsCustomer";
import { Link } from "react-router-dom";
import { formatterLastSeen, formatDate } from "@/script/script";
import BoxSkeleton from "@skeleton/BoxSkeleton";
import Img from "@components/Img";
import { twMerge } from "tailwind-merge";

export default function Header({ data, isPending, isError }) {
  return (
    <div className="flex flex-col">
      <div className="bg-text pt-[30px] pl-[42px]">
        <Link to="/customers" className="block w-max">
          <Icon name="arrow" className="rotate-180 svg-white" />
        </Link>
      </div>
      <div className="pl-[140px] text-white pt-[17px] pr-[101px] pb-[18px] flex justify-between bg-text">
        <div className="relative">
          <b className="text-xl font-semibold">{data?.fullName}</b>
          {isPending || isError ? (
            <div className="border-2 border-white w-[90px] overflow-hidden bg-light-100 flex justify-center items-center h-[90px] rounded-full absolute left-[-98px] top-0">
              <Icon name="loadingBlue" className="w-10 h-10 " />
            </div>
          ) : (
            <div className="w-[90px]">
              <Img
                src={data.media ? data?.media : "person"}
                byte={!!data.media}
                className={twMerge(
                  "border-2 border-white w-[90px] h-[90px] rounded-full absolute left-[-98px] top-0",
                  !data.media && "p-4 bg-white border-text"
                )}
              />
            </div>
          )}
        </div>
        <div className="flex items-center gap-[18px] text-xs font-normal">
          <div className="flex items-center gap-[13px]">
            <Icon name="phone" className="svg-white w-[14px] h-[14px]" />
            <span>
              {!isPending && !isError ? (
                data?.phoneNumber
              ) : (
                <BoxSkeleton height={16} width={60} />
              )}
            </span>
          </div>
          <div className="vl-8 bg-text-softGary"> </div>
          <div className="flex items-center gap-[13px]">
            <Icon name="message" className="svg-white w-[14px] h-[14px]" />
            <span>
              {!isPending && !isError ? (
                data?.email
              ) : (
                <BoxSkeleton height={16} width={60} />
              )}
            </span>
          </div>
          <div className="vl-8 bg-text-softGary"> </div>
          <div className="flex items-center gap-[13px]">
            <Icon name="calender" className="svg-white w-[14px] h-[14px]" />
            <span>
              {!isPending && !isError ? (
                `Joined on ${formatDate(data?.registeredOn)}`
              ) : (
                <BoxSkeleton height={16} width={60} />
              )}
            </span>
          </div>
          <div className="vl-8 bg-text-softGary"> </div>
          <div className="flex items-center gap-[13px]">
            <Icon name="location" className="svg-white w-[14px] h-[14px]" />
            <span>
              {!isPending && !isError ? (
                data?.country
              ) : (
                <BoxSkeleton height={16} width={60} />
              )}
            </span>
          </div>
          <div className="vl-8 bg-text-softGary"> </div>
          <div className="flex items-center gap-[13px]">
            <Icon name="seen" className="svg-white w-[14px] h-[14px]" />
            <span>
              {!isPending && !isError ? (
                `Last Seen ${formatterLastSeen(data?.lastSeen)}`
              ) : (
                <BoxSkeleton height={16} width={60} />
              )}
            </span>
          </div>
        </div>
      </div>
      <ActionsCustomer data={data} isPending={isPending} isError={isError}/>
      <hr className="text-light-100 ml-[42px] mr-[70px]" />
    </div>
  );
}
