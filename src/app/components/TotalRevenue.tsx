
import React, { useEffect, useState } from "react";
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

const defaultLabels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

interface RevenueDay {
  day: string;
  onlineSales: number;
  offlineSales: number;
}

const fetchRevenue = async (month: number, year: number): Promise<RevenueDay[]> => {
  const response = await fetch(`http://localhost:8089/revenue/monthly?month=${month}&year=${year}`);
  if (!response.ok) throw new Error("Failed to fetch revenue data");
  return response.json();
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
        font: { size: 13, weight: 600 },
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

const TotalRevenue: React.FC = () => {
  const [labels, setLabels] = useState<string[]>(defaultLabels);
  const [onlineSales, setOnlineSales] = useState<number[]>([]);
  const [offlineSales, setOfflineSales] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // fallback static data
  const staticData = [
    { day: "Monday", onlineSales: 12000, offlineSales: 10000 },
    { day: "Tuesday", onlineSales: 15000, offlineSales: 7000 },
    { day: "Wednesday", onlineSales: 5000, offlineSales: 20000 },
    { day: "Thursday", onlineSales: 17000, offlineSales: 9000 },
    { day: "Friday", onlineSales: 11000, offlineSales: 13000 },
    { day: "Saturday", onlineSales: 16000, offlineSales: 14000 },
    { day: "Sunday", onlineSales: 22000, offlineSales: 12000 },
  ];

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchRevenue(4, 2025)
      .then((days) => {
        setLabels(days.map((d) => d.day));
        setOnlineSales(days.map((d) => d.onlineSales));
        setOfflineSales(days.map((d) => d.offlineSales));
        setLoading(false);
      })
      .catch(() => {
        // fallback to static data
        setLabels(staticData.map((d) => d.day));
        setOnlineSales(staticData.map((d) => d.onlineSales));
        setOfflineSales(staticData.map((d) => d.offlineSales));
        setError(null); // don't show error, show chart
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
        borderRadius: 2,
        barThickness: 12,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
      {
        label: "Offline Sales",
        data: offlineSales,
        backgroundColor: "#1de9b6",
        borderRadius: 2,
        barThickness: 12,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow w-full max-w-xl min-w-0">
      <h3 className="text-[#23235b] font-bold text-[20px] mb-2">Total Revenue</h3>
      <div className="w-full min-h-[220px] h-[220px] md:h-[270px] flex items-center justify-center">
        <div className="w-full h-full">
          {loading ? (
            <div className="text-center text-gray-500 py-10">Loading revenue data...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-10 flex flex-col items-center gap-2">
              {error}
            </div>
          ) : (
            <Bar data={chartData} options={options} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
