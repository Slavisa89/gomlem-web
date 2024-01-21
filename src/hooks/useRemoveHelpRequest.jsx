import React, { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { alertError } from "@services/scripts/scripts";
import { ToastSuccess } from "@components/Alert";
import { removeHelpRequest } from "@services/api/admin";
export default function useRemoveHelpRequest() {
  const selectHash = useRef();
  const client = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ id, hash }) => {
      try {
        selectHash.current = hash;
        const res = await removeHelpRequest(id);
        ToastSuccess.fire({
          icon: "success",
          title: `Remove help request by Id = ${id}`,
        });
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
    onSuccess: () => {
      client.removeQueries({
        queryKey: selectHash.current,
      });
      if (selectHash.current[0] == "helpRequestsDetails") {
        client.refetchQueries({
          queryKey: ["useHelpRequestsInfo"],
        });
      } else {
        client.refetchQueries({
          queryKey: ["customersDetails", selectHash.current[1]],
        });
      }
    },
  });

  return { mutate, isPending };
}
