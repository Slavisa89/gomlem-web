import React, { useState } from "react";
import Filters from "./Filters";
import MenuFilters from "./MenuFilters";
import Icon from "@components/Icon";
import { customerId } from "@services/api/admin";
import { useQuery } from "@tanstack/react-query";
import { getFormattedDate } from "@/script/script";
import FormGetMessageInApp from "./FormGetMessageInApp";
import useGetUserId from "@hooks/useGetUserId";

export default function FormSendMessageInApp() {
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
    <div className="flex flex-col px-[30px] pb-[26px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-full pb-3 mt-3">
          <div className="flex items-center gap-4 text-sm">
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
              ModalName={"message"}
              initFilter={initParam}
              handlerParam={handlerParam}
              isDisable={userIdPending || userIdError}
            />
          </Filters>
        </div>
      </div>
      <FormGetMessageInApp
        isPending={userIdPending || userIdError}
        userId={userId}
      />
    </div>
  );
}
