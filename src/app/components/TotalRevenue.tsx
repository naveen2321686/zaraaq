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
      barThickness: 14,
    },
    {
      label: "Offline Sales",
      data: [11000, 9000, 23000, 7000, 10000, 14000, 9000],
      backgroundColor: "#1de9b6", // lighter green
      borderRadius: 4,
      barThickness: 14,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
      labels: {
        color: "#23235b",
        font: { size: 15, weight: "600" as const },
        usePointStyle: true,
        pointStyle: "rectRounded" as const,
        padding: 24,
      },
    },
    title: { display: false },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: "#23235b",
        font: { size: 13, weight: "500" as const },
        callback: function(value: any) {
          return data.labels[value] || value;
        },
        maxRotation: 35,
        minRotation: 35,
        autoSkip: false,
      }, 
    },
    y: {
      grid: { color: "#f0f0f0" },
      ticks: {
        color: "#23235b",
        font: { size: 13, weight: "500" as const },
        stepSize: 5000,
        callback: function(this: any, value: string | number) {
          if (typeof value === "number") {
            return value === 0 ? '0k' : `${value / 1000}k`;
          }
          return value;
        },
      },
      min: 0,
      max: 25000,
    },
  },
};

const TotalRevenue: React.FC<TotalRevenueProps> = ({ className }) => (
  <div className={`bg-white rounded-2xl p-6 shadow min-w-[350px] max-w-[480px] ${className || ""}`}>
    <h3 className="text-[#23235b] font-bold text-[24px] mb-2">Total Revenue</h3>
    <div className="h-[260px] flex items-end">
      <Bar data={data} options={options} height={220} />
    </div>
  </div>
);

export default TotalRevenue;
