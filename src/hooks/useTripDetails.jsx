import { useQuery } from "@tanstack/react-query";
import { tripDetails } from "@services/api/trips";
import { alertError } from "@services/scripts/scripts";

export default function useTripDetails(tripId) {
  if (!tripId) return { tripDetailsPending: true };
  const {
    data: tripDetailsData,
    isPending: tripDetailsPending,
    error: tripDetailsError,
    isError: tripDetailsMessageError,
  } = useQuery({
    queryKey: ["tripDetails", tripId],
    queryFn: async () => {
      try {
        const { data } = await tripDetails(tripId);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    tripDetailsData,
    tripDetailsPending,
    tripDetailsError,
    tripDetailsMessageError,
  };
}
