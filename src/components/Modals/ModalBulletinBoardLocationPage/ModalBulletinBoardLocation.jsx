import LoadingSkeleton from "./LoadingSkeleton";
import ListReplies from "./ListReplies";
import { useState } from "react";
import FilterDate from "@components/GroupFilterButton/FilterDate";
const BulletinBoardData = {
  media: "avatar",
  fullName: "Shimon Kranz",
  comment:
    "Ya I’m actually in that area! Just let me know exactly where you’dlike to meet",
  dataTime: "2 hrs ago",
  replies: [
    {
      media: "avatar",
      fullName: "Shimon Kranz",
      comment:
        "Ya I’m actually in that area! Just let me know exactly where you’dlike to meet",
      dataTime: "2 hrs ago",
    },
    {
      media: "avatar",
      fullName: "Shimon Kranz",
      comment:
        "Ya I’m actually in that area! Just let me know exactly where you’dlike to meet",
      dataTime: "2 hrs ago",
    },
    {
      media: "avatar",
      fullName: "Shimon Kranz",
      comment:
        "Ya I’m actually in that area! Just let me know exactly where you’dlike to meet",
      dataTime: "2 hrs ago",
    },
    {
      media: "avatar",
      fullName: "Shimon Kranz",
      comment:
        "Ya I’m actually in that area! Just let me know exactly where you’dlike to meet",
      dataTime: "2 hrs ago",
    },
    {
      media: "avatar",
      fullName: "Shimon Kranz",
      comment:
        "Ya I’m actually in that area! Just let me know exactly where you’dlike to meet",
      dataTime: "2 hrs ago",
    },
  ],
};

export default function ModalBulletinBoardLocation() {
  const [BulletinBoardPending, setPending] = useState(true);
  const BulletinBoardError = false;
  setTimeout(() => {
    setPending(false);
  }, 8000);
  const [activeDate, setActiveDate] = useState("Today");
  function handleActiveDate(mode) {
    setActiveDate(mode);
  }
  return (
    <div className="py-10 px-7 bg-white w-[390px] rounded-b-[20px] h-[526px] overflow-y-scroll">
      {!BulletinBoardPending && !BulletinBoardError ? (
        <>
          <FilterDate
            active={activeDate}
            handlerActiveDate={handleActiveDate}
          />
          <ListReplies data={BulletinBoardData?.replies} />
        </>
      ) : (
        <LoadingSkeleton count={6} />
      )}
    </div>
  );
}
