import TRowTypeOne from "./TRowTypeOne";
import TRowTypeTwo from "./TRowTypeTwo.jsx";
import FadeOnScreen from "@animation/FadeOnScreen";

export default function Tbody({ dataBody, typeTable }) {
  const rows = {
    recentAdvertisers: TRowTypeOne,
    appPayment: TRowTypeTwo,
  };
  const Row = rows[typeTable];
  const body = dataBody.map((body, i) => {
    return (
      <FadeOnScreen time={0.2} x={-100} key={i}>
        <Row body={body} />
      </FadeOnScreen>
    );
  });
  return (
    <>
      <div className="_tbody">
        <ul>{body}</ul>
      </div>
    </>
  );
}
