import { useQuery } from "@tanstack/react-query";
import { alertError } from "@services/scripts/scripts";
import { fakeDataAppPayments } from "@services/utils/dummydata";
import { appPaymentsTableData } from "@services/api/admin";

export default function useAppPaymentsTable(param) {
  const { isPending, data, error, isError } = useQuery({
    queryKey: ["useAppPaymentsTable", param],
    queryFn: async () => {
      try {
        // const {data} = await appPaymentsTableData(param)
        const data = fakeDataAppPayments.TABLE_DATA;
        return data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });

  return { isPending, data, error, isError };
}
