
export default function Thead({ dataHead }) {
  const headers = dataHead.map((data) => <li key={data}>{data}</li>);
  return <ul className="_header">{headers}</ul>;
}
