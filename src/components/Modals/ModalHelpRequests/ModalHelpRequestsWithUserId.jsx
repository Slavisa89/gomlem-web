import Card from "./components/Card";
import SkeletonLoading from "./components/SkeletonLoading";
import useHelpRequests from "./../../../hooks/useHelpRequests";
export default function ModalHelpRequestsWithUserId({
  id,
  type,
  handlerActiveModal,
}) {
  if (!type)
    return (
      <div className="flex flex-col pl-10 pr-10 py-[34px] gap-[18px] w-[683px] h-[578px] overflow-y-scroll">
        <SkeletonLoading />
      </div>
    );
  const { data, isPending, isError } = useHelpRequests(id);

  return (
    <>
      <ul className="flex flex-col pl-10 pr-10 py-[34px] gap-[18px] w-[683px] h-[578px] overflow-y-scroll">
        {!isPending && !isError && data ? (
          <>
            {Array.isArray(data) ? (
              data.map((itemData, i) => {
                return (
                  <Card
                    handlerActiveModal={handlerActiveModal}
                    type={type}
                    data={itemData}
                    key={i}
                  />
                );
              })
            ) : (
              <Card
                handlerActiveModal={handlerActiveModal}
                type={type}
                data={data}
              />
            )}
          </>
        ) : (
          <SkeletonLoading />
        )}
        {!isPending && data.length==0 && <div className="flex items-center justify-center w-full h-[500px]">Empty</div>}
      </ul>
    </>
  );
}
