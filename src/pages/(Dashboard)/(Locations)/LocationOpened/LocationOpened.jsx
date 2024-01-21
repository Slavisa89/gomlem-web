import { useParams } from "react-router-dom";
import MainContent from "./components/MainContent";
import Aside from "./components/Aside";
export default function LocationOpened() {
  const { cityId } = useParams();
  return (
    <div className="pl-[42px] pt-[34px]  h-[calc(100vh-112px)] overflow-y-scroll pb-10">
      <div className="flex gap-20">
        <MainContent />
        <Aside />
      </div>
    </div>
  );
}
