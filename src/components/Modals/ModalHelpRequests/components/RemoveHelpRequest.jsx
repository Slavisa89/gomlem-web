import Icon from "@components/Icon";
import { useParams } from "react-router-dom";
import useRemoveHelpRequest from "@hooks/useRemoveHelpRequest";

export default function RemoveHelpRequest({ id, handlerActiveModal }) {
  const { userId } = useParams();
  const { mutate, isPending } = useRemoveHelpRequest();
  const hash = [];
  if (userId) {
    hash.push("helpRequests");
    hash.push(userId);
  } else {
    hash.push("helpRequestsDetails");
    hash.push(id)
  }
  return (
    <button
      className="p-[10px] rounded-xl border border-light-100"
      onClick={() => {
        mutate({ id, hash });
        handlerActiveModal();
      }}
    >
      <Icon name="trash" />
    </button>
  );
}
