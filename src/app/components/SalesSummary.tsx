'use client';

interface Props {
  className?: string;
}

export default function SalesSummary({ className }: Props) {
  const cards = [
    {
      title: 'Total Sales',
      value: '$1k',
      desc: '+8% from yesterday',
      color: 'bg-red-100 text-red-600',
    },
    {
      title: 'Total Order',
      value: '300',
      desc: '+5% from yesterday',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      title: 'Product Sold',
      value: '5',
      desc: '+12% from yesterday',
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'New Customers',
      value: '8',
      desc: '0.5% from yesterday',
      color: 'bg-purple-100 text-purple-600',
    },
  ];

  return (
    <div className={`p-4 bg-white rounded-xl h-[255] shadow w-full ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-gray-500 font-bold">Today&apos;s Sales</h2>
          <p className="text-sm text-gray-500">Sales Summary</p>
        </div>
        <button className="px-4 py-1 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
          Export
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((item, idx) => (
          <div key={idx} className={`p-4 rounded-xl shadow-sm ${item.color}`}>
            <div className="text-xl font-bold">{item.value}</div>
            <div className="text-sm font-semibold">{item.title}</div>
            <div className="text-xs">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>

  );
}
