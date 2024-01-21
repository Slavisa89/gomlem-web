import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Icon from "@components/Icon";

const ItemSidebar = ({ url, icon, title, child }) => {
  return (
    <NavLink
      to={url}
      className={({ isPending, isActive }) =>
        twMerge(
          "flex gap-4 p-[10px] border-l border-transparent text-nowrap transition-all duration-100 hover:scale-105 active:scale-95 group",
          isPending && "text-slate-500",
          isActive && "active"
        )
      }
    >
      <Icon name={icon} />
      <span>
        {title}
        {child && <>{child}</>}
      </span>
    </NavLink>
  );
};
export default ItemSidebar;
