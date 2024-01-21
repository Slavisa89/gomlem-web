import { useQuery } from "@tanstack/react-query";
import { customersInfo } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useCustomerInfoData() {
  const {
    isPending: customersInfoPending,
    data: customersInfoData,
    error: customersInfoMessageError,
    isError: customersInfoError,
  } = useQuery({
    queryKey: ["customerInfoData"],
    queryFn: async () => {
      try {
        const { data } = await customersInfo();
        const { newCustomersChartsData, sinceLastMonth, total } = data;
        return { newCustomersChartsData, sinceLastMonth, total };
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });

  return {
    customersInfoData,
    customersInfoPending,
    customersInfoError,
    customersInfoMessageError,
  };
}
