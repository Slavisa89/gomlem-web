import { useQuery } from "@tanstack/react-query";
import { customersDetails } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useCustomersDetails(userId) {
  const {
    isPending: customersDetailsPending,
    data: customersDetailsData,
    error: customersDetailsError,
    isError: customersDetailsMessageError,
  } = useQuery({
    queryKey: ["customersDetails", userId],
    queryFn: async () => {
      try {
        const { data } = await customersDetails(userId);
        return data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });

  return {
    customersDetailsData,
    customersDetailsPending,
    customersDetailsError,
    customersDetailsMessageError,
  };
}
