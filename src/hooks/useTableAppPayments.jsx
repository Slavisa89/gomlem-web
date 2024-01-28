import { useQuery } from "@tanstack/react-query";
import { alertError } from "@services/scripts/scripts";
import { fakeDataAppPayments } from "@services/utils/dummydata";

export default function useTableAppPaymens() {
  const { isPending, data, error, isError } = useQuery({
    queryKey: ["app-payment"],
    queryFn: async () => {
      try {
        // TODO: put correct api service here to fetch app payments data
        return fakeDataAppPayments.TABLE_DATA;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });

  return { isPending, data, error, isError };
}
