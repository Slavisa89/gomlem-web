import ReactApexChart from "react-apexcharts";

export default function Chart({ dataFromApi }) {
  const series = [];
  const labels = dataFromApi[0].data.map((val) => val.name);
  // Add Data To Variable Data Charts
  dataFromApi.forEach((item) => {
    series.push({
      name: item.label,
      data: item.data ? item.data.map((val) => val.value) : [],
    });
  });

  const options = {
    chart: {
      height: 450,
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
    colors: ["#4C6FFF", "#FF92AE"],
    fill: {
      type: "solid",
      opacity: 0,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      colors: ["#4C6FFF", "#FF92AE"],
      curve: "smooth",
    },
    // Send Labels
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
          return `${value / 1000}k`;
        },
      },
    },
    xaxis: {
      categories: labels,
      labels: {
        style: {
          colors: "#8492A6",
          fontSize: "10px",
          fontFamily: "Inter",
          fontWeight: 600,
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (value) {
          let arryValue = value.toString().split("").reverse();
          let tooltipData = [];
          for (let i = 0; i < arryValue.length; i++) {
            tooltipData.unshift(arryValue[i]);
            if ((i + 1) % 3 === 0) {
              tooltipData.unshift(",");
            }
          }
          return `${tooltipData.join("")}`;
        },
        title: {
          formatter: (seriesName) => `${seriesName} : `,
        },
      },
    },
    markers: {
      strokeColors: "#fff",
      colors: ["#4C6FFF", "#FF92AE"],
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontSize: "12px",
      fontWeight: 600,
      itemMargin: {
        horizontal: 5,
        vertical: 10,
      },
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={450}
    />
  );
}
