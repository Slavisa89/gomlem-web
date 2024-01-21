import Img from "@components/Img";
import Icon from "@components/Icon";

export default function Profile({ media, fullName }) {
  return (
    <div className="flex items-center gap-2">
      {media ? (
        <Img src={media} byte={true} className="w-10 h-10 rounded-full" />
      ) : (
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-light-100">
          <Icon name="person" className="w-8 h-8" />
        </div>
      )}
      <span className="text-xs font-semibold ">{fullName}</span>
    </div>
  );
}
