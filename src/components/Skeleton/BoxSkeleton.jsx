import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import themes from "./themes";

export default function BoxSkeleton({
  height,
  className = "",
  selectTheme = "default",
  width = "100%",
  count=1
}) {
  const theme = themes[selectTheme];
  return (
    <SkeletonTheme
      baseColor={theme.baseColor}
      highlightColor={theme.highlightColor}
    >
      <Skeleton
        className={`w-full ${className}`}
        width={width}
        height={height}
        count={count}
      />
    </SkeletonTheme>
  );
}
