import React, { useState } from "react";
import FormModalHelpNumber from "@components/FormModalHelpNumber/FormModalHelpNumber";
import SkeletonLoading from "@components/FormModalHelpNumber/SkeletonLoading";

export default function ModalEditLocalHelpNumber({ numberId }) {
  const editLocalHelpNumberData = {
    organizationName: "Ambulance",
    number: "0000000000000",
    numberId: "2",
  };
  const [editLocalHelpNumberPending, setPending] = useState(true);
  const editLocalHelpNumberError = false;
  setTimeout(() => {
    setPending(false)
  }, 8000);
  return (
    <div className="w-[410px] h-[570px] p-9 pt-14 pb-7">
      {!editLocalHelpNumberPending && !editLocalHelpNumberError ? (
        <>
          <div className="bg-light-100 rounded-[20px] flex justify-center items-center gap-6 flex-col min-w-[340px] h-[110px] relative">
            <span className="text-[18px] font-semibold">
              {editLocalHelpNumberData.organizationName}
            </span>
            <span className="text-sm">{editLocalHelpNumberData.number}</span>
          </div>
          <FormModalHelpNumber data={editLocalHelpNumberData} />
        </>
      ) : (
        <SkeletonLoading />
      )}
    </div>
  );
}
