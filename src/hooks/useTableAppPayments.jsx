import { useQuery } from "@tanstack/react-query";
import { alertError } from "@services/scripts/scripts";
import IconCompany from "@assets/imgs/mailchimp.svg";
import AvatarUser1 from "@assets/imgs/avatar-notification1.svg";
import AvatarUser2 from "@assets/imgs/avatar-notification2.svg";
import AvatarUser3 from "@assets/imgs/avatar-notification3.svg";
import AvatarUser4 from "@assets/imgs/avatar-notification4.svg";

const fakePaymentsTableData = {
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

export default function useTableAppPaymens() {
  const { isPending, data, error, isError } = useQuery({
    queryKey: ["app-payment"],
    queryFn: async () => {
      try {
        // TODO: put correct api service here to fetch app payments data
        return fakePaymentsTableData;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });

  return { isPending, data, error, isError };
}
