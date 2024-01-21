import Icon from "@components/Icon";

export default function CardContact({ emergencyContactsData }) {
  const EmergencyContacts = emergencyContactsData.map(
    ({ fullName, relation, phoneNumber, email, id }, i) => {
      return (
        <div className="flex flex-col gap-[10px] text-text" key={id}>
          <span className="text-lg font-semibold">
            Emergency Contact {i + 1}
          </span>
          <div className="flex flex-col gap-6 text-sm font-normal border border-light-100 rounded-lg pl-5 pb-2 pt-5 pr-[26px]">
            <div className="flex items-center gap-[10px]">
              <Icon name="user2" className="w-[14px] h-[14px]" />
              <span>{fullName}</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <Icon name="relation" className="w-[14px] h-[14px]" />
              <span>{relation}</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <Icon name="phone" className="w-[14px] h-[14px]" />
              <span>{phoneNumber}</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <Icon name="message" className="w-[14px] h-[14px]" />
              <span>{email}</span>
            </div>
            <div className="flex self-end gap-2">
              <a href={`mailto:${email}`}>
                <button className="border border-light-100 p-[10px] rounded-lg">
                  <Icon name="message" className="w-[14px] h-[14px]" />
                </button>
              </a>
              <a href={`tel:${phoneNumber}`}>
                <button className="border border-light-100 p-[10px] rounded-lg">
                  <Icon name="phone" className="w-[14px] h-[14px]" />
                </button>
              </a>
            </div>
          </div>
        </div>
      );
    }
  );
  return <>{EmergencyContacts}</>;
}
