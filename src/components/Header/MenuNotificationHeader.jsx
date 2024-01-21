import ItemNotification from "./ItemNotification";
import CloseButton from "@components/CloseButton";
export default function MenuNotificationHeader({ handelDeactive, listNotifications }) {
  return (
      <div className="bg-white shadow-boo-1 pt-11 pl-8 pr-10 pb-16 rounded-[20px] w-[362px] before:w-20 before:h-20 before:bg-white before:rounded-2xl before:absolute before:-top-4 before:left-[142px] before:rotate-45 z-20">
        <div className="relative w-full flex flex-col">
          <span className="text-xl font-semibold text-text">Notifications</span>
          <ul className="mt-7 flex flex-col gap-6 overflow-y-scroll h-[340px] pr-3 pt-1">
            {listNotifications.map((notification, index) => {
              return (
                <ItemNotification
                  avatar={notification.avatar}
                  dateSend={notification.dateSend}
                  message={notification.message}
                  nameUser={notification.nameUser}
                  type={notification.type}
                  key={index}
                />
              );
            })}
          </ul>
          <CloseButton closeFn={handelDeactive} appedClass="absolute -right-4 -top-1" />
        </div>
      </div>
  );
}
