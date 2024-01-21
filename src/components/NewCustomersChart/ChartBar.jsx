import ReactApexChart from "react-apexcharts";

export default function ChartBar({ datasApi }) {
  const datas = [];
  const labels = [];
  datasApi.forEach((item) => {
    datas.push(item.value);
    labels.push(item.name);
  });
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ["#4C6FFF", "#FF92AE"],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 3,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
        barHeight: "100%",
        columnWidth: 10,
        endingShape: "rounded",
        colors: {
          backgroundBarColors: ["#EDF2F7"],
          backgroundBarOpacity: 100,
          backgroundBarRadius: 3,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: labels,
    },
    yaxis: {
      labels: {
        style: {
          colors: "#425466",
          fontSize: "10px",
          fontFamily: "Inter",
          fontWeight: 600,
        },
        formatter: (value) => {
          if (value < 1000) return value;
          const yaxisVal = `${value / 1000}k`;
          return yaxisVal;
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        show: false,
      },
      y: {
        formatter: function (value) {
          let arryValue = value.toString().split("").reverse();
          let tooltipData = [];
          for (let i = 0; i < arryValue.length; i++) {
            tooltipData.unshift(arryValue[i]);
            if ((i + 1) % 3 == 0 && arryValue.length > 3) {
              tooltipData.unshift(",");
            }
          }
          return `${tooltipData.join("")}`;
        },
        title: {
          formatter: () => "",
        },
      },
      marker: {
        show: false,
      },
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `<span class="tooltipChart1"> ${series[seriesIndex][dataPointIndex]}</span>`;
      },
    },
  };
  const series = [
    {
      name: "Trips",
      data: datas,
    },
  ];

  return <ReactApexChart options={options} series={series} type="bar" height={230} />;
}
