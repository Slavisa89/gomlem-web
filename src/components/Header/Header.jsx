import SearchBoxHeader from "./SearchBoxHeader";
import SearchBoxHeaderCustomer from "./SearchBoxHeaderCustomer";
import NotificationHeader from "./NotificationHeader";
import ProfileAvatarHeader from "./ProfileAvatarHeader";
import TitleMainHeader from "./TitleMainHeader";

import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  function handlerTitle(path) {
    switch (path) {
      case "/customers":
        return "Customers";
      case "/help-requests":
        return "Help Requests";
      case "/locations":
        return "Locations";
      case "/ad-reports":
        return "Ad Reports";
      case "/app-payments":
        return "App Payments";
      case "/customer-support":
        return "Customer Support";
      case "/inbox":
        return "Inbox";
      case "/setting":
        return "Setting";
      case "/add-new-user":
        return "Add New User";
      case "/":
        return "Dashboard";
    }
    return "Dashboard";
  }
  if (location.pathname.includes("customers/opened/")) return;
  return (
    <>
      <div className="flex items-center justify-between pt-10 pb-3 pr-32 border-b border-light-100 pl-11">
        {/* Title Main */}
        <TitleMainHeader title={handlerTitle(location.pathname)} />
        <div className="flex gap-7">
          {location.pathname == "/customers" ? (
            <SearchBoxHeaderCustomer />
          ) : (
            <SearchBoxHeader />
          )}
          <NotificationHeader />
          <div className="vl"></div>
          <ProfileAvatarHeader />
        </div>
      </div>
    </>
  );
}
//
