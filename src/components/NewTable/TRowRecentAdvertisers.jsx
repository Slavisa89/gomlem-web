import FadeOnScreen from "@animation/FadeOnScreen";

export default function TRowRecentAdvertisers({ body }) {
  return (
    <FadeOnScreen time={0.2} x={-100}>
      <li key={body.date}>
        <div>
          <img src={body.avatar} className="rounded-full" />
          <span>{body.userName}</span>
        </div>
        <div className="font-normal">{body.date}</div>
        <div>
          <img src={body.IconCompany} className="rounded-lg" />
          <span>{body.company}</span>
        </div>
        <div>{body.amountSpent}</div>
      </li>
    </FadeOnScreen>
  );
}
