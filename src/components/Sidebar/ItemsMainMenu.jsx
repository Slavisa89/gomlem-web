import ItemSidebar from "./ItemSidebar";
import SidebarNotification from "./SidebarNotification";

export default function ItemsMainMenu() {
  const itemsMainMenu = [
    { url: "/", title: "Dashboard", icon: "home" },
    { url: "/customers", title: "Customers", icon: "users" },
    { url: "/help-requests", title: "Help Request", icon: "helpRequest", child: <SidebarNotification /> },
    { url: "/locations", title: "Locations", icon: "location" },
    { url: "/ad-reports", title: "Ad Reports", icon: "ad" },
    { url: "/app-payments", title: "App Payments", icon: "wallet" },
  ];
  return (
    <ul className="flex flex-col">
      {itemsMainMenu.map((item) => {
        return (
          <ItemSidebar
            url={item.url}
            title={item.title}
            icon={item.icon}
            child={item?.child ? item.child : null}
            key={item.url}
          />
        );
      })}
    </ul>
  );
}
