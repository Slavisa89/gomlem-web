import { useState } from "react";
import ButtonFilterTravel from "./ButtonFilterTravel";
import TravelList from "./TravelList";
import LoadingSkeleton from "./LoadingSkeleton";

const TotalTravelData = [
  {
    fullName: "John Doe",
    startDate: "05/20/23",
    endDate: "06/20/23",
    cityId: 2023,
    media: "avatar",
  },
  {
    fullName: "John Doe",
    startDate: "05/20/23",
    endDate: "06/20/23",
    cityId: 2020,
    media: "avatar2",
  },
  {
    fullName: "John Doe",
    startDate: "05/20/23",
    endDate: "06/20/23",
    cityId: 1577,
    media: "avatar2",
  },
  {
    fullName: "John Doe",
    startDate: "05/20/23",
    endDate: "06/20/23",
    cityId: 2020,
    media: "avatar",
  },
  {
    fullName: "John Doe",
    startDate: "05/20/23",
    endDate: "06/20/23",
    cityId: 2020,
    media: "avatar",
  },
  {
    fullName: "John Doe",
    startDate: "05/20/23",
    endDate: "06/20/23",
    cityId: 2020,
    media: "avatar2",
  },
  {
    fullName: "John Doe",
    startDate: "05/20/23",
    endDate: "06/20/23",
    cityId: 2020,
    media: "avatar",
  },
];

export default function ModalTotalTravelers() {
  const [activeTravel, setActiveTravel] = useState("Active Trips");
  function handlerActiveTravel(filter) {
    setActiveTravel(filter);
  }
  const [TotalTravelPending, setPending] = useState(true);
  const TotalTravelError = false;
  setTimeout(() => {
    setPending(false);
  }, 5000);
  return (
    <div className="py-7 pl-[26px] pr-[30px]">
      <ButtonFilterTravel
        active={activeTravel}
        handlerActiveTravel={handlerActiveTravel}
      />
      {!TotalTravelPending && !TotalTravelError ? (
        <>
          <TravelList data={TotalTravelData} />
        </>
      ) : (
        <LoadingSkeleton count={5} />
      )}
    </div>
  );
}
