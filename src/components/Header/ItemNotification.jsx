import Icon from "@components/Icon";
export default function ItemNotification({ avatar, nameUser, message, dateSend, type }) {
  const typeNotification = {
    customer: {
      icon: "message",
      color: "bg-red-300",
    },
    helpRequest: {
      icon: "chat",
      color: "bg-red-bg",
      svgClass: "svg-red",
    },
    ad: {
      icon: "ad",
      color: "bg-light-300",
    },
    newUser: {
      icon: "users",
      color: "bg-text",
    },
  };
  const iconType = typeNotification[type].icon
  const iconColor = typeNotification[type]?.svgClass ? typeNotification[type]?.svgClass : ""
  const bgItem = typeNotification[type].color


  return (
    <li className="flex gap-3">
      <div className="relative">
        <div
          className={`w-6 h-6 flex justify-center items-center rounded-full absolute -top-1 -right-1 border-white border-2 ${bgItem}`}
        >
          <Icon name={iconType} className={`w-3 h-3 ${iconColor}`} />
        </div>
        <img src={avatar} className="w-14 h-14 rounded-full" alt="" />
      </div>
      <div className=" text-gary text-[10px] flex flex-col gap-[6px] pb-2 w-full">
        <div className="flex justify-between">
          <span className="text-sm text-text font-semibold">{nameUser}</span>
          <span>{dateSend}</span>
        </div>
        <span className="">{message}</span>
      </div>
    </li>
  );
}
//
