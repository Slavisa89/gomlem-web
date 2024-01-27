import React, { useState } from "react";
import ToggleTable from "./components/ToggleTable";
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

const TABLE_HEAD_PAYMENTS = [
  "Customer Name",
  "Date Charged",
  "Amount Paid",
  "Total Months Paid",
  "Total Paid",
  "Customer Profile",
];

const TABLE_ROW_DATA = [
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
];

const tableApiData = {
  subscriptions: {
    head: [
      "Customer Name",
      "Date Charged",
      "Amount Paid",
      "Total Months Paid",
      "Total Paid",
      "Customer Profile",
    ],
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
  trips: {
    head: [
      "Cutomer Name",
      "Date Charged",
      "Trip Location",
      "Trip Dates",
      "Total Cost",
      "Trip Profile",
    ],
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
      <table className="">
        <thead>
          <tr className="text-left text-[14px] font-semibold text-gray-600 pt-[26px] pb-[18px] px-9 rounded-2xl">
            {TABLE_HEAD_PAYMENTS.map((headerItem, index) => (
              <th key={index}>{headerItem}</th>
            ))}
          </tr>
        </thead>
        <div className="m-10"></div>
        <tbody className="text-xs font-semibold">
          {}
          <div className="m-6"></div>
          <tr>
            <td>
              <div className="flex flex-row items-center gap-2">
                <img
                  src={AvatarUser2}
                  className="rounded-full w-10"
                  alt="avatar"
                />
                <span>John</span>
              </div>
            </td>
            <td>Griffin</td>
            <td>$100</td>
            <td>Peter</td>
            <td>Griffin</td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
