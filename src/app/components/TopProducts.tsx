interface Props { className?: string; }

export default function TopProducts({ className }: Props) {
  const products = [
    { name: 'Home Decor Range', popularity: 40 },
    { name: 'Disney Princess Pink Bag', popularity: 20 },
    { name: 'Bathroom Essentials', popularity: 18 },
    { name: 'Apple Smart Watch', popularity: 10 },
  ];

  return (
    <div className={`bg-white p-4 rounded-xl shadow ${className}`}>
      <h2 className="text-lg font-semibold mb-2">Top Products</h2>
      <ul className="space-y-2">
        {products.map((product, index) => (
          <li key={index} className="flex justify-between">
            <span>{product.name}</span>
            <span>{product.popularity}%</span>
          </li>
        ))}
      </ul>
    </div>
    
  );
}
