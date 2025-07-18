// 'use client' removed and replaced with the correct TotalRevenue component
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface TotalRevenueProps {
  className?: string;
}

const data = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  datasets: [
    {
      label: "Online Sales",
      data: [12000, 15000, 8000, 14000, 11000, 17000, 21000],
      backgroundColor: "#38b6ff", // lighter blue
      borderRadius: 4,
      barThickness: 8, // thinner bars
    },
    {
      label: "Offline Sales",
      data: [11000, 9000, 23000, 7000, 10000, 14000, 9000],
      backgroundColor: "#1de9b6", // lighter green
      borderRadius: 4,
      barThickness: 8, // thinner bars
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
      labels: {
        color: "#23235b",
        font: { size: 13, weight: 600 }, // smaller font
        usePointStyle: true,
        pointStyle: "rectRounded" as const,
        padding: 20,
      },
    },
    title: { display: false },
  },
  layout: {
    padding: {
      left: 24,
      right: 24,
      top: 16,
      bottom: 16,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: "#23235b",
        // smaller font
        callback: function(value: string | number) {
          return data.labels[typeof value === "number" ? value : Number(value)] || value;
        },
        maxRotation: 0,
        minRotation: 0,
        autoSkip: false,
        padding: 6,
      },
    },
    y: {
      grid: { color: "#f0f0f0" },
      ticks: {
        color: "#23235b",
        font: { size: 12, weight: 600 }, // smaller font
        stepSize: 5000,
        callback: function(value: string | number) {
          if (typeof value === "number") {
            return value === 0 ? '0k' : `${value / 1000}k`;
          }
          return value;
        },
        padding: 6,
      },
      min: 0,
      max: 25000,
    },
  },
};

const TotalRevenue: React.FC<TotalRevenueProps> = ({ className }) => (
  <div
    className={`bg-white rounded-xl p-4 shadow w-full max-w-xl ${className || ""}`}
    style={{ minWidth: 0 }}
  >
    <h3 className="text-[#23235b] font-bold text-[20px] mb-2">Total Revenue</h3>
    <div className="w-full" style={{ minHeight: 270, height: 220 }}>
      <Bar data={data} options={options} />
    </div>
  </div>
);

export default TotalRevenue;
