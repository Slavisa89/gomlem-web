import { twMerge } from "tailwind-merge";

export default function FilterDate({ active, handlerActiveDate }) {
  return (
    <div className="flex gap-4 mb-10">
      <button
        onClick={(e) => handlerActiveDate(e.target.textContent)}
        className={twMerge(
          "px-[10px] py-[6px] border border-text-softGary rounded-lg text-[10px] font-extrabold",
          active == "Today" && "bg-text text-white"
        )}
      >
        Today
      </button>
      <button
        onClick={(e) => handlerActiveDate(e.target.textContent)}
        className={twMerge(
          "px-[10px] py-[6px] border border-text-softGary rounded-lg text-[10px] font-extrabold",
          active == "This Week" && "bg-text text-white"
        )}
      >
        This Week
      </button>
      <button
        onClick={(e) => handlerActiveDate(e.target.textContent)}
        className={twMerge(
          "px-[10px] py-[6px] border border-text-softGary rounded-lg text-[10px] font-extrabold",
          active == "This Month" && "bg-text  text-white"
        )}
      >
        This Month
      </button>
      <button
        onClick={(e) => handlerActiveDate(e.target.textContent)}
        className={twMerge(
          "px-[10px] py-[6px] border border-text-softGary rounded-lg text-[10px] font-extrabold",
          active == "This Year" && "bg-text  text-white"
        )}
      >
        This Year
      </button>
    </div>
  );
}
