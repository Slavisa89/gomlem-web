// Main
import LayoutDashboard from "@dashboard/Layout";
import Main from "@dashboard/Main";
import AddNewUser from "@dashboard/AddNewUser";
import AdReports from "@dashboard/AdReports";
import AppPayments from "@dashboard/AppPayments";
import CustomerSupport from "@dashboard/CustomerSupport";
import HelpRequests from "@dashboard/HelpRequests";
import Inbox from "@dashboard/Inbox";
import Setting from "@dashboard/SettingPage";

// Location Page
import Locations from "@dashboard/(Locations)";
import LocationOpened from "@dashboard/(Locations)/LocationOpened";

// Customers
import CustomerOpened from "@dashboard/(Customers)/CustomerOpened";
import Customers from "@dashboard/(Customers)";

// Login
import LayoutAuth from "@auth/Layout";
import Login from "@auth/Login";

// General Pages
import NotFoundPage from "./pages/(GeneralPage)/NotFoundPage";

const routes = [
  {
    element: <LayoutAuth />,
    children: [{ path: "/login", element: <Login /> }],
  },
  {
    element: <LayoutDashboard />,
    children: [
      { path: "/customers", element: <Customers /> },
      { path: "/customers/opened/:userId", element: <CustomerOpened /> },
      { path: "/add-new-user", element: <AddNewUser /> },
      { path: "/ad-reports", element: <AdReports /> },
      { path: "/app-payments", element: <AppPayments /> },
      { path: "/customer-support", element: <CustomerSupport /> },
      { path: "/help-requests", element: <HelpRequests /> },
      { path: "/inbox", element: <Inbox /> },
      { path: "/locations", element: <Locations /> },
      { path: "/locations/opened/:cityId", element: <LocationOpened /> },
      { path: "/setting", element: <Setting /> },
      { path: "/", element: <Main /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
export default routes;
