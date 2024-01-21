import ReactApexChart from "react-apexcharts";

export default function MiniChart({ datasApi }) {
  const datas = [];
  const labels = [];
  datasApi.forEach((item) => {
    datas.push(item.value);
    labels.push(item.name);
  });
  const options = {
    chart: {
      height: 200,
      fontFamily: "Inter",
      type: "area",
      toolbar: {
        tools: {
          download: false,
          selection: false,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
          customIcons: [],
        },
      },
    },
    colors: ["#26A86F"],
    fill: {
      colors: "#fff",
      opacity: 0.5,
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 1,
        gradientToColors: ["#26A86F60", "#ffffff"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      colors: ["#26A86F"],
      curve: "smooth",
      width: 1,
    },
    // Send Labels
    xaxis: {
      categories: labels,
      labels: {
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
      colors: "#26A86F",
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
      data: datas,
    },
  ];

  return <ReactApexChart options={options} series={series} type="area" height={200} />;
}
