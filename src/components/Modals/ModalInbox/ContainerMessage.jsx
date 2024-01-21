import Img from "@components/Img";
import Message from "./Message";
import useCustomerInboxChat from "@hooks/useCustomerInboxChat";
import { useParams } from "react-router-dom";
import Icon from "@components/Icon";

export default function ContainerMessage({ activeChat }) {
  const { userId } = useParams();
  const {
    customerInboxChatData,
    customerInboxChatPending,
    customerInboxChatError,
    // customerInboxChatMessageError,
  } = useCustomerInboxChat(userId, activeChat?.id);
  return (
    <div className="flex flex-col w-[320px]">
      <div className="flex  items-center gap-2 pl-[10px]">
        {activeChat?.media ? (
          <img
            src={`data:image/gif;base64,${activeChat?.media}`}
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-light-100">
            <Icon name="person" className="w-6 h-6" />
          </div>
        )}
        <span className="text-sm font-semibold">{activeChat?.from}</span>
      </div>
      {!customerInboxChatPending && !customerInboxChatError ? (
        <div className="flex flex-col h-[350px] overflow-y-scroll">
          <Message messages={customerInboxChatData} activeChat={activeChat} />
        </div>
      ) : (
        <div className="flex items-center justify-center h-[360px] ">
          <Icon name="loadingBlue" className="w-10 h-10" />
        </div>
      )}
    </div>
  );
}
