import { Line } from "react-chartjs-2";
import "chart.js/auto";

export const ChartLine = (): JSX.Element => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Custom Bar Chart",
      fontSize: 20,
      fontColor: "#fff",
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#fff",
      },
    },
    scales: {
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        ticks: {
          color: "#fff",
        },
      },
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
        },
        ticks: {
          color: "#fff",
        },
      },
    },
    tooltips: {
      enabled: true,
      backgroundColor: "rgba(75,192,192,0.8)",
      titleFontSize: 16,
      bodyFontSize: 14,
      bodySpacing: 4,
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10,
    },
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: true,
        borderColor: "#742774",
      },
    ],
  };

  return (
    <div style={{ width: "100%", height: "200px" }}>
      <Line data={data} options={options} />
    </div>
  );
};
