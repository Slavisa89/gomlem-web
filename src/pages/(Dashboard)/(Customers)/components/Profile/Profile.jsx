import Avatar from "./Avatar";
import BoxSkeleton from "@skeleton/BoxSkeleton";
import useCurrentUser from "@hooks/useCurrentUser";

export default function Profile() {
  const {
    currentUserPending,
    currentUserData,
    // currentUserMessageError,
    currentUserError,
  } = useCurrentUser();

  return (
    <div className="flex items-center gap-2 font-normal">
      <Avatar
        isPending={currentUserPending || currentUserError}
        uploadedPhoto={currentUserData?.uploadedPhoto}
        imgSrc={currentUserData?.imgSrc}
      />
      {currentUserPending || currentUserError ? (
        <BoxSkeleton
          height={20}
          width={100}
          className="mb-4 rounded-xl"
          selectTheme="blue"
        />
      ) : (
        <span className="text-black">{currentUserData.fullName}</span>
      )}
    </div>
  );
}
