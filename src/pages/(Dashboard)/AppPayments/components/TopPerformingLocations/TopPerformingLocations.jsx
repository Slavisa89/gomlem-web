import LocationTable from "./LocationTable";

export default function TopPerformingLocations({ isPending = false }) {
  return (
    <div className="flex flex-col gap-5">
      <LocationTable locationType="Trips" />
      <LocationTable locationType="Subscriptions" />
    </div>
  );
}