import Icon from "@components/Icon";
import Img from "@components/Img";
import { Link } from "react-router-dom";

export default function TitleMainHeader({ title }) {
  if (location.pathname.includes("locations/opened/"))
    return (
      <div className="flex items-center">
        <Link to="/locations">
        <Icon name="arrow" className="rotate-180" />
        </Link>
        <Img src="poster4" alt="" className="w-12 h-12 rounded-full ml-[14px] mr-5" />
        <span className="font-semibold text-[28px]">London</span>
      </div>
    );

  return <span className="text-3xl font-semibold text-text">{title}</span>;
}
