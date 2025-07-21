// 'use client' removed and replaced with the correct TotalRevenue component
// import React from "react";
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

import React, { useEffect, useState } from "react";

interface RevenueData {
  month: string;
  onlineSales: number;
  offlineSales: number;
}

const defaultLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const fetchRevenueData = async (): Promise<RevenueData[]> => {
  const res = await fetch("http://localhost:8089/revenue/monthly");
  if (!res.ok) throw new Error("Failed to fetch revenue data");
  return res.json();
};


const TotalRevenue: React.FC<TotalRevenueProps> = ({ className }) => {
  const [labels, setLabels] = useState<string[]>(defaultLabels);
  const [onlineSales, setOnlineSales] = useState<number[]>([]);
  const [offlineSales, setOfflineSales] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRevenueData()
      .then((data) => {
        setLabels(data.map((d) => d.month));
        setOnlineSales(data.map((d) => d.onlineSales));
        setOfflineSales(data.map((d) => d.offlineSales));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Online Sales",
        data: onlineSales,
        backgroundColor: "#38b6ff",
        borderRadius: 4,
        barThickness: 8,
      },
      {
        label: "Offline Sales",
        data: offlineSales,
        backgroundColor: "#1de9b6",
        borderRadius: 4,
        barThickness: 8,
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
          font: { size: 13, weight: 600 },
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
          callback: function(value: string | number, index: number) {
            return labels[index] || value;
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
          font: { size: 12, weight: 600 },
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

  return (
    <div className={`bg-white rounded-xl p-4 shadow w-full max-w-xl ${className || ""}`} style={{ minWidth: 0 }}>
      <h3 className="text-[#23235b] font-bold text-[20px] mb-2">Total Revenue</h3>
      <div className="w-full" style={{ minHeight: 270, height: 220 }}>
        {loading ? (
          <div className="text-center text-gray-500 py-10">Loading revenue data...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : (
          <Bar data={chartData} options={options} />
        )}
      </div>
    </div>
  );
};

export default TotalRevenue;
