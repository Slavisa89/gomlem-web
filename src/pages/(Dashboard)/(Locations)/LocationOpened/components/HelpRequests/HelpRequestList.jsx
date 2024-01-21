import React, { useState } from "react";
import ItemList from "./ItemList";
import SkeletonLoading from "./SkeletonLoading";
const helpRequestLocationData = [
  {
    fullName: "John Doe",
    label: "🩺 Medical",
    category: "low",
    media: "avatar2",
    comment:
      "My son hurt his leg on an activity today. I’m not sure if he needs the hospital or if he does if they would even take my insurance...",
  },
  {
    fullName: "Moshe Fried",
    label: "🩺 Medical",
    category: "hight",
    media: "avatar",
    comment:
      "My son hurt his leg on an activity today. I’m not sure if he needs the hospital or if he does if they would even take my insurance...",
  },
  {
    fullName: "John Doe",
    label: "🩺 Medical",
    category: "low",
    media: "avatar2",
    comment:
      "My son hurt his leg on an activity today. I’m not sure if he needs the hospital or if he does if they would even take my insurance...",
  },
  {
    fullName: "Moshe Fried",
    label: "🩺 Medical",
    category: "hight",
    media: "avatar",
    comment:
      "My son hurt his leg on an activity today. I’m not sure if he needs the hospital or if he does if they would even take my insurance...",
  },
];
export default function HelpRequestList() {
  const [helpRequestLocationPending, setPending] = useState(true);
  setTimeout(() => {
    setPending(false)
  }, 4000);
  const helpRequestLocationError = false;
  return (
    <div>
      {!helpRequestLocationPending && !helpRequestLocationError ? (
        <ItemList data={helpRequestLocationData} />
      ) : (
        <SkeletonLoading count={5} />
      )}
    </div>
  );
}
