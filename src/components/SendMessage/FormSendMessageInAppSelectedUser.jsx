
import FormGetMessageInApp from "./FormGetMessageInApp";
import ButtonInsertPreMadeMessage from "./ButtonInsertPreMadeMessage";

export default function FormSendMessageInApp({ sendTo }) {
  return (
    <div className="flex flex-col px-[30px] pb-[26px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-full pb-3 mt-3">
          <div className="flex items-center justify-between w-full gap-4 text-sm">
            <div className="flex items-center gap-4">
              <img src={`data:image/gif;base64,${sendTo.media}`} className="w-10 h-10 rounded-full"/>
              <span>{sendTo.fullName}</span>
            </div>
            <ButtonInsertPreMadeMessage className="ml-auto mt-[18px] mr-[13px]" />
          </div>
        </div>
      </div>
      <FormGetMessageInApp
        isPending={false}
        userId={sendTo.userId}
        opened={true}
      />
    </div>
  );
}
