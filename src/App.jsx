/** @format */

import "./App.css";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";
import { LoginBoxContextProvider } from "./contexts/user/LoginBoxContext";
import { RegisterBoxContextProvider } from "./contexts/user/RegisterBoxContext";

function App() {
	const UserRouting = useRoutes(UserRoutes);
	const AdminRouting = useRoutes(AdminRoutes);
	const isAdmin = true;

	return (
		<LoginBoxContextProvider>
			<RegisterBoxContextProvider>
				<Routes>
					<Route path="/*" element={UserRouting} />
					<Route
						path="/login"
						element={isAdmin ? <Navigate to="/admin" replace /> : AdminRouting}
					/>
					<Route
						path="/admin/*"
						element={isAdmin ? AdminRouting : <Navigate to="/login" />}
					/>
				</Routes>
			</RegisterBoxContextProvider>
		</LoginBoxContextProvider>
	);
}

export default App;
