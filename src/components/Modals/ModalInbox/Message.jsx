import { getTime } from "@/script/script";
import Icon from "@components/Icon";

export default function Message({ messages, activeChat }) {
  if (messages.length == 0) return <div className="flex items-center justify-center h-[350px]">No Message</div>;
  const mainContainerMessage = [];
  const firstContainerMessage = [];
  messages.map(({ isSenderMe, content, dateTime }, i) => {
    if (messages[i + 1]?.isSenderMe == isSenderMe) {
      firstContainerMessage.push({
        isSenderMe,
        content,
        dateTime: getTime(dateTime),
      });
    } else {
      firstContainerMessage.push({
        isSenderMe,
        content,
        dateTime: getTime(dateTime),
      });
      mainContainerMessage.push([...firstContainerMessage]);
      firstContainerMessage.length = 0;
    }
  });
  const messageElm = mainContainerMessage.map((messages, k) => {
    const containerMessages = messages.map((message, i) => {
      return (
        <div key={i} className="w-250px">
          {message.isSenderMe ? (
            <div>
              <p className="p-[10px] bg-light-200 rounded-[20px] flex justify-start items-center px-[18px] py-4 w-full">
                {message.content}
              </p>
              {i + 1 == messages.length && (
                <p className="text-[10px] text-text-secondary relative mt-1 pr-1 mb-5 text-right">
                  {message.dateTime}
                </p>
              )}
            </div>
          ) : (
            <div>
              <p className=" p-[10px] border rounded-[20px] flex justify-start items-center px-[18px] py-4 w-full">
                {message.content}
              </p>
              {i + 1 == messages.length && (
                <p className="text-[10px] text-text-secondary relative mt-1 pl-1 mb-5">
                  {message.dateTime}
                </p>
              )}
            </div>
          )}
        </div>
      );
    });
    return (
      <div key={k}>
        {messages[0].isSenderMe ? (
          <div className="flex justify-start gap-4">
            <div className="w-[35px]">
              {activeChat.media ? (
                <img
                  src={`data:image/gif;base64,${activeChat.media}`}
                  className=" w-[30px] h-[30px] rounded-full sticky top-1 mb-10"
                />
              ) : (
                <div className="w-[30px] h-[30px] rounded-full sticky  bg-light-100 top-1 mb-10">
                  <div className="flex items-center justify-center w-full h-full">
                    <Icon name="person" className="w-5 h-5" />
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col w-full gap-2">
              {containerMessages}
            </div>
          </div>
        ) : (
          <div className="flex gap-4">
            <div className="w-[30px]"></div>
            <div className="flex flex-col w-full gap-2">
              {containerMessages}
            </div>
          </div>
        )}
      </div>
    );
  });
  return <div className="py-4 text-xs">{messageElm}</div>;
}
