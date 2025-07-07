
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        boxWidth: 12,
        boxHeight: 12,
        font: { size: 14 },
      },
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 5000,
        callback: function (tickValue: string | number) {
          // Chart.js may pass string or number, but we only want to format numbers
          if (typeof tickValue === "number") {
            return `${tickValue / 1000}k`;
          }
          return tickValue;
        },
        font: { size: 12 },
      },
      grid: {
        color: "#f0f0f0",
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: { size: 12 },
      },
    },
  },
};

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const data = {
  labels,
  datasets: [
    {
      label: "Online Sales",
      data: [12000, 15000, 8000, 14000, 11000, 17000, 21000],
      backgroundColor: "#2196f3",
      borderRadius: 6,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
    {
      label: "Offline Sales",
      data: [10000, 9000, 23000, 4000, 9000, 12000, 8000],
      backgroundColor: "#00e676",
      borderRadius: 6,
      barPercentage: 0.5,
      categoryPercentage: 0.5,
    },
  ],
};

const TotalRevenue = () => {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      padding: 24,
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      minWidth: 350,
      maxWidth: 600,
      margin: "auto"
    }}>
      <h3 style={{ color: "#23235b", fontWeight: 700, fontSize: 20, marginBottom: 16 }}>
        Total Revenue
      </h3>
      <Bar options={options} data={data} height={260} />
    </div>
  );
};

export default TotalRevenue;
