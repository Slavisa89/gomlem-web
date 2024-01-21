import React, { useEffect, useRef, useState } from "react";
import ModalUserBulletinBoard from "./ModalUserBulletinBoard";
import Message from "./Message";

export default function ModalBulletinBoard({ bulletinId, bulletinListData }) {
  const [activeId, setActiveId] = useState();

  const prevbulletinIdRef = useRef(bulletinId);
  useEffect(() => {
    prevbulletinIdRef.current = bulletinId;
  }, [bulletinId]);

  if (
    bulletinId &&
    bulletinId != activeId &&
    prevbulletinIdRef.current != bulletinId &&
    bulletinId != "Bulletin Board"
  ) {
    setActiveId(bulletinId);
  }

  function handelActiveBulletinBoard(id) {
    setActiveId(id);
  }

  return (
    <div className="flex pl-6 pr-8 bg-white pt-9  rounded-b-[20px]">
      <div className="flex flex-col h-[515px] overflow-y-scroll hiddenScroll gap-2">
        <p>Bulletin Board</p>
        <ModalUserBulletinBoard
          listBulletinBoard={bulletinListData}
          handelActiveBulletinBoard={handelActiveBulletinBoard}
          activeId={activeId}
        />
      </div>
      <div className="vl ml-11"></div>
      {bulletinId == "Bulletin Board" && !activeId ? (
        <div className="flex flex-col justify-center items-center pl-[30px] pb-[63px] w-[343px] pr-[69px]  h-[515px] ">
          Select a bulletin
        </div>
      ) : (
        <Message activeId={activeId} />
      )}
    </div>
  );
}
