import useSupportInfoData from "../../hooks/useSupportInfoData";
import Icon from "@components/Icon";
export default function SidebarNotification({ type }) {
  const {
    supportInfoPending,
    supportInfoData,
    supportInfoError,
    // supportInfoMessageError,
  } = useSupportInfoData();

  if (supportInfoPending || supportInfoError) {
    return <Icon name="loading" className="w-3 h-3" />;
  }
  return (
    <>
      {supportInfoData[type] > 0 && (
        <div className="bg-red-bg text-red px-2 py-[2px] text-xs font-bold border border-transparent duration-200 transition-all rounded-full group-hover:border-red">
          {supportInfoData[type]}
        </div>
      )}
    </>
  );
}
