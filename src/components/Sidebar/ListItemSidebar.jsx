import FadeList from "@animation/FadeList";
import FadeListItem from "@animation/FadeListItem";
import ItemSidebar from "./ItemSidebar";
import SidebarNotification from "./SidebarNotification";

export default function ListItemSidebar() {
  // All item in main sidebar
  const itemsSidebarMenu = [
    { url: "/", title: "Dashboard", icon: "home" },
    { url: "/customers", title: "Customers", icon: "users" },
    { url: "/help-requests", title: "Help Request", icon: "helpRequest", child: <SidebarNotification /> },
    { url: "/locations", title: "Locations", icon: "location" },
    { url: "/ad-reports", title: "Ad Reports", icon: "ad" },
    { url: "/app-payments", title: "App Payments", icon: "wallet" },
    { url: "/customer-support", title: "Customer Support", icon: "headPhone", child: <SidebarNotification /> },
    { url: "/inbox", title: "Inbox", icon: "chat" },
    { url: "/setting", title: "Settings", icon: "setting" },
    { url: "/add-new-user", title: "Add New User", icon: "addUser" },
  ];
  return (
    <FadeList className="flex flex-col">
      {itemsSidebarMenu.map((item, i) => {
        return (
          <FadeListItem time={i} key={item.url}>
            <ItemSidebar url={item.url} title={item.title} icon={item.icon} child={item?.child ? item.child : null} />
            {i === 5 ? <hr className="text-gray my-[10px]" /> : ""}
          </FadeListItem>
        );
      })}
    </FadeList>
  );
}
