import ContainerBoxLineStatus from "../BoxLineStatus";
import { useState } from "react";

export default function ContainerStatusLocation() {
  const [sortBy, setSortBy] = useState("Most Popular");
  return (
    <div>
      <div className="flex gap-[50px] font-semibold text-[18px] text-text-lighter/30">
        <button
          className={
            sortBy == "Most Popular"
              ? "transition-all duration-200 text-text border-b-2 pb-1 border-text"
              : ""
          }
          onClick={() => setSortBy("Most Popular")}
        >
          Most Popular Locations
        </button>
        <button
          className={
            sortBy == "Least Popular"
              ? "transition-all duration-200 text-text border-b-2 pb-1 border-text"
              : ""
          }
          onClick={() => setSortBy("Least Popular")}
        >
          Least Popular Locations
        </button>
      </div>
      <div>
        <ContainerBoxLineStatus />
      </div>
    </div>
  );
}
