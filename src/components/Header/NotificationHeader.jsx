import { useState } from "react";
import MenuNotificationHeader from "./MenuNotificationHeader";
import NotificationButton from "./NotificationButton";
import AnimBox from "@animation/AnimBox";

import AvatarNotification1 from "@assets/imgs/avatar-notification1.svg";
import AvatarNotification2 from "@assets/imgs/avatar-notification2.svg";
import AvatarNotification3 from "@assets/imgs/avatar-notification3.svg";
import AvatarNotification4 from "@assets/imgs/avatar-notification4.svg";

export default function NotificationHeader() {
  const listNotifications = [
    {
      nameUser: "Mark Levy",
      message: "Sent a message to customer support",
      avatar: AvatarNotification1,
      type: "customer",
      dateSend: "2hr",
    },
    {
      nameUser: "Eli Jacobs",
      message: "Just created an account",
      avatar: AvatarNotification2,
      type: "newUser",
      dateSend: "2hr",
    },
    {
      nameUser: "John Doe",
      message: "Just paid for an ad",
      avatar: AvatarNotification3,
      type: "ad",
      dateSend: "2hr",
    },
    {
      nameUser: "Mike Rosen",
      message: "Added a help request",
      avatar: AvatarNotification4,
      type: "helpRequest",
      dateSend: "2hr",
    },
    {
      nameUser: "Mark Levy",
      message: "Sent a message to customer support",
      avatar: AvatarNotification1,
      type: "customer",
      dateSend: "2hr",
    },
    {
      nameUser: "Eli Jacobs",
      message: "Just created an account",
      avatar: AvatarNotification2,
      type: "newUser",
      dateSend: "2hr",
    },
    {
      nameUser: "John Doe",
      message: "Just paid for an ad",
      avatar: AvatarNotification3,
      type: "ad",
      dateSend: "2hr",
    },
    {
      nameUser: "Mike Rosen",
      message: "Added a help request",
      avatar: AvatarNotification4,
      type: "helpRequest",
      dateSend: "2hr",
    },
  ];

  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [newNotification, setNewNotification] = useState(true);
  function handelActiveMenu() {
    setIsActiveMenu(!isActiveMenu);
  }
  return (
    <div className="relative z-100">
      <NotificationButton
        handelActiveMenu={handelActiveMenu}
        newNotification={newNotification}
        isActiveMenu={isActiveMenu}
      />

      <AnimBox className="absolute top-[88px] -left-[154px] z-20" y={20} time={12} isOpen={isActiveMenu}>
        <MenuNotificationHeader handelDeactive={handelActiveMenu} listNotifications={listNotifications} />
      </AnimBox>
    </div>
  );
}
