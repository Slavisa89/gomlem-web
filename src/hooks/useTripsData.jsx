import { tripsInfo } from "@services/api/admin.js";
import { useQuery } from "@tanstack/react-query";
import { alertError } from "@services/scripts/scripts";

export default function useTripsData() {
  const {
    isPending: tripsPending,
    data: trips,
    error: tripsMessageError,
    isError: tripsError,
  } = useQuery({
    queryKey: ["tripsChart"],
    queryFn: async () => {
      try {
        const { data } = await tripsInfo();
        const { tripsChartsData } = data;
        return { tripsChartsData };
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return { tripsPending, trips, tripsMessageError, tripsError };
}
