import Img from "@components/Img";
import { getTime } from "@/script/script";
import useReply from "./../../../hooks/useReply";
import Icon from "@components/Icon";

export default function Message({ accountDetails }) {
  const { replyData, replyPending, replyError } = useReply(
    accountDetails.chatId
  );

  if (replyPending || replyError)
    return (
      <div className="flex items-center justify-center w-full h-[300px]">
        <Icon name="loadingBlue" className="w-10 h-10" />
      </div>
    );
  // Return Empty Message
  if (replyData.length == 0)
    return (
      <div className="flex items-center justify-center h-[350px]">
        No Message
      </div>
    );

  const mainContainerMessage = [];
  const firstContainerMessage = [];

  replyData.map(({ isSenderMe, content, dateTime }, i) => {
    if (replyData[i + 1]?.isSenderMe == isSenderMe) {
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

  const messageElm = mainContainerMessage.map((messages, i) => {
    const containerMessages = messages.map((message, i) => {
      return (
        <>
          {message.isSenderMe ? (
            <div key={i}>
              <p className=" xp-[10px] bg-light-200 rounded-[20px] flex justify-start items-center px-[18px] py-4 w-full">
                {message.content}
              </p>
              {i + 1 == messages.length && (
                <p className="text-[10px] text-text-secondary relative mt-1 pr-1 mb-5 text-right">
                  {message.dateTime}
                </p>
              )}
            </div>
          ) : (
            <div key={i}>
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
        </>
      );
    });
    return (
      <>
        {messages[0].isSenderMe ? (
          <div className="flex gap-4" key={i}>
            <Img
              src={accountDetails.media}
              className=" w-[30px] h-[30px] sticky top-0 mb-10"
            />
            <div className="flex flex-col w-full gap-2">
              {containerMessages}
            </div>
          </div>
        ) : (
          <div className="flex gap-4" key={i}>
            <div className="w-[30px]"></div>
            <div className="flex flex-col w-full gap-2">
              {containerMessages}
            </div>
          </div>
        )}
      </>
    );
  });
  return <div className="py-4 text-xs">{messageElm}</div>;
}
