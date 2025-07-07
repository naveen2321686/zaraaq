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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <TotalRevenue className="col-span-2" />
        <BalanceCard />
        <TotalSalesPie />
        <TopProducts className="col-span-2" />
        <VisitorInsights />
      </div>
    </div>
  );
}
