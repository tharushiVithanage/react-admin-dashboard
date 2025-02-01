import { motion } from "framer-motion";

import Header from "../components/common/Header";
import Turbidityg from "../components/sales/Turbidityg";
import RevenueChart from "../components/analytics/RevenueChart";
import SalesOverviewChart from "../components/sales/SalesOverviewChart";
import SalesByCategoryChart from "../components/sales/SalesByCategoryChart";
import DailySalesTrend from "../components/sales/DailySalesTrend";

const salesStats = {
	totalRevenue: "$1,234,567",
	averageOrderValue: "$78.90",
	conversionRate: "3.45%",
	salesGrowth: "12.3%",
};

const Overview = () => {
	return (
		<div className='flex-1 overflow-auto relative z-10'>
			<Header title='Demodara Water Treatement Plant of Sri Lanka' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

				<RevenueChart />
				<SalesOverviewChart />
				<Turbidityg />


				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<SalesByCategoryChart />
					<DailySalesTrend />
				</div>
			</main>
		</div>
	);
};
export default Overview;
