import { twMerge } from "tailwind-merge";
export default function SelectChart({ handlerUrgencyLevel, UrgencyLevel }) {
  return (
    <div className="flex gap-4 selectstatusChart">
      <button
        className={twMerge(
          "_btn _btn-medium leading-[10px] grow",
          UrgencyLevel === "" && "_btn-active"
        )}
        onClick={() => handlerUrgencyLevel("")}
      >
        All
      </button>
      <button
        className={twMerge(
          "_btn _btn-medium leading-[10px] grow",
          UrgencyLevel === "Emergency" && "_btn-active"
        )}
        onClick={() => handlerUrgencyLevel("Emergency")}
      >
        Emergency
      </button>
      <button
        className={twMerge(
          "_btn _btn-medium leading-[10px] grow",
          UrgencyLevel === "High" && "_btn-active"
        )}
        onClick={() => handlerUrgencyLevel("High")}
      >
        High
      </button>
      <button
        className={twMerge(
          "_btn _btn-medium leading-[10px] grow flex gap-1 justify-center items-center",
          UrgencyLevel === "Medium" && "_btn-active"
        )}
        onClick={() => handlerUrgencyLevel("Medium")}
      >
        Medium
      </button>
      <button
        className={twMerge(
          "_btn _btn-medium leading-[10px] grow flex gap-1 justify-center items-center",
          UrgencyLevel === "Low" && "_btn-active"
        )}
        onClick={() => handlerUrgencyLevel("Low")}
      >
        Low
      </button>
    </div>
  );
}
