import { useQuery } from "@tanstack/react-query";
import { customerTrips } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useCustomerTrips(userId) {
  const {
    data: customerTripsData,
    isPending: customerTripsPending,
    error: customerTripsError,
    isError: customerTripsMessageError,
    refetch,
  } = useQuery({
    queryKey: [`customerTrips`, userId],
    queryFn: async () => {
      try {
        const { data } = await customerTrips(userId);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    customerTripsData,
    customerTripsPending,
    customerTripsError,
    customerTripsMessageError,
    refetch,
  };
}
