import CloseButton from "@components/CloseButton";
import SearchBox from "./SearchBox"
export default function SortByMenu({ handlerActiveMenu }) {
  return (
    <div className="shadow-boo-1 pt-[29px] px-[17px]  rounded-[20px] h-[208px] flex flex-col gap-[27px] relative z-10">
      <div className="flex justify-between items-center">
        <SearchBox />
        <CloseButton
          closeFn={() => {
            handlerActiveMenu();
          }}
        />
      </div>
    </div>
  );
}
