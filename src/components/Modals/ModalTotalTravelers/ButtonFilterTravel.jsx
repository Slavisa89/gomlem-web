import { twMerge } from "tailwind-merge";

export default function ButtonFilterTravel({ active, handlerActiveTravel }) {
  return (
    <div className="flex gap-3">
      <button
        className={twMerge(
          "px-4 py-[10px] rounded-full border-light-100 border duration-300 transition-all",
          active == "Active Trips" && "bg-text border-text text-white"
        )}
        onClick={() => handlerActiveTravel("Active Trips")}
      >
        Active Trips
      </button>
      <button
        className={twMerge(
          "px-4 py-[10px] rounded-full border-light-100 border duration-300 transition-all",
          active == "Inactive Trips" && "bg-text border-text text-white"
        )}
        onClick={() => handlerActiveTravel("Inactive Trips")}
      >
        Inactive Trips
      </button>
    </div>
  );
}
