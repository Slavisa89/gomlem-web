import Icon from "@components/Icon";
import { twMerge } from "tailwind-merge";

export default function NotificationButton({ handelActiveMenu, newNotification, isActiveMenu }) {
  return (
    <button
      className={twMerge(
        "flex justify-center items-center w-14 h-14 border border-transparent rounded-full bg-light-200 relative ",
        isActiveMenu && "border-blue"
      )}
      onClick={() => handelActiveMenu()}
    >
      <Icon name="notification" className="hover:cursor-pointer" />
      {newNotification && (
        <div>
          <span className="w-[6px] h-[6px] rounded-full bg-red top-[18px] left-[29px] absolute animate-ping"></span>
          <span className="w-[6px] h-[6px] rounded-full bg-red top-[18px] left-[29px] absolute animate-pulse"></span>
        </div>
      )}
    </button>
  );
}
