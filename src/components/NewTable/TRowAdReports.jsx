import Icon from "@components/Icon";
import { convertDateFormat } from "@/script/script";
import FadeOnScreen from "@animation/FadeOnScreen";
import IconCompany from "@assets/imgs/telegram.svg";

export default function TrowAdReports({ body, onViewReportClick }) {
  const { media, fullName, amountPaid, companyName, registeredOn, country } =
    body;

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

        <div className="flex gap-[10px] items-start">
          <div>{formatDate}</div>
        </div>
        <div className="flex gap-[10px] items-center">
          <img src={IconCompany} className="rounded-lg" />
          <span>{companyName}</span>
        </div>
        <div>
          <span>{country}</span>
        </div>
        <div className="text-blue-800">{amountPaid.toLocaleString()}</div>
        <div>
          <button onClick={onViewReportClick}>View Report</button>
        </div>
      </li>
    </FadeOnScreen>
  );
}
