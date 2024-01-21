import { useQuery } from "@tanstack/react-query";
import { customerId } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useGetUserId(param) {
  const {
    data: userId,
    isPending: userIdPending,
    error: userIdMessageError,
    isError: userIdError,
  } = useQuery({
    queryKey: ["Id", param],
    queryFn: async () => {
      try {
        const { data } = await customerId(param);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    userId,
    userIdPending,
    userIdMessageError,
    userIdError,
  };
}
