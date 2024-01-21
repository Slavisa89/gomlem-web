import { useEffect, useState } from "react";
import Card from "./Card";
import SkeletonLoading from './SkeletonLoading';

export default function ContainerBoxLineStatus() {
  // Sample Data
  const LocationLineStatusData = [
    { cityName: "Beijing", helpers: 25, trip: 40, totalPeople: 60000 },
    { cityName: "London", helpers: 92, trip: 19, totalPeople: 60000 },
    { cityName: "Monsey", helpers: 63, trip: 29, totalPeople: 60000 },
    { cityName: "Jerusalem", helpers: 87, trip: 58, totalPeople: 60000 },
    { cityName: "Brooklyn", helpers: 94, trip: 97, totalPeople: 60000 },
    { cityName: "Beijing", helpers: 25, trip: 40, totalPeople: 60000 },
    { cityName: "London", helpers: 92, trip: 19, totalPeople: 60000 },
    { cityName: "Monsey", helpers: 63, trip: 29, totalPeople: 60000 },
  ];
  let [LocationLineStatusPending, setPending] = useState(true);
  let LocationLineStatusError = false;
  useEffect(() => {
    setTimeout(() => {
      setPending(false);
    }, 5000);
  }, []);
  return (
    <div className="overflow-scroll hiddenScroll">
      <div className="flex gap-4 pt-4">
        {!LocationLineStatusPending && !LocationLineStatusError ? (
          <Card data={LocationLineStatusData} />
        ) : (
          <SkeletonLoading count={7} />
        )}
      </div>
    </div>
  );
}
