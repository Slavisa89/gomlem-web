import { useQuery } from "@tanstack/react-query";
import { emergencyContacts } from "@services/api/user";
import { alertError } from "@services/scripts/scripts";

export default function useEmergencyContact() {
  const {
    isPending: emergencyContactsPending,
    data:  emergencyContactsData,
    error: emergencyContactsMessageError,
    isError: emergencyContactsError,
  } = useQuery({
    queryKey: ["emergencyContact"],
    queryFn: async () => {
      try {
        const { data } = await emergencyContacts();
        return data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });

  return {
    emergencyContactsData,
    emergencyContactsPending,
    emergencyContactsMessageError,
    emergencyContactsError,
  };
}
