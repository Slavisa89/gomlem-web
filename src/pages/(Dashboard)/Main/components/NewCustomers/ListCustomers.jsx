import Icon from "@components/Icon";
import { formatterLastSeen } from "@/script/script";
export default function ListCustomers({ customers }) {
  const Customers = customers.map(
    ({ fullName, media, registeredOn, country, id }) => {
      const registeredFormat = formatterLastSeen(registeredOn);
      const imgSrc = `data:image/gif;base64,${media}`;
      return (
        <li className="flex items-end justify-between" key={id}>
          <div className="flex gap-2">
            {media ? (
              <img src={imgSrc} className="w-10 h-10 rounded-full" alt="" />
            ) : (
              <div className="w-10 h-10 p-2 rounded-full bg-light-100">
                <Icon name="person" className="w-full h-full" />
              </div>
            )}
            <div className="flex flex-col gap-[2px]">
              <span className="text-sm">{fullName}</span>
              <span className="text-text-softGary">{registeredFormat}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="location" className="w-4 h-[16px]" alt="" />
            <span>{country}</span>
          </div>
        </li>
      );
    }
  );

  return (
    <ul className="flex flex-col gap-5 text-[10px] font-semibold">
      {Customers}
    </ul>
  );
}
