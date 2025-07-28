import React from "react";

interface Props { className?: string; }

const productData = [
  {
    name: "Home Decor Range",
    popularity: 48,
    color: "#3ec6ff",
  },
  {
    name: "Disney Princess Pink Bag 18",
    popularity: 29,
    color: "#4be3c9",
  },
  {
    name: "Bathroom Essentials",
    popularity: 18,
    color: "#a78bfa",
  },
];

export default function TopProducts({ className }: Props) {
  return (
    <div  className={`bg-white p-6 rounded-xl shadow ${className || ''} min-w-[340px] max-w-[900px] h-[100%]`}>
      <h2 className="text-indigo-950 font-bold text-[20px] mb-4">Top Products</h2>
      <div className="flex font-semibold text-gray-400 text-[13px] mb-2">
        <div className="w-8">#</div>
        <div className="flex-2 flex-1">Name</div>
        <div className="flex-2 flex-1">Popularity</div>
        <div className="w-16 text-right">Sales</div>
      </div>
      {productData.map((product, idx) => (
        <div key={product.name} className="flex items-center mb-4">
          <div className="w-8 text-violet-600 font-bold text-[15px]">{`0${idx + 1}`}</div>
          <div className="flex-2 flex-1 font-semibold text-indigo-950 text-[15px]">{product.name}</div>
          <div className="flex-2 flex-1 flex items-center">
            <div className="bg-gray-100 rounded h-2 w-32 mr-2 relative">
              <div style={{ background: product.color, borderRadius: 8, height: 8, width: `${product.popularity}%`, position: "absolute", top: 0, left: 0 }}></div>
            </div>
          </div>
          <div className="w-16 text-right">
            <span style={{ background: product.color }} className="text-white rounded font-semibold text-[14px] px-4 py-1">{product.popularity}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
