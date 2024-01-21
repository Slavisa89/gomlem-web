import { useState } from "react";

export default function Header() {
  const [activeModalLocalNews, setActiveModalLocalNews] = useState(false);
  function handlerModalEditCity(show) {
    setActiveModalLocalNews(show);
    alert(activeModalLocalNews);
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-baseline gap-2">
        <span className="text-[28px] font-semibold">Local News Links</span>
      </div>
      <button
        onClick={() => handlerModalEditCity(!activeModalLocalNews)}
        className="px-12 py-3 bg-text-softGary rounded-[10px] items-center text-white text-xs flex gap-2"
      >
        <span>Update Articles</span>
      </button>
    </div>
  );
}
