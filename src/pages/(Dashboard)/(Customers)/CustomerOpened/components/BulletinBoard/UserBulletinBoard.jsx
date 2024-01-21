import { formatterString, formatterLastSeen } from "@/script/script";
import Icon from "@components/Icon";
export default function UserInbox({ listBulletinBoard, handlerId }) {
  if (!listBulletinBoard) return;
  const users = listBulletinBoard.map(
    ({ comment, location, dateTime, type, id }, i) => {
      return (
        <div className="flex justify-between text-[10px]" key={i}>
          <div className="flex gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-light-100">
              <Icon name="location2" className="h-[14px] w-3" />
            </div>
            <div className="flex flex-col text-xs font-semibold">
              <span>{formatterString(location, 20)}</span>
              <div>
                <span className="uppercase text-text-lighter">{type}</span>
                <span>-</span>
                <span className="text-[10px]">{formatterString(comment)}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-text-lighter">
              {formatterLastSeen(dateTime)}
            </span>
            <button
              onClick={() => handlerId(id)}
              className="underline text-text-softGary"
            >
              View Thread{" "}
            </button>
          </div>
        </div>
      );
    }
  );
  return <>{users}</>;
}
