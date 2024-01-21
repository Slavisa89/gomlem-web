import HelpRequests from "../HelpRequests";
import BulletinBoard from "./../BulletinBoard";

export default function Aside() {
  return (
    <div className="w-1/3 pr-[70px]">
      <HelpRequests />
      <BulletinBoard />
    </div>
  );
}
