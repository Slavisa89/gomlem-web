import FadeListItem from "@animation/FadeListItem";
import useSupportInfoData from "@hooks/useSupportInfoData";
import useCustomerInfoData from "@hooks/useCustomerInfoData";
import StatusBox from "@components/StatusBox";

export default function StatusBoxContainer() {
  const {
    supportInfoPending,
    supportInfoData,
    supportInfoError,
    // supportInfoMessageError,
  } = useSupportInfoData();

  const {
    customersInfoData,
    customersInfoPending,
    customersInfoError,
    // customersInfoMessageError,
  } = useCustomerInfoData();
  return (
    <section>
      <div className="flex justify-between">
        <FadeListItem time={2} y={-100}>
          <StatusBox
            typeBox="boxTypeOne"
            color="red"
            icon="dollar"
            title="Total Revenue"
            number="$50,000"
            profit="12.76"
            lastSince="Since last month"
          />
        </FadeListItem>

        <FadeListItem time={4} y={-100}>
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
        </FadeListItem>

        <FadeListItem time={6} y={-100}>
          <StatusBox
            typeBox="boxTypeTwo"
            color="blue"
            icon="message"
            title="Customer Support"
            isPending={supportInfoPending || supportInfoError}
            message={
              !supportInfoPending &&
              !supportInfoError &&
              `${supportInfoData.customerSupports} New Messages`
            }
            newMessage={supportInfoData && supportInfoData.customerSupports > 0}
          />
        </FadeListItem>
      </div>
    </section>
  );
}
