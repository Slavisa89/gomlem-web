import { formatterString, formatterLastSeen } from "@/script/script";
import { twMerge } from "tailwind-merge";
import Icon from "@components/Icon";
export default function ModalUserBulletinBoard({
  listBulletinBoard,
  handelActiveBulletinBoard,
  activeId,
}) {
  if(!listBulletinBoard)return <div>Empty List</div>
  const users = listBulletinBoard.map(
    ({ comment, location, dateTime, id, type }, i) => {
      return (
        <div
          onClick={() => handelActiveBulletinBoard(id)}
          className={twMerge(
            "flex justify-between items-center text-[10px] p-[10px] rounded-[10px] h-[60px] w-[285px] hover:bg-light-100 cursor-pointer",
            activeId == id && "bg-light-100"
          )}
          key={i}
        >
          <div className="flex gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-light-100">
              <Icon name="location2" className="h-[14px] w-3" />
            </div>
            <div className="flex flex-col items-start justify-center gap-1 text-xs font-semibold">
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
              className={twMerge(
                "underline text-text-softGary",
                activeId == id && "opacity-0"
              )}
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
