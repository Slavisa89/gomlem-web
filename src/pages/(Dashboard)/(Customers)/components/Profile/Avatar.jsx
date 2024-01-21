import CircleSkeleton from "@skeleton/CircleSkeleton";
import Icon from "@components/Icon";
export default function Avatar({ isPending, uploadedPhoto, imgSrc }) {
  return (
    <>
      {isPending ? (
        <CircleSkeleton width={56} height={56} />
      ) : uploadedPhoto ? (
        <img src={imgSrc} className="w-[46px] h-[46px] rounded-full" alt="" />
      ) : (
        <div className="w-[46px] h-[46px] p-2 bg-light-100 rounded-full">
          <Icon name="person" className="w-full h-full rounded-full" />
        </div>
      )}
    </>
  );
}
