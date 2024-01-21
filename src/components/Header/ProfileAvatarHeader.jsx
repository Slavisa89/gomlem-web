import Avatar from "./Avatar";
import useCurrentUser from "@hooks/useCurrentUser";
export default function ProfileAvatarHeader() {

  const {
    currentUserPending,
    currentUserData,
    currentUserMessageError,
    // currentUserError,
  } = useCurrentUser();
  return (
    <div className="flex gap-3">
      <Avatar
        isPending={currentUserPending || currentUserMessageError}
        uploadedPhoto={currentUserData?.uploadedPhoto}
        imgSrc={currentUserData?.imgSrc}
      />
      <div className="flex flex-col justify-center gap-1">
        <span>
          {!currentUserPending &&
            !currentUserMessageError &&
            currentUserData.fullName}
        </span>
        <span className="text-sm text-gary">Admin</span>
      </div>
    </div>
  );
}
