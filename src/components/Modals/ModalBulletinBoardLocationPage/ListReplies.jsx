import Img from "@components/Img";
import FadeListItem from "@animation/FadeListItem";

export default function ItemList({ data }) {
  if (!data) return <>No Replies</>;
  const countReplies = data.length;
  const Replies = countReplies
    ? data.map(({ media, fullName, comment, dataTime }, i) => {
        return (
          <FadeListItem time={i} x={-100} key={i}>
            <div>
              <div className="flex items-center justify-between pr-8 ">
                <div className="flex items-center gap-2 ">
                  <Img src={media} className="w-10 h-10 rounded-full " />
                  <span className="text-xs font-medium">{fullName}</span>
                </div>
                <span className="text-xxs text-text-softGary  mr-[22px]">{dataTime}</span>
              </div>
              <p className="pr-8 mt-3 text-sm font-medium">{comment}</p>
              <p className="pt-6 text-sm font-semibold">
                {countReplies < 1
                  ? `${countReplies} Replies`
                  : `${countReplies} Reply`}
              </p>
              <hr className="mt-4 text-light-100" />
            </div>
          </FadeListItem>
        );
      })
    : "";

  return (
    <>
      {countReplies && (
        <div className="flex flex-col gap-6 mt-6">{Replies}</div>
      )}
    </>
  );
}
