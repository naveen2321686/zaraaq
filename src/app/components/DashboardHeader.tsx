import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow ">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input type="text" placeholder="Search here..." className="border rounded-full px-4 py-1 pl-10 text-sm" />
          <FaSearch className="absolute left-3 top-2 text-gray-400" />
        </div>
        <FaBell className="text-gray-600 text-xl" />
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl text-gray-700" />
          <div>
            <div className="text-sm font-medium">Naveen Kumar</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
        </div>
      </div>
    </div>

    );
}