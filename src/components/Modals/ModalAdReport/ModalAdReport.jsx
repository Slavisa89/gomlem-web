import React from "react";
import LineStatus from "@components/LineStatus/LineStatus";
import PerformanceBox from "../../PerformanceBox";

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
          <span className="font-semibold">Ad Performance</span>
          {fakeLocationList.map((locationItem, i) => {
            return (
              <PerformanceBox
                key={i}
                locationName={locationItem.name}
                impressionCount={locationItem.impressions}
                clicksCount={locationItem.clicks}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
}
