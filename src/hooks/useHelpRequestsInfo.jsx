import { useQuery } from "@tanstack/react-query";
import { helpRequestsInfo } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useHelpRequestsInfo() {
  const {
    isPending: helpRequestsInfoPending,
    data: helpRequestsInfoData,
    error: helpRequestsInfoMessageError,
    isError: helpRequestsInfoError,
  } = useQuery({
    queryKey: ["useHelpRequestsInfo"],
    queryFn: async () => {
      try {
        const { data } = await helpRequestsInfo();
        return data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });

  return {
    helpRequestsInfoPending,
    helpRequestsInfoData,
    helpRequestsInfoMessageError,
    helpRequestsInfoError,
  };
}
