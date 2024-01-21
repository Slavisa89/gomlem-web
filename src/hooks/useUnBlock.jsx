import { alertError } from "@services/scripts/scripts";
import { useMutation } from "@tanstack/react-query";
import { unBlockCustomer } from "@services/api/admin";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ToastSuccess } from '@components/Alert';
export default function useUnBlock() {
  const client = useQueryClient();
  const { userId } = useParams();
  const { mutateAsync: mutateUnblockCustomer, isPending: unBlockPending } =
    useMutation({
      mutationFn: async () => {
        try {
          const res = await unBlockCustomer(userId);
          ToastSuccess.fire({icon:"success",title:"unBlocked Customer"});
          return await res;
        } catch (error) {
          const { response } = error;
          alertError(response);
          throw new error(error);
        }
      },
      onSuccess: () => {
        client.invalidateQueries([`customersDetails-${userId}`]);
      },
    });
  return { mutateUnblockCustomer, unBlockPending };
}
