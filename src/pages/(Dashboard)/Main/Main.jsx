import Statistics from "@components/Statistics";
import ContainerTable from "./components/ContainerTable";
import NewCustomersChart from "@components/NewCustomersChart";
import NewCustomers from "./components/NewCustomers";
import StatusBox from "./components/StatusBoxContainer";

export default function Main() {
  return (
    <div className="overflow-y-scroll h-[calc(100vh-112px)]">
      <div className="py-9 pl-11 pr-[70px] flex gap-[88px]">
        <main className="w-[70%]">
          <StatusBox />
          <Statistics />
          <ContainerTable />
        </main>
        <aside className="w-[30%]">
          <NewCustomersChart />
          <NewCustomers />
        </aside>
      </div>
    </div>
  );
}
