import ButtonsSendMessage from "./components/ButtonsSendMessage";
import SideBar from "./components/SideBar";
import TopCustomerLocations from "./components/TopCustomerLocations";
import CustomerList from "./components/CustomerList";

export default function Customers() {
  return (
    <>
      <main className="flex flex-col pt-[31px] pl-[42px] overflow-y-scroll h-[calc(100vh-112px)]">
        <ButtonsSendMessage />
        <div className="flex gap-[86px]">
          <TopCustomerLocations />
          <SideBar />
        </div>
        <CustomerList />
      </main>
    </>
  );
}
