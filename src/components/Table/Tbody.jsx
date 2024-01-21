import TRowRecentAdvertisers from "./TRowRecentAdvertisers";
import TRowPayment from "./TRowPayment";
import TRowHelpRequests from "./TRowHelpRequests"
import TRowCustomerList from "./TRowCustomerList"
import FadeOnScreen from "@animation/FadeOnScreen";
export default function Tbody({ dataBody, typeTable }) {
  const rows = {
    recentAdvertisers: TRowRecentAdvertisers,
    appPayment: TRowPayment,
    helpRequests:TRowHelpRequests,
    CustomerList:TRowCustomerList
  };
  const Row = rows[typeTable];
  const body = dataBody.map((data, i) => {
    return (
      <FadeOnScreen time={0.2} x={-100} key={i}>
        <Row body={data} />
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
