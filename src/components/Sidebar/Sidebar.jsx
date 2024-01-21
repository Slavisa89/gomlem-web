
// after memo delete
import SidebarNotification from "./SidebarNotification";
import ItemSidebar from "./ItemSidebar";
import LoginOut from "./LoginOut";
import Img from '@components/Img';

export default function Sidebar() {
  const itemsSidebarMenu = [
    { url: "/", title: "Dashboard", icon: "home" },
    { url: "/customers", title: "Customers", icon: "users" },
    {
      url: "/help-requests",
      title: "Help Request",
      icon: "chat",
      child: <SidebarNotification type="helpRequests" />,
    },
    { url: "/locations", title: "Locations", icon: "location" },
    { url: "/ad-reports", title: "Ad Reports", icon: "ad" },
    { url: "/app-payments", title: "App Payments", icon: "wallet" },
    {
      url: "/customer-support",
      title: "Customer Support",
      icon: "headPhone",
      child: <SidebarNotification type="customerSupports" />,
    },
    { url: "/inbox", title: "Inbox", icon: "chat" },
    { url: "/setting", title: "Settings", icon: "setting" },
    { url: "/add-new-user", title: "Add New User", icon: "addUser" },
  ];

  // All item in main sidebar
  return (
    <>
      <div className="sidebar bg-text p-5 w-[250px] text-white flex flex-col gap-7 h-screen justify-between">
        <div className="flex flex-col gap-7">
          {/* logo */}
          <Img src="logoHere" className="mt-9 w-[90px] h-[22px]"/>

          <ul className="flex flex-col">
            {itemsSidebarMenu.map((item, i) => {
              return (
                <li key={item.url}>
                  <ItemSidebar
                    url={item.url}
                    title={item.title}
                    icon={item.icon}
                    child={item?.child ? item.child : null}
                  />
                  {i === 5 ? <hr className="text-gray my-[10px]" /> : ""}
                </li>
              );
            })}
          </ul>
          {/* Need to Memo this component */}
          {/* <ListItemSidebar /> */}
        </div>
        <div>
          {/* Log Out */}
          <hr className="text-gray" />
          <LoginOut />
        </div>
      </div>
    </>
  );
}
