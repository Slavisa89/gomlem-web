import { useQuery } from "@tanstack/react-query";
import { topLocations } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useTopCustomerLocation() {
  const {
    data: topCustomerLocationData,
    isPending: topCustomerLocationPending,
    isError: topCustomerLocationError,
    error: topCustomerLocationMessageError,
  } = useQuery({
    queryKey: ["topCustomerLocations"],
    queryFn: async () => {
      try {
        const { data } = await topLocations();
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    topCustomerLocationData,
    topCustomerLocationPending,
    topCustomerLocationError,
    topCustomerLocationMessageError,
  };
}
