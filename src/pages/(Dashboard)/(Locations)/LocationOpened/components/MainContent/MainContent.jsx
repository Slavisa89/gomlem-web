import ContainerBoxs from "./../ContainerBoxs";
import ContainerCards from "../ContainerCards/ContainerCards";

export default function MainContent() {
  return (
    <div className="flex flex-col w-2/3">
      <ContainerBoxs />
      <ContainerCards />
    </div>
  );
}
