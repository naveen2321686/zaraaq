interface Props { className?: string; }

export default function TotalRevenue({ className }: Props) {
  return (
    <div className={`bg-white p-4 rounded-xl shadow ${className}`}>
      <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
      <div className="h-48 flex items-center justify-center text-gray-400">
        (Bar Chart Placeholder)
      </div>
    </div>
  );
}