import React from "react";

const salesData = [
  { label: "Direct", value: 300.56, color: "#232323" },
  { label: "Affiliate", value: 155.18, color: "#b6f0e6" },
  { label: "Sponsored", value: 154.02, color: "#a5b4fc" },
  { label: "E-mail", value: 48.76, color: "#a5b4fc" },
];

const total = salesData.reduce((sum, d) => sum + d.value, 0);
const percent = ((salesData[0].value / total) * 100).toFixed(1);

const arcAngles = [
  0,
  (salesData[0].value / total) * 360,
  ((salesData[0].value + salesData[1].value) / total) * 360,
  ((salesData[0].value + salesData[1].value + salesData[2].value) / total) * 360,
  360,
];

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", start.x, start.y,
    "A", r, r, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
}

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = (angle - 90) * Math.PI / 180.0;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  };
}

const TotalSalesPie = () => {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      padding: 20,
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      minWidth: 220,
      maxWidth: 300,
      fontFamily: 'Inter, sans-serif',
      color: "#23235b",
      height: 340,
    }}>
      <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 8 }}>Total Sales</div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <svg width="80" height="80" viewBox="0 0 80 80">
          <g>
            {/* Direct */}
            <path d={describeArc(40, 40, 32, arcAngles[0], arcAngles[1])} stroke={salesData[0].color} strokeWidth="10" fill="none" />
            {/* Affiliate */}
            <path d={describeArc(40, 40, 32, arcAngles[1], arcAngles[2])} stroke={salesData[1].color} strokeWidth="10" fill="none" />
            {/* Sponsored */}
            <path d={describeArc(40, 40, 32, arcAngles[2], arcAngles[3])} stroke={salesData[2].color} strokeWidth="10" fill="none" />
            {/* E-mail */}
            <path d={describeArc(40, 40, 32, arcAngles[3], arcAngles[4])} stroke={salesData[3].color} strokeWidth="10" fill="none" />
          </g>
          <circle cx="40" cy="40" r="22" fill="#fff" />
          <text x="40" y="44" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#232323">{percent}%</text>
        </svg>
      </div>
      <div style={{ marginLeft: 8 }}>
        {salesData.map((d) => (
          <div key={d.label} style={{ display: "flex", alignItems: "center", marginBottom: 6 }}>
            <span style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: 4,
              background: d.color,
              marginRight: 8
            }}></span>
            <span style={{ color: d.color, fontWeight: 500, fontSize: 14, minWidth: 70 }}>{d.label}</span>
            <span style={{ marginLeft: "auto", fontWeight: 600, fontSize: 14, color: "#232323" }}>${d.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
);
};

export default TotalSalesPie;