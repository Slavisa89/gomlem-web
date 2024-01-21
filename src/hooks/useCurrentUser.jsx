import { useQuery } from "@tanstack/react-query";
import { profile } from "@services/api/user.js";
import { alertError } from "@services/scripts/scripts";

export default function useCurrentUser() {
  const {
    isPending: currentUserPending,
    data: currentUserData,
    error: currentUserMessageError,
    isError: currentUserError,
  } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      try {
        const { data } = await profile();
        const { fullName, uploadedPhoto } = data;
        return {
          fullName,
          imgSrc: `data:image/gif;base64,${uploadedPhoto}`,
          uploadedPhoto,
        };
      } catch (error) {
        const { response } = error;
        alertError(response);
        throw new error(error);
      }
    },
    
  });
  return {
    currentUserPending,
    currentUserData,
    currentUserMessageError,
    currentUserError,
  };
}
