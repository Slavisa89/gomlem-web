import { useState } from "react";

export default function LineStatus({
  className = "",
  value,
  theme = "gary",
  withLabelValue = true,
}) {
  const themes = {
    orange: { bgLine: "bg-red-200", colorLine: "bg-red-300" },
    green: { bgLine: "bg-light-300", colorLine: "bg-green-100" },
    gary: { bgLine: "bg-light-100", colorLine: "bg-gary" },
    blue: { bgLine: "bg-light-100", colorLine: "bg-[#4C6FFF]" },
  };
  const [lineWidth, setLineWidth] = useState(0);
  const color = themes[theme];
  setTimeout(() => {
    setLineWidth(value);
  }, 1000);
  return (
    <div className="flex items-center gap-2">
      <div
        className={`${color.bgLine} flex justify-start rounded-full ${className}`}>
        <span
          className={`h-2 rounded-full transition-all duration-1000 ${color.colorLine}`}
          style={{ width: `${lineWidth}%` }}></span>
      </div>
      {withLabelValue && (
        <span className="text-[10px] font-semibold">{value}%</span>
      )}
    </div>
  );
}
