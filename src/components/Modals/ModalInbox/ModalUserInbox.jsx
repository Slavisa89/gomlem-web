import { formatterString, formatterLastSeen } from "@/script/script";
import Img from "@components/Img";
import { twMerge } from "tailwind-merge";
import Icon from "@components/Icon";
export default function UserInbox({ usersInbox, handelActiveChat, activeId }) {
  const Users = () =>
    usersInbox.map(({ id, content, media, from, dateTime, formId }, i) => {
      return (
        <div
          onClick={() => handelActiveChat({ id, media, from })}
          className={twMerge(
            "flex justify-between items-center text-[10px] p-[10px] cursor-pointer rounded-[10px] h-[60px] w-[285px] hover:bg-light-100",
            activeId == id && "bg-light-100"
          )}
          key={i}
        >
          <div className="flex gap-2">
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
            <div className="flex flex-col">
              <span className="text-sm font-semibold">
                {formatterString(from, 12)}
              </span>
              <span>{formatterString(content, 15)}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-text-lighter">
              {formatterLastSeen(dateTime)}
            </span>
            <button
              onClick={() => handelActiveChat({ id, media, from })}
              className={twMerge(
                "text-text-softGary underline",
                activeId == id && "opacity-0"
              )}
            >
              View Conversation
            </button>
          </div>
        </div>
      );
    });
  return <Users />;
}
