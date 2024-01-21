import { twMerge } from "tailwind-merge";
import Icon from "@components/Icon"
export default function SelectChart({ handlerDataMode, mode }) {
  return (
    <div className="flex gap-4 selectModeChart">
      <button
        className={twMerge("_btn _btn-medium leading-[10px] grow", mode === "dailyData" && "_btn-active")}
        onClick={() => handlerDataMode("dailyData")}
      >
        Day
      </button>
      <button
        className={twMerge("_btn _btn-medium leading-[10px] grow", mode === "weeklyData" && "_btn-active")}
        onClick={() => handlerDataMode("weeklyData")}
      >
        Week
      </button>
      <button
        className={twMerge("_btn _btn-medium leading-[10px] grow", mode === "monthlyData" && "_btn-active")}
        onClick={() => handlerDataMode("monthlyData")}
      >
        Month
      </button>
      <button
        className={twMerge("_btn _btn-medium leading-[10px] grow flex gap-1 justify-center items-center", mode === "yearlyData" && "_btn-active")}
        onClick={() => handlerDataMode("yearlyData")}
      >
        Year
        <Icon name="arrowDown"/>
      </button>
    </div>
  );
}
