import StatusBox from "@components/StatusBox";
import NewCustomersChart from "@components/NewCustomersChart";
import useCustomerInfoData from "@hooks/useCustomerInfoData";

export default function SideBar() {
  const {
    customersInfoData,
    customersInfoPending,
    customersInfoError,
    // customersInfoMessageError,
  } = useCustomerInfoData();
  return (
    <aside className="w-[30%] mr-[70px] flex flex-col gap-10">
      <StatusBox
        typeBox="boxTypeOne"
        color="green"
        icon="person"
        title="Total Customers"
        isPending={customersInfoPending || customersInfoError}
        number={
          !customersInfoPending &&
          !customersInfoError &&
          customersInfoData.total
        }
        profit={
          !customersInfoPending &&
          !customersInfoError &&
          customersInfoData.sinceLastMonth
        }
        lastSince="Since last month"
      />
      <NewCustomersChart
        isPending={customersInfoPending || customersInfoError}
        data={customersInfoData}
      />
    </aside>
  );
}
