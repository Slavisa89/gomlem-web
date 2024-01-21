import { useQuery } from "@tanstack/react-query";
import { helpRequestDetails } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useHelpRequestDetails(id) {
  if (!id) return;
  const { data, isPending, isError } = useQuery({
    queryKey: ["helpRequestsDetails", id],
    queryFn: async () => {
      try {
        const { data } = await helpRequestDetails(id);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return { data, isPending, isError };
}
