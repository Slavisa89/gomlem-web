import CardContact from "./CardContact";
import BoxSkeleton from "@skeleton/BoxSkeleton";
import ButtonContact from "./ButtonContact";
import useCustomersDetails from "@hooks/useCustomersDetails";
import { useParams } from "react-router-dom";
export default function ModalEmergencyContact() {
  const { userId } = useParams();
  const {
    customersDetailsData,
    customersDetailsPending,
    customersDetailsError,
    // customersDetailsMessageError,
  } = useCustomersDetails(userId);
  return (
    <div className="flex flex-col px-[46px] pt-[49px] pb-[89px] gap-6 bg-white w-[532px] h-[473px] rounded-[20px] shadow-boo-2">
      {customersDetailsPending || customersDetailsError ? (
        <div className="flex justify-center gap-6">
          <div className="flex flex-col gap-6">
            <BoxSkeleton width={180} height={250} />
            <BoxSkeleton width={180} height={50} />
          </div>
          <div className="flex flex-col gap-6">
            <BoxSkeleton width={180} height={250} />
            <BoxSkeleton width={180} height={50} />
          </div>
        </div>
      ) : (
        <>
          {customersDetailsData.emergencyContacts.length == 0 ? (
            <div className="h-[473px] flex justify-center items-center">It does not have an emergency contact</div>
          ) : (
            <>
              <div className="flex gap-6">
                <CardContact
                  emergencyContactsData={
                    customersDetailsData?.emergencyContacts
                  }
                />
              </div>
              <ButtonContact
                emergencyContactsData={customersDetailsData?.emergencyContacts}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
