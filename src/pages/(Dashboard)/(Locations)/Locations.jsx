import ContainerStatusLocation from "./components/ContainerStatusLocation";
import ContainerCardsLocation from "./components/ContainerCardsLocation/ContainerCardsLocation";

export default function Locations() {
  return (
    <div className="pl-[42px] pt-[34px]  h-[calc(100vh-112px)] overflow-y-scroll pb-10">
      <ContainerStatusLocation />
      <ContainerCardsLocation />
    </div>
  );
}
