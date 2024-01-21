import Img from "@components/Img";
import { getTime } from "@/script/script";

export default function Replies({ listReply, handlerViewConversation }) {
  const replies = listReply.map(
    ({ fullName, dateTime, media, message, chatId }, i) => {
      return (
        <div key={i}>
          <div className="flex items-end justify-between mb-2">
            <div className="flex items-center gap-2">
              <Img src={media} className="w-10 h-10 rounded-full" />
              <span className="text-sm font-semibold">{fullName}</span>
            </div>
            <span className="text-[10px] text-text-secondary font-normal">
              {getTime(dateTime)}
            </span>
          </div>
          <p className="w-full pl-[11px] pr-[30px] pt-[19px] pb-[14px] rounded-[20px] text-xs bg-light-200">
            {message}
          </p>
          <button
            className="underline text-[10px] ml-auto block mt-[10px]"
            onClick={() => handlerViewConversation(chatId)}
          >
            View Full Conversation
          </button>
        </div>
      );
    }
  );
  return <div className="flex flex-col gap-4">{replies}</div>;
}
