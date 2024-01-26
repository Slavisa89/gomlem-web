import ReactApexChart from "react-apexcharts";

export default function MiniCart() {
  //   const datas = [];
  //   const labels = [];
  //   datasApi.forEach((item) => {
  //     datas.push(item.value);
  //     labels.push(item.name);
  //   });
  const options = {
    chart: {
      height: 200,
      fontFamily: "Inter",
      type: "area",
      toolbar: {
        show: false,
      },
    },
    colors: ["#4C6FFF"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      colors: ["#4C6FFF"],
      curve: "smooth",
      width: 2,
    },
    // Send Labels
    xaxis: {
      categories: ["Mon", "Thu", "Wed", "Thu", "Fri"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: "#8492A6",
          fontSize: "10px",
          fontFamily: "Inter",
          fontWeight: 400,
        },
      },
    },
    markers: {
      strokeColors: "#fff",
      colors: "#4C6FFF",
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const data = series[seriesIndex][dataPointIndex];
        return `<div class="tooltipChart1">
            <span>${data}</span>
          </div>`;
      },
    },
  };
  const series = [
    {
      name: "Trips",
      data: [1, 400, 0, 50, 480],
    },
  ];

  return (
    <ReactApexChart options={options} series={series} type="line" height={50} />
  );
}
