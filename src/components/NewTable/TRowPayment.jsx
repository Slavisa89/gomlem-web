import FadeOnScreen from "@animation/FadeOnScreen";

export default function TRowPayment({ body }) {
  return (
    <FadeOnScreen time={0.2} x={-100}>
      <li key={body.date}>
        <div>
          <img src={body.avatar} className="rounded-full" alt="avatar" />
          <span>{body.userName}</span>
        </div>
        <div className="font-normal">{body.date}</div>
        <div>{body.totalMonthsPaid}</div>
        <div>{body.amountSpent}</div>
      </li>
    </FadeOnScreen>
  );
}
