
export default function TRowTypeTwo({body}) {
  return (
    <li key={body.date}>
      <div>
        <img src={body.avatar} className="rounded-full" alt="avatar" />
        <span>{body.userName}</span>
      </div>
      <div className="font-normal">{body.date}</div>
      <div>
        {body.totalMonthsPaid}
      </div>
      <div>{body.amountSpent}</div>
    </li>
  );
}

