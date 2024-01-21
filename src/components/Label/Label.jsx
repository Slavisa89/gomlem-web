import { twMerge } from "tailwind-merge";

export default function Label({ children, size, theme, className = "" }) {
  const sizes = {
    small: "py-[2px] px-2 text-[8px] w-[46px] font-normal w-max",
    medium: "px-[16px] py-[10px] !w-[64px] text-[8px] font-semibold h-6 ",
    big: "py-[13px] px-[26px] text-xs font-semibold",
    border: "px-5 py-3 rounded-[20px] text-xs gap-2",
  };
  const themes = {
    blue: "bg-blue-300 text-blue-800",
    blueBlack: "bg-blue-100 text-text",
    red: "text-red bg-red-bg",
    redSolid: "text-red-bg bg-red",
    green: "bg-green-200 text-green-800",
    border: "border border-text-softGary",
  };

  return (
    <div
      className={`${sizes[size]} ${themes[theme]} rounded-full flex gap-2 items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
}
export const EmergencyMedium = () => (
  <Label theme="redSolid" size="medium">
    Emergency
  </Label>
);
export const HighMedium = () => (
  <Label theme="red" size="medium">
    High
  </Label>
);
export const MediumMedium = () => (
  <Label theme="blue" size="medium">
    Medium
  </Label>
);
export const LowMedium = () => (
  <Label theme="green" size="medium">
    Low
  </Label>
);

export const EmergencyBig = () => (
  <Label theme="redSolid" size="big">
    Emergency
  </Label>
);
export const HighBig = () => (
  <Label theme="red" size="big">
    High
  </Label>
);
export const MediumBig = () => (
  <Label theme="blue" size="big">
    Medium
  </Label>
);
export const LowBig = () => (
  <Label theme="green" size="big">
    Low
  </Label>
);
