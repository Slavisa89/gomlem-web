import Icon from "@components/Icon";

export default function ContactMethods({ data }) {
  if (!data) return "";
  const listMethods = data.split(",");
  return (
    <div>
      <p className="text-[18px] font-semibold mb-[10px]">Contact Methods</p>
      <div className="flex text-xs text-text-softGary">
        {listMethods.map((method, i) => {
          return (
            <div key={i} className="flex gap-[14px]">
              <button className="flex items-center gap-2 font-normal">
                <Icon
                  name={method}
                  className="w-[14px] h-[14px] svg-grey-soft "
                />
                <span>{method}</span>
              </button>
              {listMethods.length > i + 1 && (
                <div className="vl mr-[14px]"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
