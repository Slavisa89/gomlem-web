import IconArrow from "@assets/icons/arrow_right2.svg";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

export default function ToggleTable({ handelTypeTable, type }) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-[19px] main-btn-table">
        <button
          className={twMerge(
            "_btn-outline",
            type == "recentAdvertisers" && "active",
          )}
          onClick={() => handelTypeTable("recentAdvertisers")}>
          Recent Advertisers
        </button>
        <button
          className={twMerge("_btn-outline", type == "appPayment" && "active")}
          onClick={() => handelTypeTable("appPayment")}>
          App Payments
        </button>
      </div>
      <Link
        to={type == "appPayment" ? "/app-payments" : "/ad-reports"}
        className="flex gap-[13px] text-text-lighter font-semibold items-center">
        <span>View All</span>
        <img src={IconArrow} className="w-[14px] h-[18px]" />
      </Link>
    </div>
  );
}
