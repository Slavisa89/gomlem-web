import { useQuery } from "@tanstack/react-query";
import { helpFromHomeProfiles } from "@services/api/admin";
import { alertError } from "@services/scripts/scripts";

export default function useHelpFromHomeProfile(userId) {
  if (!userId) return { helpFromHomeProfilesPending: true };
  const {
    data: helpFromHomeProfilesData,
    isPending: helpFromHomeProfilesPending,
    error: helpFromHomeProfilesError,
    isError: helpFromHomeProfilesMessageError,
  } = useQuery({
    queryKey: [`HelpFromHomeProfile`, userId],
    queryFn: async () => {
      try {
        const { data } = await helpFromHomeProfiles(userId);
        return await data;
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
  });
  return {
    helpFromHomeProfilesData,
    helpFromHomeProfilesPending,
    helpFromHomeProfilesError,
    helpFromHomeProfilesMessageError,
  };
}
