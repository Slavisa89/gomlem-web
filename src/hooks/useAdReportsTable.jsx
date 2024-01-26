import { useQuery } from "@tanstack/react-query";
//import { adReportsData } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useAdReportsTable(param) {
  const {
    data: adReportsTableData,
    isPending: adReportsTablePending,
    error: adReportsTableError,
  } = useQuery({
    queryKey: [`useAdReportsTable`, param],
    queryFn: async () => {
      try {
        //const { data } = await adReportsData(param);
        return new Promise((resolve) => {
          setTimeout(() => {
            const fakeAdReportsTableData = [
              {
                id: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
                fullName: "Slavisa Test",
                country: "USA",
                amountPaid: "5,000$",
                companyName: "Telegram",
                registeredOn: "2023-12-14T10:33:34.1148514",
                tripsCount: 7,
              },
            ];
            resolve(fakeAdReportsTableData);
          }, 800);
        });
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });

  return {
    adReportsTableData,
    adReportsTablePending,
    adReportsTableError,
  };
}
