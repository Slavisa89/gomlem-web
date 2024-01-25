import React from "react";
import LineStatus from "@components/LineStatus/LineStatus";
import PerformanceBox from "../../PerformanceBox";
import Toggle from "@components/Toggle/Toggle";
import { Link } from "react-router-dom";

const fakeImpressionCount = 30.0;
const fakeLocationList = [
  {
    name: "Brooklyn",
    impressions: "15000",
    clicks: 800,
  },
  {
    name: "Manhattan",
    impressions: "15000",
    clicks: 800,
  },
];
export default function ModalAdReport() {
  return (
    <div className="px-[22px] py-6 pl-9 bg-white w-[393px] h-[550px] rounded-b-[20px] overflow-y-scroll">
      <ul className="flex flex-col gap-5 text-sm font-normal">
        <li>
          <div className="mt-4">
            <div className="flex flex-col gap-4">
              <span className="w-[230px] font-semibold">Campaign Duration</span>
              <div className="flex flex-row gap-2">
                <LineStatus
                  theme="blue"
                  value={50}
                  className="h-2 w-[135px] inline"
                  withLabelValue={false}
                />
                <small className="inline">{`${fakeImpressionCount} impressions`}</small>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[242px] font-semibold">
                Locations Targeted{" "}
                <small className="font-normal">{`(${fakeLocationList.length})`}</small>
                <div className="flex flex-row gap-4 mt-4">
                  {fakeLocationList.map((locItem, i) => (
                    <span key={i} className="font-normal">
                      {locItem.name}
                    </span>
                  ))}
                </div>
              </span>
            </div>
          </div>
        </li>
        <li>
          <div className="mb-6">
            <span className="font-semibold">Ad Performance</span>
          </div>
          {fakeLocationList.map((locationItem, i) => {
            return (
              <div className="mb-8" key={i}>
                <PerformanceBox
                  locationName={locationItem.name}
                  impressionCount={locationItem.impressions}
                  clicksCount={locationItem.clicks}
                />
              </div>
            );
          })}
        </li>
        <li>
          <div className="flex items-center justify-between">
            <span className="w-[230px] font-semibold">
              Automatically Send Report
            </span>
            <Toggle>
              <input type="checkbox" className="sr-only peer" />
            </Toggle>
          </div>
          <Link
            to="/setting"
            className="flex gap-[13px] text-text-lighter font-normal justify-end mt-4 underline underline-offset-4">
            <span className="">Go to settings</span>
          </Link>
        </li>
        <li className="mt-6 mb-6">
          <button className="items-center justify-center w-full _btn-small _btn-outline rounded-2xl">
            <span className="text-text text-[14px] font-semibold">
              Send A Message
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}
