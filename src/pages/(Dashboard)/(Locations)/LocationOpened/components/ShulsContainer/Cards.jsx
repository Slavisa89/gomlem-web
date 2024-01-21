import Icon from "@components/Icon";
import Img from "@components/Img";
import FadeDiv from "@animation/FadeDiv";

export default function Cards({ data,handelModal }) {
  const Card = data.map(
    ({ media, cityId, cityName, location, phone, website }, i) => {
      return (
        <FadeDiv time={i * 2} y={-200} key={i}>
          <div className="flex flex-col rounded-[20px] max-w-sm">
            <div className="relative h-[168px] w-full overflow-hidden">
              <span className=" z-10 absolute bottom-[22px] text-white text-xl font-semibold left-[14px]">
                {cityName}
              </span>
              <button
                onClick={() => handelModal(cityId)}
                className="absolute z-10 flex items-center justify-center w-10 h-10 rounded-full top-5 right-8 bg-white/20"
              >
                <Icon name="edit" className="w-4 h-4" />
              </button>

              <Img src={media} className="absolute top-0 left-0 z-0 w-full " />
            </div>
            <div className="px-3 pt-6 text-xs font-semibold bg-light-100 text-text-lighter pb-9 rounded-b-[20px]">
              <ul className="flex flex-col gap-5">
                <li className="flex items-center gap-3">
                  <Icon name="location3" className="w-4 h-5" />
                  <span>{location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="phone2" className="w-4 h-5" />
                  <span>{phone}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="link" className="w-4 h-5" />
                  <span>{website} </span>
                </li>
              </ul>
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
