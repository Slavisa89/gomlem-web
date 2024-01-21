import React, { useState } from "react";
import HeadCustomerTopLocations from "./HeadCustomerTopLocations";
import MapTopCustomer from "./MapTopCustomer";
import DataLocation from "./DataLocation";
import BoxSkeleton from "@skeleton/BoxSkeleton";
import useTopCustomerLocation from "@hooks/useTopCustomerLocation";

export default function TopCustomerLocations() {
  const [modeLocation, setModeLocation] = useState("countries");
  function handlerModeLocation(mode) {
    setModeLocation(mode);
  }

  const {
    topCustomerLocationData,
    topCustomerLocationPending,
    topCustomerLocationError,
    // topCustomerLocationMessageError,
  } = useTopCustomerLocation();
  return (
    <div className="w-full">
      <HeadCustomerTopLocations
        modeLocation={modeLocation}
        handlerModeLocation={handlerModeLocation}
      />
      {topCustomerLocationError ? (
        <BoxSkeleton height={400} />
      ) : (
        <div>
          <MapTopCustomer
            dataMap={topCustomerLocationData?.[modeLocation]}
            isPending={topCustomerLocationPending || topCustomerLocationError}
          />
          <DataLocation
            countriesData={topCustomerLocationData?.[modeLocation]}
            isPending={topCustomerLocationPending || topCustomerLocationError}
          />
        </div>
      )}
    </div>
  );
}
