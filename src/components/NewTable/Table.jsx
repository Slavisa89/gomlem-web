
export default function TableMain({ children, typeTable }) {
  return <div className={`_table _table_${typeTable}`}>{children}</div>;
}
