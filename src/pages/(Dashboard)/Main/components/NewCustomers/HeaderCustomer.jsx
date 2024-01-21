import { Link } from "react-router-dom";
import IconArrow from "@assets/icons/arrow_right2.svg";

export default function HeaderCustomer() {
  return (
    <div className="flex justify-between mb-8">
      <span className="font-semibold">New Customers</span>
      <Link to="/customers" className="flex gap-[13px] text-text-lighter font-semibold items-center">
        <span>View All</span>
        <img src={IconArrow} className="w-[14px] h-[18px]" />
      </Link>
    </div>
  );
}
