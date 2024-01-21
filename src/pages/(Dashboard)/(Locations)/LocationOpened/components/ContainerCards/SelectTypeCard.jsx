import { twMerge } from "tailwind-merge";

export default function SelectTypeCard({ handlerSelectType, type }) {
  return (
    <div className="flex flex-wrap gap-5 mb-11">
      <button
        onClick={() => handlerSelectType("Shuls")}
        className={twMerge(
          "border border-light-100 px-5 text-text py-[10px] rounded-full",
          type == "Shuls" && "bg-text text-white"
        )}
      >
        Shuls
      </button>

      <button
        onClick={() => handlerSelectType("Chabad Houses")}
        className={twMerge(
          "border border-light-100 px-5 text-text py-[10px] rounded-full",
          type == "Chabad Houses" && "bg-text text-white"
        )}
      >
        Chabad Houses
      </button>

      <button
        onClick={() => handlerSelectType("Kosher Restaurants")}
        className={twMerge(
          "border border-light-100 px-5 text-text py-[10px] rounded-full",
          type == "Kosher Restaurants" && "bg-text text-white"
        )}
      >
        Kosher Restaurants
      </button>

      <button
        onClick={() => handlerSelectType("Local Help Numbers")}
        className={twMerge(
          "border border-light-100 px-5 text-text py-[10px] rounded-full",
          type == "Local Help Numbers" && "bg-text text-white"
        )}
      >
        Local Help Numbers
      </button>

      <button
        onClick={() => handlerSelectType("Local News Links")}
        className={twMerge(
          "border border-light-100 px-5 text-text py-[10px] rounded-full",
          type == "Local News Links" && "bg-text text-white"
        )}
      >
        Local News Links
      </button>
    </div>
  );
}
