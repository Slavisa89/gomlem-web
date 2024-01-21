import React, { useState } from "react";
import Table from "@components/NewTable";
import Thead from "@components/NewTable/Thead";
import Tbody from "@components/NewTable/Tbody";
import TRowTrips from "@components/NewTable/TRowTrips";
import ModalTripProfile from "@modals/ModalTripProfile";
import useCustomerTrips from "@hooks/useCustomerTrips";
import { useParams } from "react-router-dom";
import Icon from "@components/Icon";

export default function Trips() {
  const dataHead = ["Location", "Dates", "Help Requests", "Trip profile"];

  const { userId } = useParams();
  const {
    customerTripsData,
    customerTripsPending,
    customerTripsError,
    // customerTripsMessageError,
  } = useCustomerTrips(userId);

  const [activeModal, setActiveModal] = useState(false);
  function handlerActiveModal(nameModal) {
    if (!activeModal) {
      setActiveModal(nameModal);
      return;
    }
    if (activeModal && nameModal == activeModal) {
      setActiveModal(false);
      return;
    }
    if (activeModal && nameModal != activeModal) {
      setActiveModal(nameModal);
      return;
    }
  }
  return (
    <div className="pl-[42px] flex flex-col gap-[22px] w-full">
      <span className="text-[28px] font-semibold flex items-center gap-2">
        Trips{" "}
        <p className="flex text-sm">
          {customerTripsPending || customerTripsError ? (
            <Icon name="loadingBlue" className="w-4 h-4" />
          ) : (
            `(${customerTripsData.length})`
          )}
        </p>
      </span>
      <Table typeTable="Trips">
        <Thead dataHead={dataHead} />
        <Tbody isPending={customerTripsPending}>
          {!customerTripsPending &&
            !customerTripsError &&
            customerTripsData.length > 0 &&
            customerTripsData.map((rowData, i) => {
              return (
                <TRowTrips
                  key={i}
                  body={rowData}
                  handlerActiveModal={handlerActiveModal}
                />
              );
            })}
            {/* For Empty Table */}
          {!customerTripsPending &&
            !customerTripsError &&
            customerTripsData.length == 0 && (
              <div className="w-full h-[100px] flex justify-center items-center">
                There is no trip
              </div>
            )}
        </Tbody>
      </Table>
      {!customerTripsPending &&
        !customerTripsError &&
        customerTripsData?.length > 0 && (
          <ModalTripProfile
            handlerActiveModal={handlerActiveModal}
            activeModal={activeModal}
          />
        )}
    </div>
  );
}
