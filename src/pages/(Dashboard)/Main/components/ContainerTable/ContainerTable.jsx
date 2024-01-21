import React, { useState } from "react";
import ToggleTable from "../ToggleTable/ToggleTable";
// import Table from "@components/Table"
import Table from "@components/NewTable";
// Sample Data
import IconCompany from "@assets/imgs/mailchimp.svg";
import AvatarUser1 from "@assets/imgs/avatar-notification1.svg";
import AvatarUser2 from "@assets/imgs/avatar-notification2.svg";
import AvatarUser3 from "@assets/imgs/avatar-notification3.svg";
import AvatarUser4 from "@assets/imgs/avatar-notification4.svg";
import TRowRecentAdvertisers from "@components/NewTable/TRowRecentAdvertisers";
import Thead from "@components/NewTable/Thead";
import Tbody from "@components/NewTable/Tbody";
import TRowPayment from "@components/NewTable/TRowPayment";

const tableApiData = {
  recentAdvertisers: {
    head: ["USER NAME", "DATE", "COMPANY", "AMOUNT SPENT"],
    record: [
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser1,
        amountSpent: "5,000$",
        date: "Apr 10, 2023",
        company: "Mailchimp",
        IconCompany: IconCompany,
        totalMonthsPaid: "14",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser2,
        date: "Apr 10, 2023",
        amountSpent: "5,000$",
        company: "Mailchimp",
        IconCompany: IconCompany,
        totalMonthsPaid: "14",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser3,
        date: "Apr 10, 2023",
        amountSpent: "5,000$",
        company: "Mailchimp",
        IconCompany: IconCompany,
        totalMonthsPaid: "14",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser4,
        date: "Apr 10, 2023",
        company: "Mailchimp",
        IconCompany: IconCompany,
        amountSpent: "5,000$",
        totalMonthsPaid: "14",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser1,
        date: "Apr 10, 2023",
        company: "Mailchimp",
        IconCompany: IconCompany,
        amountSpent: "5,000$",
        totalMonthsPaid: "14",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser2,
        date: "Apr 10, 2023",
        company: "Mailchimp",
        IconCompany: IconCompany,
        amountSpent: "5,000$",
        totalMonthsPaid: "14",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser3,
        date: "Apr 10, 2023",
        company: "Mailchimp",
        IconCompany: IconCompany,
        totalMonthsPaid: "14",
        amountSpent: "5,000$",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser4,
        date: "Apr 10, 2023",
        company: "Mailchimp",
        IconCompany: IconCompany,
        amountSpent: "5,000$",
        totalMonthsPaid: "14",
      },
    ],
  },
  appPayment: {
    head: ["USER NAME", "DATE", "Total Months Paid", "AMOUNT SPENT"],
    record: [
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser1,
        date: "Apr 10, 2023",
        IconCompany: IconCompany,
        totalMonthsPaid: "14",
        amountSpent: "5,000$",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser2,
        date: "Apr 10, 2023",
        IconCompany: IconCompany,
        totalMonthsPaid: "14",
        amountSpent: "5,000$",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser3,
        date: "Apr 10, 2023",
        IconCompany: IconCompany,
        totalMonthsPaid: "14",
        amountSpent: "5,000$",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser4,
        date: "Apr 10, 2023",
        IconCompany: IconCompany,
        totalMonthsPaid: "14",
        amountSpent: "5,000$",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser1,
        date: "Apr 10, 2023",
        totalMonthsPaid: "14",
        amountSpent: "5,000$",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser2,
        date: "Apr 10, 2023",
        totalMonthsPaid: "14",
        amountSpent: "5,000$",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser3,
        date: "Apr 10, 2023",
        totalMonthsPaid: "14",
        amountSpent: "5,000$",
      },
      {
        userName: "Shimon Kranz",
        avatar: AvatarUser4,
        date: "Apr 10, 2023",
        totalMonthsPaid: "14",
        amountSpent: "5,000$",
      },
    ],
  },
};

export default function ContainerTable() {
  const [typeTable, setTypeTable] = useState("recentAdvertisers");
  function handelTypeTable(type) {
    setTypeTable(type);
  }
  return (
    <div className="mt-[27px] flex flex-col gap-4">
      <ToggleTable handelTypeTable={handelTypeTable} type={typeTable} />
      <Table typeTable={typeTable}>
        <Thead dataHead={tableApiData[typeTable].head} />
        <Tbody>
          {tableApiData[typeTable].record.map((rowData, i) => {
            if ("recentAdvertisers" == typeTable) {
              return <TRowRecentAdvertisers body={rowData} key={i} />;
            }
            if ("appPayment" == typeTable) {
              return <TRowPayment body={rowData} key={i} />;
            }
          })}
        </Tbody>
      </Table>
    </div>
  );
}
