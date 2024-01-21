import { useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import HelpersList from "./HelpersList"
const TotalHelpersData = [
  {
    fullName: "John Doe",
    media: "avatar",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
  {
    fullName: "Avrom Rosen",
    media: "avatar2",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
  {
    fullName: "John Doe",
    media: "avatar",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
  {
    fullName: "Avrom Rosen",
    media: "avatar2",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
  {
    fullName: "John Doe",
    media: "avatar",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
  {
    fullName: "Avrom Rosen",
    media: "avatar2",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
  {
    fullName: "John Doe",
    media: "avatar",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
  {
    fullName: "Avrom Rosen",
    media: "avatar2",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
  {
    fullName: "John Doe",
    media: "avatar",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
  {
    fullName: "Avrom Rosen",
    media: "avatar2",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
  {
    fullName: "John Doe",
    media: "avatar",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
  {
    fullName: "Avrom Rosen",
    media: "avatar2",
    userId: "0714c4c5-b1f0-40bf-950d-a651d75f4c4e",
  },
];

export default function ModalTotalTravelers() {
  const [TotalHelpersPending, setPending] = useState(true);
  const TotalHelpersError = false;
  setTimeout(() => {
    setPending(false);
  }, 5000);
  return (
    <div className="py-7 pl-[26px] pr-[30px]">
      {!TotalHelpersPending && !TotalHelpersError ? (
        <HelpersList data={TotalHelpersData} />
      ) : (
        <LoadingSkeleton count={5} />
      )}
    </div>
  );
}
