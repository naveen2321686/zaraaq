import React from "react";

const BalanceCard = () => {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 26,
      padding: 20,
      boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      minWidth: 280,
      maxWidth: 340,
      fontFamily: 'Inter, sans-serif',
      color: "#23235b"
    }}>
      <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 8 }}>Balance</div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
        <div
        style={{
          background: "#8f4fff",
          color: "#fff",
          borderRadius: 10,
          padding: "12px 20px",
          fontSize: 22,
          fontWeight: 700,
          flex: 1
        }}>
          $14,032.56
        </div>
        <div style={{
          background: "#eaffea",
          color: "#22c55e",
          borderRadius: 8,
          fontWeight: 600,
          fontSize: 14,
          padding: "4px 10px",
          marginLeft: 10
        }}>
          +5.63%
        </div>
      </div>
      <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 8 }}>Invested</div>
      <div style={{
        background: "#232323",
        color: "#fff",
        borderRadius: 10,
        padding: "12px 20px",
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 18
      }}>
        $7,532.21
      </div>
      <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 6 }}>Top Stock</div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="Tesla" style={{ width: 24, height: 24, marginRight: 8 }} />
        <span style={{ fontWeight: 500, fontSize: 15, flex: 1 }}>Tesla Inc</span>
        <span style={{ color: "#bdbdbd", fontWeight: 600, fontSize: 13, marginRight: 8 }}>TSLA</span>
        <span style={{ color: "#22c55e", fontWeight: 600, fontSize: 13 }}>+17.63</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
        <div>
          <div style={{ color: "#bdbdbd", fontSize: 12 }}>Invested Value</div>
          <div style={{ fontWeight: 600, fontSize: 15 }}>$29.34</div>
        </div>
        <div>
          <div style={{ color: "#bdbdbd", fontSize: 12 }}>Current Value</div>
          <div style={{ fontWeight: 600, fontSize: 15 }}>$177.90</div>
        </div>
        <div>
          {/* Simple green line chart SVG */}
          <svg width="60" height="28" viewBox="0 0 60 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="0,20 10,18 20,15 30,10 40,12 50,7 60,14" stroke="#22c55e" strokeWidth="2" fill="none" />
            <circle cx="60" cy="14" r="2" fill="#22c55e" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
