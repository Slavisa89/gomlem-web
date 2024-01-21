import React, { useState } from "react";
import Header from "./Header";
import Cards from "./Cards";
import SkeletonLoading from "./SkeletonLoading"
const localNewsData = [
  {
    media: "poster4",
    titleNews: "Major Traffic Is Expected Tomorrow Due To The Prim...",
    dateTime: "Mar/10/2023",
    newsId: "1",
    newsLink: "#1",
  },
  {
    media: "poster4",
    titleNews: "Major Traffic Is Expected Tomorrow Due To The Prim...",
    dateTime: "Mar/10/2023",
    newsId: "2",
    newsLink: "#2",
  },
  {
    media: "poster4",
    titleNews: "Major Traffic Is Expected Tomorrow Due To The Prim...",
    dateTime: "Mar/10/2023",
    newsId: "3",
    newsLink: "#3",
  },
  {
    media: "poster4",
    titleNews: "Major Traffic Is Expected Tomorrow Due To The Prim...",
    dateTime: "Mar/10/2023",
    newsId: "4",
    newsLink: "#4",
  },
];

export default function LocalNewsLinksContainer() {
  const [localNewsPending,setPending] = useState(true);
  const localNewsError = false;
  setTimeout(() => {
    setPending(false)
  }, 5000);
  // const [activeModalNews, setActiveModalNews] = useState(false);
  return (
    <div>
      <Header />
      {!localNewsPending && !localNewsError ?
      <Cards data={localNewsData} />:<SkeletonLoading count={6} />}
    </div>
  );
}
