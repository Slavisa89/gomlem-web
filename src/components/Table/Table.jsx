import Tbody from "./Tbody";
import Thead from "./Thead";
import BoxSkeleton from "@skeleton/BoxSkeleton";

export default function TableMain({ dataBody, dataHead, typeTable,isPending=false }) {
  return (
    <div className={`_table _table_${typeTable}`}>
      <Thead dataHead={dataHead} />

      {isPending ? (
        <BoxSkeleton count={7} className="mb-2" height={50} />
      ) : (
        <Tbody dataBody={dataBody} typeTable={typeTable} />
      )}
    </div>
  );
}
