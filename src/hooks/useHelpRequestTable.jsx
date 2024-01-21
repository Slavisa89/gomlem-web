import { useQuery } from "@tanstack/react-query";
import { helpRequestTable } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useHelpRequestTable(param) {
  const {
    data: helpRequestTableData,
    isPending: helpRequestTablePending,
    error: helpRequestTableError,
    // isError: HelpRequestTableMessageError,
  } = useQuery({
    queryKey: [`useHelpRequestTable`, param],
    queryFn: async () => {
      try {
        const { data } = await helpRequestTable(param);
        return data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    helpRequestTableData,
    helpRequestTablePending,
    helpRequestTableError,
    // HelpRequestTableMessageError,
  };
}
