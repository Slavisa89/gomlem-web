import { useParams } from "react-router-dom";
import { formatterLastSeen, formatterString } from "@/script/script";
import { twMerge } from "tailwind-merge";
import useBulletinDetails from "@hooks/useBulletinDetails";
import Icon from "@components/Icon";
import SkeletonLoadingMessage from "./SkeletonLoadingMessage";

export default function Message({ activeId }) {
  const user = useParams();
  const {
    bulletinDetailsData,
    bulletinDetailsPending,
    bulletinDetailsError,
    // bulletinDetailsMessageError,
  } = useBulletinDetails(activeId);

  if (bulletinDetailsPending || bulletinDetailsError)
    return <SkeletonLoadingMessage />;
  const { media, userFullName, dateTime, comment, userId } =
    bulletinDetailsData;
  const messages = bulletinDetailsData.replies.map(
    ({ media, userFullName, dateTime, comment, userId }, i) => {
      return (
        <div
          className={twMerge(
            "border flex border-light-100 rounded-[20px] gap-3 flex-col w-full p-3 pt-2 text-xs",
            user.userId == userId && "bg-light-100"
          )}
          key={i}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {media ? (
                <img
                  src={`data:image/gif;base64,${media}`}
                  className="w-10 h-10 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-light-100">
                  <Icon name="person" className="w-6 h-6" />
                </div>
              )}
              <span>{formatterString(userFullName)}</span>
            </div>
            <span className="text-text-softGary text-[10px] font-normal">
              {formatterLastSeen(dateTime)}
            </span>
          </div>
          <p>{comment}</p>
        </div>
      );
    }
  );
  return (
    <div className="flex flex-col pl-[30px] pb-[63px] w-[343px] pr-[69px]  h-[515px] overflow-y-scroll hiddenScroll">
      <div
        className={twMerge(
          "border flex border-light-100 rounded-[20px] gap-3 flex-col w-full p-3 pt-2 text-xs",
          user.userId == userId && "bg-light-100"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {media ? (
              <img
                src={`data:image/gif;base64,${media}`}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-light-100">
                <Icon name="person" className="w-6 h-6" />
              </div>
            )}
            <span>{formatterString(userFullName)}</span>
          </div>
          <span className="text-text-softGary text-[10px] font-normal">
            {formatterLastSeen(dateTime)}
          </span>
        </div>
        <p>{comment}</p>
      </div>
      <p className="mt-[15px] mb-[17px]">
        {bulletinDetailsData.replies.length} Replies
      </p>
      <div className="flex flex-col gap-3">{messages}</div>
    </div>
  );
}
