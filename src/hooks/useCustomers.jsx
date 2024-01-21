import { useQuery } from "@tanstack/react-query";
import { customers } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useCustomers({ param = "" }) {
  const {
    data: newCustomers,
    isPending: newCustomersPending,
    error: newCustomersMessageError,
    isError: newCustomersError,
  } = useQuery({
    queryKey: [`Customers`, param],
    queryFn: async () => {
      try {
        const { data } = await customers(param);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });

  return {
    newCustomers,
    newCustomersPending,
    newCustomersMessageError,
    newCustomersError,
  };
}
