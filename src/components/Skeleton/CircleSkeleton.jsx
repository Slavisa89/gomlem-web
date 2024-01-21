import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import themes from "./themes";
export default function CircleSkeleton({ height, selectTheme = "default" }) {
  const theme = themes[selectTheme];
  return (
    <SkeletonTheme
      baseColor={theme.baseColor}
      highlightColor={theme.highlightColor}
    >
      <Skeleton height={height} width={height} circle="true" />
    </SkeletonTheme>
  );
}
