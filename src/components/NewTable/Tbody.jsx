import BoxSkeleton from "@skeleton/BoxSkeleton";
export default function Tbody({ children, isPending = false }) {
  if (isPending)
    return (
      <div className="p-2">
        <BoxSkeleton count={7} className="mb-2" height={50} />
      </div>
    );

  return (
    <>
      <div className="_tbody">
        <ul>{children}</ul>
      </div>
    </>
  );
}
