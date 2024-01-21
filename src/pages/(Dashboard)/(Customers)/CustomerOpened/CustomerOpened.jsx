import Header from "./components/Header";
import Activity from "./components/Activity";
import ContainerBoxs from "./components/ContainerBoxs";
import Trips from "./components/Trips";
import Inbox from "./components/Inbox/Inbox";
import BulletinBoard from "./components/BulletinBoard";
import { useParams } from "react-router-dom";
import useCustomersDetails from "@hooks/useCustomersDetails";

export default function CustomerOpened() {
  const { userId } = useParams();
  const {
    customersDetailsData,
    customersDetailsPending,
    customersDetailsError,
    // customersDetailsMessageError
  } = useCustomersDetails(userId);
  
  return (
    <div className="h-screen pb-4 overflow-y-scroll">
      <Header
        data={customersDetailsData}
        isPending={customersDetailsPending}
        isError={customersDetailsError}
      />
      <div className="flex justify-between pr-[70px] pt-[30px] pl-[42px] gap-9">
        <ContainerBoxs
          data={customersDetailsData}
          isPending={customersDetailsPending}
          isError={customersDetailsError}
        />
        <Activity />
      </div>
      <div className="flex justify-between w-full pr-[70px] gap-[52px]">
        <Trips />
        <div>
          <Inbox />
          <BulletinBoard />
        </div>
      </div>
    </div>
  );
}
