import React, { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { removeTrip } from "@services/api/trips";
import { alertError } from "@services/scripts/scripts";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { ToastSuccess } from "@components/Alert";
export default function useRemoveTrip() {
  const client = useQueryClient();
  const { userId } = useParams();

  const selectTripId = useRef();
  const { mutate, isPending } = useMutation({
    mutationFn: async (tripId) => {
      try {
        selectTripId.current = tripId;
        const res = await removeTrip(tripId);
        ToastSuccess.fire({ icon: "success", title: "Remove Trip" });
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
    onSuccess: () => {
      client.removeQueries({
        queryKey: ["tripDetails", selectTripId.current],
      });
      client.invalidateQueries(["customerTrips", userId]);
    },
  });

  return { mutate, isPending };
}
