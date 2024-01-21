import Icon from "@components/Icon";
import Img from "@components/Img";
import FadeDiv from "@animation/FadeDiv";
import { Link } from "react-router-dom";
import {formatterString} from "@/script/script"
export default function Cards({ data, handelModal }) {
  const Card = data.map(
    ({ media, titleNews, dateTime, newsId, newsLink }, i) => {
      return (
        <FadeDiv time={i * 2} y={-200} key={i}>
          <div className="flex flex-col rounded-[20px]  max-w-sm">
            <div className="relative h-[168px] w-full overflow-hidden">
              <button
                onClick={() => handelModal(newsId)}
                className="absolute z-10 flex items-center justify-center w-10 h-10 rounded-full top-5 right-8 bg-white/20"
              >
                <Icon name="trash" className="w-4 h-4 svg-white" />
              </button>

              <Img src={media} className="absolute top-0 left-0 z-0 w-full " />
            </div>
            <div className="px-3 pt-6 text-xs bg-light-100 text-text-lighter pb-7 rounded-b-[20px]">
              <span className="text-[15px] font-semibold text-text-main">
                {formatterString(titleNews,50)}
              </span>
              <div className="flex items-center justify-between mt-4">
                <span className="text-text-secondary">{dateTime}</span>
                <Link to={newsLink} className="flex items-center gap-[10px]">
                  <span className="">Visit</span>
                  <Icon name="visit" className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </FadeDiv>
      );
    }
  );
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mt-9">{Card}</div>
  );
}
