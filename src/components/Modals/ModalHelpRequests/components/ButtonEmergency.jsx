import Icon from "@components/Icon";

export default function ButtonEmergency() {
  return (
    <button className="p-[10px] rounded-xl border flex items-center font-normal _btn-error _btn-error-solid text-sm  border-light-100">
      <span>Emergency Contacts</span>
      <Icon name="arrow" className="w-4 h-3 svg-white" />
    </button>
  );
}
