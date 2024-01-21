import Img from "@components/Img";
import { Link } from "react-router-dom";
import FadeOnScreen from "@animation/FadeOnScreen";

export default function Cards({ data }) {
  function formatNumber(num) {
    if (num < 100) return num;

    const formatedNum =
      num % 1000 == 0 ? num / 1000 : parseFloat(num / 1000).toFixed(1);
    return formatedNum + "k";
  }
  const LocationCards = data.map(({ gomlers, media, cityName, cityId }, i) => {
    return (
      <FadeOnScreen time={0.2 * i} y={-100} key={i}>
        <Link to={`./opened/${cityId}`}>
          <div className="relative w-[330px] h-[220px] rounded-[20px]">
            <span className="text-sm text-text-main absolute top-[12px] right-[6px] rounded-2xl bg-white/50 blur-[7.5] px-3 py-2">
              🔥 {formatNumber(gomlers)} Gomlers
            </span>
            <Img src={media} className="w-full h-full rounded-[20px]" />
            <span className="absolute text-xl font-semibold text-white left-3 bottom-5 ">
              {cityName}
            </span>
          </div>
        </Link>
      </FadeOnScreen>
    );
  });
  return <div className="grid grid-cols-3 gap-10 pt-12">{LocationCards}</div>;
}
