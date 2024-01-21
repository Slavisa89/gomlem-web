import React, { useState } from "react";
import Filters from "./Filters";
import Icon from "@components/Icon";
import MenuFilters from "./MenuFilters";
import { getFormattedDate } from "@/script/script";
import FormGetMessage from "./FormGetMessage";
import useGetUserId from "@hooks/useGetUserId";
export default function FormSendEmail() {
  const initParam = {
    RegisteredFrom: "",
    RegisteredTo: getFormattedDate(0),
    WithHelperProfile: false,
    WithPlannedTrip: false,
    Country: "",
  };
  const [param, setParam] = useState({ RegisteredTo: getFormattedDate(0) });
  function handlerParam(newParam) {
    setParam(newParam);
  }

  const {
    userId,
    userIdPending,
    userIdError,
    // userIdMessageError,
  } = useGetUserId(param);
  return (
    <div>
      <div className="border-b border-light-100 mt-3 pb-3 flex items-center justify-between pl-[26px] h-full">
        <div className="flex items-center gap-4 text-sm">
          <span className="font-semibold">To:</span>
          <button className="flex gap-[15px] items-center py-[10px] px-5 rounded-2xl  bg-light-100 text-xs font-medium">
            Everyone{" "}
            {userIdPending || userIdError ? (
              <Icon name="loadingBlue" className="w-4 h-4" />
            ) : (
              userId.length
            )}
          </button>
        </div>
        <Filters>
          <MenuFilters
            ModalName={"b"}
            initFilter={initParam}
            handlerParam={handlerParam}
            isDisable={userIdPending || userIdError}
          />
        </Filters>
      </div>
      <FormGetMessage
        isPending={userIdPending || userIdError}
        userId={userId}
      />
    </div>
  );
}
