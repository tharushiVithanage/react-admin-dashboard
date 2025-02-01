import { Route, Routes } from "react-router-dom";

import Sidebar from "./components/common/Sidebar";

import FianlQuality from "./pages/FianlQuality";


import Overview from "./pages/Overview";

import Jartest from "./pages/Jartest";
import SettingsPage from "./pages/SettingsPage";

function App() {
	return (
		<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

			<Sidebar />
			<Routes>
				<Route path='/' element={<FianlQuality />} />


				<Route path='/sales' element={<Overview />} />

				<Route path='/analytics' element={<Jartest />} />
				<Route path='/settings' element={<SettingsPage />} />
			</Routes>
		</div>
	);
}

export default App;
