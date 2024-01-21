import React, { useState } from "react";
import Icon from "@components/Icon";
import UserBulletinBoard from "./UserBulletinBoard";
import ModalBulletinBoard from "@modals/ModalBulletinBoard";
import useBulletinList from "./../../../../../../hooks/useBulletinList";
import { useParams } from "react-router-dom";
import SkeletonLoading from "./../Inbox/SkeletonLoading";
export default function BulletinBoard() {
  const [activeModal, setActiveModal] = useState(false);
  function handlerActiveModal(id) {
    setActiveModal(id);
  }

  const { userId } = useParams();
  const {
    bulletinListData,
    bulletinListPending,
    bulletinListError,
    // bulletinListMessageError,
  } = useBulletinList(userId);

  return (
    <div className="pt-9 w-[300px] px-5 pb-2 bg-white rounded-2xl shadow-boo-2 mt-12">
      <div className="flex justify-between">
        <span className="font-semibold">Bulletin Board</span>
        <button
          className="flex items-center gap-3"
          onClick={() => handlerActiveModal("Bulletin Board")}
          disabled={
            bulletinListPending ||
            bulletinListError ||
            bulletinListData.length == 0
          }
        >
          <span className="text-sm font-semibold text-text-lighter">
            View All
          </span>
          <Icon name="arrow" className="w-[18px] h-[14px]" />
        </button>
      </div>
      <div className="flex flex-col gap-5 mt-8">
        {/* {pending ? ( */}
        {bulletinListPending || bulletinListError ? (
          <SkeletonLoading />
        ) : (
          <>
            <UserBulletinBoard
              listBulletinBoard={bulletinListData}
              handlerId={handlerActiveModal}
            />
          </>
        )}
        {!bulletinListPending &&
          !bulletinListError &&
          bulletinListData.length > 0 && (
            <ModalBulletinBoard
              activeModal={activeModal}
              handlerActiveModal={handlerActiveModal}
              bulletinListData={bulletinListData}
            />
          )}
      </div>
    </div>
  );
}
