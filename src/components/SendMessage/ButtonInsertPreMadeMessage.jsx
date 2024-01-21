import Icon from "@components/Icon";
import { twMerge } from "tailwind-merge";

export default function ButtonInsertPreMadeMessage({ className = "" }) {
  return (
    <button
      className={twMerge(
        "flex gap-[15px] items-center py-[10px] px-5 rounded-2xl  bg-light-100 text-text-lighter text-sm",
        className
      )}
    >
      <span>Insert Pre-Made Message</span>
      <Icon name="add" className="w-[14px] h-[14px]" />
    </button>
  );
}
