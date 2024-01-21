import CircleSkeleton from "@skeleton/CircleSkeleton";
import Icon from "@components/Icon";
export default function Avatar({ isPending, uploadedPhoto, imgSrc }) {
  return (
    <>
      {isPending ? (
        <CircleSkeleton width={56} height={56} />
      ) : uploadedPhoto ? (
        <img src={imgSrc} className="rounded-full w-14 h-14" alt="" />
      ) : (
        <div className="p-3 rounded-full w-14 h-14 bg-light-100">
          <Icon name="person" className="w-full h-full" />
        </div>
      )}
    </>
  );
}
