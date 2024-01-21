import FormGetMessage from "./FormGetMessage";
export default function FormSendEmailSelectedUser({ sendTo }) {
  return (
    <div>
      <div className="border-b border-light-100 mt-3 pb-3 flex items-center justify-between pl-[26px] h-full">
        <div className="flex items-center gap-4 text-sm">
          <span className="font-semibold">To:</span>
          <button className="flex gap-[15px] items-center py-[10px] px-5 rounded-2xl  bg-light-100 text-xs font-medium">
            {sendTo.fullName}
            {`(${sendTo.email})`}
          </button>
        </div>
      </div>
      <FormGetMessage isPending={false} userId={sendTo.userId} />
    </div>
  );
}
