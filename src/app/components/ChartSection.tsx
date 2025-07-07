'use client';
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
      {/* Placeholder chart */}
      <div className="h-40 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center text-purple-700 font-semibold">
        Chart Placeholder
      </div>
    </div>
  );
}
