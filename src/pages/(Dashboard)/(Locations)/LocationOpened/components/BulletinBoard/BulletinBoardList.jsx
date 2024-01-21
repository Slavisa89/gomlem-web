import React, { useState } from "react";
import ListReplies from "./ListReplies";
import Comment from "./Comment";

import LoadingSkeleton from "./LoadingSkeleton";
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

export default function BulletinBoardList() {
  const [BulletinBoardPending, setPending] = useState(true);
  const BulletinBoardError = false;
  setTimeout(() => {
    setPending(false);
  }, 2000);
  return (
    <div className="pt-[22px] pl-[26px] pr-5 bg-white h-[726px] overflow-y-scroll shadow-boo-2 rounded-b-[20px]">
      {!BulletinBoardPending && !BulletinBoardError ? (
        <>
          <Comment data={BulletinBoardData} />
          <ListReplies data={BulletinBoardData?.replies} />
        </>
      ) : (
        <LoadingSkeleton count={6} />
      )}
    </div>
  );
}
