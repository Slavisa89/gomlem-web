import ContainerBoxs from "./components/ContainerBoxs";
import HelpRequestsTable from "./components/HelpRequestTable";
import HelpRequestChart from "./components/HelpRequestChart";
import SidebarStatus from "./components/SidebarStatus";

export default function HelpRequests() {
  return (
    <div className="overflow-y-scroll h-[calc(100vh-112px)]">
      <div className="py-9 pl-11 pr-[70px] flex gap-4">
        <main className="w-[75%]">
          <ContainerBoxs />
          <HelpRequestsTable />
        </main>
        <aside className="w-[25%]">
          <HelpRequestChart />
          <SidebarStatus />
        </aside>
      </div>
    </div>
  );
}
