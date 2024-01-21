import { alertError } from "@services/scripts/scripts";
import { useMutation } from "@tanstack/react-query";
import { blockCustomer } from "@services/api/admin";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { ToastSuccess } from '@components/Alert';
export default function useBlock() {
  const client = useQueryClient();
  const { userId } = useParams();
  const { mutateAsync: mutateBlockCustomer, isPending: blockPending } =
    useMutation({
      mutationFn: async () => {
        try {
          const res = await blockCustomer(userId);
          ToastSuccess.fire({icon:"success",title:"blocked Customer"});
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
  return { mutateBlockCustomer, blockPending };
}
