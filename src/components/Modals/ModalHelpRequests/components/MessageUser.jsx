import Icon from "@components/Icon";

export default function MessageUser({id}) {
  return (
    <button className="p-[10px] rounded-xl border border-light-100" onClick={()=>alert("alert On Click Message by Id=",id)}>
      <Icon name="chat" />
    </button>
  );
}
