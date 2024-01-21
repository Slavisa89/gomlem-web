import { useQuery } from "@tanstack/react-query";
import { supportInfo } from "@services/api/admin.js";
import { alertError } from "@services/scripts/scripts";

export default function useSupportInfoData() {
  const {
    isPending: supportInfoPending,
    data: supportInfoData,
    error: supportInfoMessageError,
    isError: supportInfoError,
  } = useQuery({
    queryKey: ["supportInfoData"],
    queryFn: async () => {
      try {
        const { data } = await supportInfo();
        return data; 
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    supportInfoPending,
    supportInfoData,
    supportInfoError,
    supportInfoMessageError,
  };
}
