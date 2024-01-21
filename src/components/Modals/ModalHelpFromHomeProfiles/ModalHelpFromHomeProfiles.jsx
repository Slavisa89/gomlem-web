import CardHelpFromHomeProfile from "./CardHelpFromHomeProfile";
import useHelpFromHomeProfile from "@hooks/useHelpFromHomeProfile";
import Img from "@components/Img";
import LoadingSkeleton from "./LoadingSkeleton";

export default function ModalHelpFromHomeProfiles({ userId, userData = null }) {
  const {
    helpFromHomeProfilesData,
    helpFromHomeProfilesPending,
    helpFromHomeProfilesError,
    // helpFromHomeProfilesMessageError,
  } = useHelpFromHomeProfile(userId);

  const Cards = () => {
    if (!helpFromHomeProfilesData.length) {
      return (
        <div className="flex items-center justify-center">
          Sample message for this box being empty
        </div>
      );
    }

    const card = helpFromHomeProfilesData.map((data, i) => (
      <CardHelpFromHomeProfile key={i} data={data} border={userData} />
    ));
    return card;
  };
  return (
    <ul className="flex flex-col gap-[18px]">
      {helpFromHomeProfilesPending || helpFromHomeProfilesError ? (
        <LoadingSkeleton count={4} border={userData} />
      ) : (
        <>
          {userData ? (
            <div className="flex items-center gap-2 mt-6">
              <Img
                src={userData?.media}
                className="w-[50px] h-[50px] rounded-full"
              />
              <span className="text-sm font-medium">{userData.fullName}</span>
            </div>
          ) : (
            ""
          )}
          <Cards />
        </>
      )}
    </ul>
  );
}
