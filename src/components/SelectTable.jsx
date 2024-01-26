import { twMerge } from "tailwind-merge";
import Icon from "@components/Icon";

export default function SelectTable({ handlerDataMode, mode }) {
  return (
    <div className="flex gap-4 selectModeChart">
      <button
        className={twMerge(
          "_btn _btn-medium leading-[10px] grow",
          mode === "todayData" && "_btn-active",
        )}
        onClick={() => handlerDataMode("todayData")}>
        Today
      </button>
      <button
        className={twMerge(
          "_btn _btn-medium leading-[10px] grow",
          mode === "weeklyData" && "_btn-active",
        )}
        onClick={() => handlerDataMode("weeklyData")}>
        This Week
      </button>
      <button
        className={twMerge(
          "_btn _btn-medium leading-[10px] grow",
          mode === "monthlyData" && "_btn-active",
        )}
        onClick={() => handlerDataMode("monthlyData")}>
        This Month
      </button>
      <button
        className={twMerge(
          "_btn _btn-medium leading-[10px] grow flex gap-1 justify-center items-center",
          mode === "yearlyData" && "_btn-active",
        )}
        onClick={() => handlerDataMode("yearlyData")}>
        All Time
      </button>
      <button
        className={twMerge(
          "_btn _btn-medium leading-[10px] grow flex gap-1 justify-center items-center",
          mode === "highestData" && "_btn-active",
        )}
        onClick={() => handlerDataMode("highestData")}>
        Highest Spenders
      </button>
    </div>
  );
}
