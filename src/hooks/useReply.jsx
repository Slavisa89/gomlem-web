import { useQuery } from "@tanstack/react-query";
import { replies } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useReply(replyId = "") {
  if (!replyId) return;
  const {
    data: replyData,
    isPending: replyPending,
    isError: replyError,
  } = useQuery({
    queryKey: [`replies`, replyId],
    queryFn: async () => {
      try {
        const { data } = await replies(replyId);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    replyData,
    replyPending,
    replyError,
  };
}
