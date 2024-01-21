import React, { useState } from "react";
import CloseButton from "@components/CloseButton";
import Icon from "@components/Icon";

export default function HeaderModal({ handlerActiveModal }) {
  const countTotalTravelers = 112;
  const [TotalTravelPending, setPending] = useState(true);
  const TotalTravelError = false;
  setTimeout(() => {
    setPending(false);
  }, 5000);
  return (
    <div className="flex justify-between py-3 pl-[34px] pr-[17px] rounded-t-3xl text-white items-center bg-text w-full">
      <div className="flex items-center gap-2">
        <span>ModalTotal Travelers</span>
        {!TotalTravelPending && !TotalTravelError ? (
          <span className="text-sm text-text-softGary">
            ({countTotalTravelers})
          </span>
        ) : (
          <Icon name="loading" className="w-5 h-5" />
        )}
      </div>
      <div className="flex gap-2">
        <CloseButton closeFn={handlerActiveModal} />
      </div>
    </div>
  );
}
