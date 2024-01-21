import ChartBar from "./ChartBar";
import ChartLine from "./ChartLine";

export default function ChartInModal(props) {
  const charts = {
    ChartBar,
    ChartLine,
  };
  const Chart = props.typeChart === "yearlyData" ? charts.ChartBar : charts.ChartLine;
  return <Chart {...props} />;
}
