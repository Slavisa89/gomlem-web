import FadeDiv from "@animation/FadeDiv";
import Icon from "@components/Icon";
export default function Cards({ data, handlerActiveModal }) {
  const Card = data.map(({ fullName, number, numberId }, i) => {
    return (
      <FadeDiv time={i * 2} y={-200} key={i}>
        <div className="bg-light-100 rounded-[20px] flex justify-center items-center gap-6 flex-col min-w-[340px] h-[110px] relative">
          <button
            className="top-[22px] absolute right-4"
            onClick={() => handlerActiveModal(numberId)}
          >
            <Icon name="edit" className="w-4 h-4 svg-base" />
          </button>
          <span className="text-[18px] font-semibold">{fullName}</span>
          <span className="text-sm">{number}</span>
        </div>
      </FadeDiv>
    );
  });
  return (
    <div className="grid grid-cols-1 gap-x-2 gap-y-6 lg:grid-cols-2 mt-9">
      {Card}
    </div>
  );
}
