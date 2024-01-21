import React, { useEffect, useState } from "react";
import Card from "./Card";
import LoadingSkeleton from "./LoadingSkeleton";
const LocationData = [
  { gomlers: 500, cityName: "Beijing", media: "poster4", cityId: 1 },
  { gomlers: 20, cityName: "Florence", media: "poster4", cityId: 2 },
  { gomlers: 1240, cityName: "Manhattan", media: "poster4", cityId: 3 },
  { gomlers: 1840, cityName: "London", media: "poster4", cityId: 4 },
  { gomlers: 87000, cityName: "Jerusalem", media: "poster4", cityId: 5 },
  { gomlers: 87000, cityName: "Brooklyn", media: "poster4", cityId: 6 },
];
export default function Cards() {
  const [LocationPending, setPending] = useState(true);
  const LocationError = false;
  useEffect(() => {
    setTimeout(() => {
      setPending(false);
    }, 3000);
  });
  return (
    <div>
      {!LocationPending && !LocationError ? (
        <Card data={LocationData} />
      ) : (
        <LoadingSkeleton count={12} />
      )}
    </div>
  );
}
