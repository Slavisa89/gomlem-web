import Icon from "@components/Icon";
import { twMerge } from "tailwind-merge";
export default function CloseButton({ closeFn, appedClass = "" }) {
  return (
    <button
      className={twMerge(
        "rounded-full bg-light-200  hover:brightness-95 transition-all duration-300 hover:rotate-90",
        appedClass
      )}
      onClick={() => closeFn(false)}
    >
      <Icon name="close" />
    </button>
  );
}
