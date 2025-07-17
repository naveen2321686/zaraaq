'use client';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ScriptableContext
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const chartData = {
  labels: ['10 am', '10:30 am', '11 am', '11:30 am', '12 pm'],
  datasets: [
    {
      label: '',
      data: [11600, 11680, 11720, 11690, 11740],
      borderColor: '#a78bfa',
      backgroundColor: (ctx: ScriptableContext<'line'>) => {
        const chart = ctx.chart;
        const {ctx: c, chartArea} = chart;
        if (!chartArea) return undefined;
        const gradient = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, 'rgba(167,139,250,0.15)');
        gradient.addColorStop(1, 'rgba(167,139,250,0.01)');
        return gradient;
      },
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
      backgroundColor: '#fff',
      titleColor: '#a78bfa',
      bodyColor: '#23235b',
      borderColor: '#a78bfa',
      borderWidth: 1,
      padding: 10,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        color: '#bdbdbd',
        font: { size: 12, weight: 500 },
      },
    },
    y: {
      grid: { color: '#f3e8ff' },
      ticks: {
        color: '#bdbdbd',
        font: { size: 12, weight: 500 },
        callback: function(tickValue: string | number) {
          if (typeof tickValue === 'number') {
            return tickValue.toLocaleString();
          }
          return tickValue;
        },
        stepSize: 50,
      },
      min: 11550,
      max: 11750,
    },
  },
  elements: {
    line: { borderJoinStyle: "round" as const },
  },
};

export default function ChartSection() {
  return (
    <div className="p-4 bg-white rounded-xl shadow w-full">
      <div className="flex items-center gap-4 mb-2">
        <button className="text-sm font-bold text-purple-600 border-b-2 border-purple-600">NASDAQ</button>
        <button className="text-sm text-gray-500">SSE</button>
        <button className="text-sm text-gray-500">Euronext</button>
        <button className="text-sm text-gray-500">BSE</button>
      </div>
      <div className="flex gap-2 text-xs mb-4">
        <button className="text-purple-600 font-semibold">1D</button>
        <button className="text-gray-500">5D</button>
        <button className="text-gray-500">1M</button>
        <button className="text-gray-500">6M</button>
        <button className="text-gray-500">1Y</button>
      </div>
      <div className="h-40 md:h-48 w-full">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
