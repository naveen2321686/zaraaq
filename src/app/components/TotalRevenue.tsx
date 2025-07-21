

const RevenueComponent = () => {
  const fetchRevenueData = async () => {
    try {
      const response = await fetch("http://localhost:8089/revenue/monthly");
      if (!response.ok) throw new Error("Failed to fetch revenue data");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching revenue:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchRevenueData} className="bg-blue-500 text-white px-4 py-2 rounded">
        Get Revenue
      </button>
    </div>
  );
};
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

interface RevenueData {
  year: number;
  month: string;
  onlineSales: number;
  offlineSales: number;
}

const defaultLabels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ata = async () => {
  try {
    const response = await fetch("http://localhost:8089/revenue/monthly");
    if (!response.ok) throw new Error("Failed to fetch revenue data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const TotalRevenue: React.FC = () => {
  const [labels, setLabels] = useState<string[]>(defaultLabels);
  const [onlineSales, setOnlineSales] = useState<number[]>([]);
  const [offlineSales, setOfflineSales] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    setLoading(true);
    setError(null);
    ata()
      .then((data: RevenueData[]) => {
        setLabels(data.map((d: RevenueData) => d.month));
        setOnlineSales(data.map((d: RevenueData) => d.onlineSales));
        setOfflineSales(data.map((d: RevenueData) => d.offlineSales));
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch revenue data");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = {
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
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={fetchData}
              >
                Retry
              </button>
            </div>
          ) : (
            <Bar data={data} options={options} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalRevenue;
export { RevenueComponent };
