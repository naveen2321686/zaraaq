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
    <div className={`bg-white p-6 rounded-xl shadow ${className || ''}`} style={{ minWidth: 340, maxWidth: 500 }}>
      <h2 style={{ color: "#23235b", fontWeight: 700, fontSize: 20, marginBottom: 18 }}>Top Products</h2>
      <div style={{ display: "flex", fontWeight: 600, color: "#bdbdbd", fontSize: 13, marginBottom: 8 }}>
        <div style={{ width: 32 }}>#</div>
        <div style={{ flex: 2 }}>Name</div>
        <div style={{ flex: 2 }}>Popularity</div>
        <div style={{ width: 60, textAlign: "right" }}>Sales</div>
      </div>
      {productData.map((product, idx) => (
        <div key={product.name} style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
          <div style={{ width: 32, color: "#8f4fff", fontWeight: 700, fontSize: 15 }}>{`0${idx + 1}`}</div>
          <div style={{ flex: 2, fontWeight: 600, color: "#23235b", fontSize: 15 }}>{product.name}</div>
          <div style={{ flex: 2, display: "flex", alignItems: "center" }}>
            <div style={{
              background: "#f0f4fa",
              borderRadius: 8,
              height: 8,
              width: 120,
              marginRight: 10,
              position: "relative"
            }}>
              <div style={{
                background: product.color,
                borderRadius: 8,
                height: 8,
                width: `${product.popularity}%`,
                position: "absolute",
                top: 0,
                left: 0
              }}></div>
            </div>
          </div>
          <div style={{ width: 60, textAlign: "right" }}>
            <span style={{
              background: product.color,
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 14,
              padding: "2px 14px"
            }}>{product.popularity}%</span>
          </div>
        </div>
      ))}
    </div>
  );
}
