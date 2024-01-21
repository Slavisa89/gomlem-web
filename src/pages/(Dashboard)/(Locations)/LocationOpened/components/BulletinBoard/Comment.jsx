import Img from "@components/Img";

export default function Comment({ data }) {
  if(!data)return <>Empty</> 
  const { media = person, fullName, dataTime, comment } = data;
  return (
    <div className="pt-2 pl-3 pr-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Img src={media} className="w-10 h-10 rounded-full " />
          <span className="text-xs font-medium">{fullName}</span>
        </div>
        <span className="text-xxs text-text-softGary">{dataTime}</span>
      </div>
      <p className="pr-4 mt-3 text-sm font-medium">{comment}</p>
    </div>
  );
}
