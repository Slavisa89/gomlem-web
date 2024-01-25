import React from "react";

const fakeLocationTargeted = ["Brooklyn", "Manhattan"];

export default function ModalAdReport() {
  return (
    <div className="px-[22px] py-6 pl-9 bg-white w-[393px] h-[550px] rounded-b-[20px] overflow-y-scroll">
      <ul className="flex flex-col gap-5 text-sm font-normal">
        <li>
          <div className="mt-4">
            <div className="flex">
              <span className="w-[230px] font-semibold">Campaign Duration</span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="w-[242px] font-semibold">
                Locations Targeted{" "}
                <small className="font-normal">{`(${fakeLocationTargeted.length})`}</small>
                <div className="flex flex-row gap-4 mt-4">
                  {fakeLocationTargeted.map((locName, i) => (
                    <span key={i} className="font-normal">
                      {locName}
                    </span>
                  ))}
                </div>
              </span>
            </div>
          </div>
        </li>
        <li>
          <span className="font-semibold">Ad Performance</span>
        </li>
      </ul>
    </div>
  );
}
