import { useQuery } from "@tanstack/react-query";
import { bulletinDetails } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useBulletinDetails(bulletinId) {
  if (!bulletinId) return { bulletinDetailsPending: true };
  const {
    data: bulletinDetailsData,
    isPending: bulletinDetailsPending,
    error: bulletinDetailsError,
    isError: bulletinDetailsMessageError,
  } = useQuery({
    queryKey: ["bulletinDetails", bulletinId],
    queryFn: async () => {
      try {
        const { data } = await bulletinDetails(bulletinId);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    bulletinDetailsData,
    bulletinDetailsPending,
    bulletinDetailsError,
    bulletinDetailsMessageError,
  };
}
