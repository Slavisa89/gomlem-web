import Card from "./components/Card";
import SkeletonLoading from "./components/SkeletonLoading";
import useHelpRequestDetails from "./../../../hooks/useHelpRequestDetails";
export default function ModalHelpRequestsWithId({
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

  const { data, isPending, isError } = useHelpRequestDetails(id);
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
      </ul>
    </>
  );
}
