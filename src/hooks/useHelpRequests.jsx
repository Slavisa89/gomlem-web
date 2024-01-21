import { useQuery } from "@tanstack/react-query";
import { helpRequests } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useHelpRequests(userId) {
  const { data, isPending, error, isError } = useQuery({
    queryKey: [`helpRequests`, userId],
    queryFn: async () => {
      try {
        const { data } = await helpRequests(userId);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return { data, isPending, error, isError };
}
