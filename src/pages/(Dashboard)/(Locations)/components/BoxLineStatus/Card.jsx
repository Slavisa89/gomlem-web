import LineStatus from "@components/LineStatus/LineStatus";
import FadeDiv from "@animation/FadeDiv";

export default function Card({ data }) {
  const Cards = () =>
    data.map(({ cityName, helpers, trip, totalPeople }, i) => {
      return (
        <FadeDiv y={-100} time={i * 1.5} key={i}>
          <div key={i}>
            <div className="pt-[10px] pl-3 rounded-[20px] w-[220px] gap-[22px] flex h-40 pb-6 justify-between border border-light-100 flex-col">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-text">{cityName}</span>
                <span className="text-[10px] text-text-softGary font-semibold">
                  ({totalPeople} people)
                </span>
              </div>
              <div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-text-lighter">
                    Helpers
                  </span>
                  <LineStatus
                    theme="orange"
                    value={helpers}
                    className="h-2 w-[135px]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-semibold text-text-lighter">
                    Trips
                  </span>
                  <LineStatus
                    theme="green"
                    value={trip}
                    className="h-2 w-[135px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeDiv>
      );
    });
  return <Cards />;
}
