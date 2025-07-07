'use client';

import { usePathname } from 'next/navigation';
import {
  FaThLarge,
  FaBell,
  FaUser,
  FaBuilding,
  FaChartLine,
  FaCommentDots,
  FaSignOutAlt,
} from 'react-icons/fa';
import Link from 'next/link';

const navItems = [
  { label: 'Dashboard', icon: <FaThLarge />, href: '/dashboard' },
  { label: 'Notification', icon: <FaBell />, href: '/notification' },
  { label: 'Dealers', icon: <FaUser />, href: '/dealers' },
  { label: 'Customer management', icon: <FaBuilding />, href: '/customers' },
  { label: 'Report', icon: <FaChartLine />, href: '/report' },
  { label: 'Grievance', icon: <FaCommentDots />, href: '/grievance' },
  { label: 'Sign Out', icon: <FaSignOutAlt />, href: '/logout' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen w-64 bg-[#d3e6e6] p-3 shadow-lg mt:10">
      <ul className="space-y-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all text-sm
                  ${isActive ? 'bg-[#1f4eb0] text-white font-semibold' : 'text-gray-600 hover:bg-[#d6e4f0]'}`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;