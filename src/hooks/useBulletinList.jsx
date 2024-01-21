import { useQuery } from "@tanstack/react-query";
import { bulletinList } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useBulletinList(userId) {
  const {
    data: bulletinListData,
    isPending: bulletinListPending,
    error: bulletinListError,
    isError: bulletinListMessageError,
  } = useQuery({
    queryKey: ["bulletinList", userId],
    queryFn: async () => {
      try {
        const { data } = await bulletinList(userId);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    bulletinListData,
    bulletinListPending,
    bulletinListError,
    bulletinListMessageError,
  };
}
