import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import themes from "./themes";
export default function ItemSkeleton({
  height,
  selectTheme = "default",
  count = 1,
}) {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    skeletons.push(
      <div key={i} className="flex mb-2 gap-4 w-full">
        <div>
          <Skeleton height={height} width={height} circle="true" />
        </div>
        <div>
          <Skeleton width="200px" height={height / 2} count={2} />
        </div>
      </div>
    );
  }
  const theme = themes[selectTheme];
  return (
    <SkeletonTheme
      baseColor={theme.baseColor}
      highlightColor={theme.highlightColor}
    >
      {skeletons}
    </SkeletonTheme>
  );
}
