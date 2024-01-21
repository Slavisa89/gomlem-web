import { useQuery } from "@tanstack/react-query";
import { customerInbox } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useCustomerInbox(userId, params) {
  const {
    data: customerInboxData,
    isPending: customerInboxPending,
    error: customerInboxError,
    isError: customerInboxMessageError,
  } = useQuery({
    queryKey: [`customerInbox`, userId, params],
    queryFn: async () => {
      try {
        const { data } = await customerInbox(userId, params);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    customerInboxData,
    customerInboxPending,
    customerInboxError,
    customerInboxMessageError,
  };
}
