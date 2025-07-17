'use client';
import BalanceCard from "../components/BalanceCard";
import ChartSection from "../components/ChartSection";
// import DashboardHeader from "../components/DashboardHeader";
import SalesSummary from "../components/SalesSummary";
import TopProducts from "../components/TopProducts";
import TotalRevenue from "../components/TotalRevenue";
import TotalSalesPie from "../components/TotalSalesPie";
import VisitorInsights from "../components/VisitorInsights";


export default function DashboardPage() {
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      {/* <DashboardHeader /> */}
      <div className="grid mt-4 grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <SalesSummary />
        </div>
        <div className="col-span-1">
          <ChartSection />
        </div>
      </div>

      {/* Main dashboard grid for cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 mt-4">
        {/* Total Revenue (3 columns) and Balance Card (2 columns) side by side */}
        <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-6">
          <TotalRevenue />
        </div>
        <div className="md:col-span-1 lg:col-span-2 flex flex-col gap-2">
          <BalanceCard />
        </div>
        {/* Total Sales Pie (1 column) */}
        <div className="md:col-span-1 lg:col-span-1">
          <TotalSalesPie />
        </div>
        {/* Top Products (3 columns) and Visitor Insights (2 columns) side by side below */}
        <div className="md:col-span-2 lg:col-span-3">
          <TopProducts />
        </div>
        <div className="md:col-span-1 lg:col-span-2">
          <VisitorInsights />
        </div>
      </div>
    </div>
  );
}
