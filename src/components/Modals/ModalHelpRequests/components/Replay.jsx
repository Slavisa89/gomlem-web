import Icon from "@components/Icon";

export default function Replay({id}) {
  return (
    <button
      className="p-[10px] rounded-xl border border-light-100"
      onClick={() => alert("Reply Message by Id = ", id)}
    >
      <Icon name="reply2" />
    </button>
  );
}
