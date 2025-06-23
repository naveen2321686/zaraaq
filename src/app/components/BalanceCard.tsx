export default function BalanceCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Balance</h2>
      <div className="text-2xl font-bold text-green-600">$14,032.56</div>
      <p className="text-sm text-green-500">+5.63%</p>
      <div className="mt-4">
        <h3 className="text-sm font-medium">Invested</h3>
        <div className="text-xl">$7,532.21</div>
      </div>
    </div>
  );
}