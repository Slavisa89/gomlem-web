import Icon from "@components/Icon";

export default function ExpandButton({ expandFn, isFull }) {
  return (
    <button
      onClick={() => expandFn()}
      className="w-[35px] h-[35px] flex justify-center items-center rounded-full bg-light-200 hover:brightness-95 transition-all"
    >
      <Icon name={`${isFull ? "diagonal" : "expand2"}`} />
    </button>
  );
}
