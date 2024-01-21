import { useQuery } from "@tanstack/react-query";
import { customerInboxChat } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useCustomerInboxChat(userId, chatId, params) {
  if (!chatId) {
    return { customerInboxChatPending: true };
  }
  const {
    data: customerInboxChatData,
    isPending: customerInboxChatPending,
    error: customerInboxChatError,
    isError: customerInboxChatMessageError,
  } = useQuery({
    queryKey: ["customerInboxChat", userId, chatId],
    queryFn: async () => {
      try {
        const { data } = await customerInboxChat(userId, chatId);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    customerInboxChatData,
    customerInboxChatPending,
    customerInboxChatError,
    customerInboxChatMessageError,
  };
}
