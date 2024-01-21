import Img from "@components/Img";
import Label from "@components/Label";
import FadeDiv from "./../../../../../../components/Animation/FadeDiv";
import {
  EmergencyBig,
  HighBig,
  MediumBig,
  LowBig,
} from "@components/Label/Label";

export default function ItemList({ data }) {
  const Labels = {
    emergency: <EmergencyBig />,
    hight: <HighBig />,
    medium: <MediumBig />,
    low: <LowBig />,
  };
  const items = data.map(({ fullName, label, category, media, comment }, i) => {
    const LabelCategory = () => Labels[category];
    return (
      <FadeDiv x={-100} key={i} time={i}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Img src={media} className="rounded-full w-7 h-7" />
            <span className="text-[10px] font-medium">{fullName}</span>
          </div>
          <span className="text-[10px] text-text-lighter">3 hrs ago</span>
        </div>
        <div className="mt-[10px] flex justify-between items-center">
          <Label size="big" theme="blueBlack" className="w-max">
            {label}
          </Label>
          <LabelCategory />
        </div>
        <p className="text-[10px] text-text font-medium mt-[14px]">{comment}</p>
        {data.length == i + 1 ? (
          ""
        ) : (
          <hr className="mt-[14px] text-light-100" />
        )}
      </FadeDiv>
    );
  });
  return (
    <div className="flex h-[280px] hiddenScroll overflow-y-scroll flex-col pl-[26px]  py-4 rounded-b-[20px] gap-4 pr-[14px] shadow-boo-2">
      {items}
    </div>
  );
}
