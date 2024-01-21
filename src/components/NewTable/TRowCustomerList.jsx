import Icon from "@components/Icon";
import { convertDateFormat } from "@/script/script";
import FadeOnScreen from "@animation/FadeOnScreen";

export default function TRowCustomerList({ body }) {
  const {
    media,
    fullName,
    phoneNumber,
    email,
    registeredOn,
    country,
    tripsCount,
  } = body;
  const imgSrc = `data:image/gif;base64,${media}`;
  const formatDate = convertDateFormat(registeredOn);
  return (
    <FadeOnScreen time={0.2} x={-100}>
      <li>
        <div className="flex gap-[10px] items-center">
          {media ? (
            <img src={imgSrc} className="rounded-full" />
          ) : (
            <Icon name="person" />
          )}
          <span>{fullName}</span>
        </div>

        <div className="flex gap-[10px] items-center">
          <Icon name="phone" className="icon" />
          <span>{phoneNumber}</span>
        </div>
        <div className="flex gap-[10px] items-center">
          <Icon name="message" className="icon" />
          <span>{email}</span>
        </div>
        <div>{formatDate}</div>
        <div>{country}</div>
        <div>{tripsCount}</div>
      </li>
    </FadeOnScreen>
  );
}
