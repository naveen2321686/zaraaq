import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

const data = {
  labels,
  datasets: [
    {
      label: "Visitors A",
      data: [320, 400, 350, 200, 180, 300, 370, 320, 250, 200, 180, 300],
      borderColor: "#a259f7",
      backgroundColor: "#a259f7",
      tension: 0.5,
      pointRadius: 0,
      borderWidth: 4,
      fill: false,
    },
    {
      label: "Visitors B",
      data: [400, 320, 200, 180, 300, 370, 320, 250, 200, 180, 300, 350],
      borderColor: "#3ec6ff",
      backgroundColor: "#3ec6ff",
      tension: 0.5,
      pointRadius: 0,
      borderWidth: 4,
      fill: false,
    },
    {
      label: "Visitors C",
      data: [200, 180, 300, 370, 320, 250, 400, 320, 200, 180, 300, 350],
      borderColor: "#f74b6a",
      backgroundColor: "#f74b6a",
      tension: 0.5,
      pointRadius: 0,
      borderWidth: 4,
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
    title: { display: false },
    tooltip: { enabled: true },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#bdbdbd", font: { size: 13 } },
    },
    y: {
      grid: { color: "#f0f0f0" },
      ticks: { color: "#bdbdbd", font: { size: 13 }, stepSize: 100 },
      min: 0,
      max: 400,
    },
  },
  elements: {
    point: {
      radius: 0,
      hoverRadius: 6,
      backgroundColor: "#f74b6a",
    },
  },
};


const VisitorInsights = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow min-w-[350px] max-w-[600px]">
      <h3 className="text-indigo-950 font-bold text-[20px] mb-4">Visitor Insights</h3>
      <Line options={options} data={data} height={220} />
    </div>


  );
};

export default VisitorInsights;