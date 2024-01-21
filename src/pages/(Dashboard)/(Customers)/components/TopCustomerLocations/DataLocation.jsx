import BoxSkeleton from "@skeleton/BoxSkeleton";

export default function DataLocation({ countriesData, isPending }) {
  const countriesItems = isPending
    ? null
    : countriesData.map((country,i) => {
        const count =
          country.count >= 1000
            ? country.count.toLocaleString()
            : country.count;
        return (
          <div key={i} className="flex gap-4">
            <li className="flex flex-col justify-center gap-1 text-center">
              <span className="text-sm font-semibold">{country.name}</span>
              <span className="text-text-softGary text-[10px]">
                ({count})
              </span>
            </li>
            <div className="vl"></div>
          </div>
        );
      });
  return (
    <div className=" bg-white rounded-b-[20px] shadow-boo-1 px-[27px] py-3">
      <ul className="flex gap-4">
        {isPending ? <CustomSkeleton /> : countriesItems}
      </ul>
    </div>
  );
}

const CustomSkeleton = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="flex flex-col items-center justify-center">
          <BoxSkeleton height={20} width={40} />
          <BoxSkeleton height={15} width={50} />
        </div>
        <div className="vl"></div>
        <div className="flex flex-col items-center justify-center">
          <BoxSkeleton height={20} width={40} />
          <BoxSkeleton height={15} width={50} />
        </div>
        <div className="vl"></div>
        <div className="flex flex-col items-center justify-center">
          <BoxSkeleton height={20} width={40} />
          <BoxSkeleton height={15} width={50} />
        </div>
        <div className="vl"></div>
      </div>
    </>
  );
};
