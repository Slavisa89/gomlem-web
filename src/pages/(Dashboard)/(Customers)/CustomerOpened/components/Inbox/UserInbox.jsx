import { formatterString, formatterLastSeen } from "@/script/script";
import Icon from "@components/Icon";
export default function UserInbox({ data, handlerActiveModal }) {
  const users = data.map(({ content, media, from, dateTime, id }, i) => {
    return (
      <div className="flex justify-between text-[10px]" key={i}>
        <div className="flex gap-2">
          {media ? (
            <img
              src={`data:image/gif;base64,${media}`}
              className="w-10 h-10 rounded-full"
            />
          ) : (
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50">
              <Icon name="person" className="w-7 h-7" />
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
            onClick={() => handlerActiveModal({ id, media, from })}
            className="underline text-text-softGary"
          >
            View Conversation
          </button>
        </div>
      </div>
    );
  });
  return <>{users}</>;
}
