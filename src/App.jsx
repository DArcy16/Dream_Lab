/** @format */

import "./App.css";
import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import { LoginBoxContextProvider } from "./contexts/user/LoginBoxContext";
import { RegisterBoxContextProvider } from "./contexts/user/RegisterBoxContext";
import { UserDataContextProvider } from "./contexts/UserDataContext";
import UserRoutes from "./UserRoutes";
import AdminRoutes from "./AdminRoutes";

const queryClient = new QueryClient();

function App() {
	const UserRouting = useRoutes(UserRoutes);
	const AdminRouting = useRoutes(AdminRoutes);
	const isAdmin = true;

	return (
		<LoginBoxContextProvider>
			<RegisterBoxContextProvider>
				<UserDataContextProvider>
					<QueryClientProvider client={queryClient}>
						<Routes>
							<Route path="/*" element={UserRouting} />
							<Route
								path="/login"
								element={
									isAdmin ? <Navigate to="/admin" replace /> : AdminRouting
								}
							/>
							<Route
								path="/admin/*"
								element={isAdmin ? AdminRouting : <Navigate to="/login" />}
							/>
						</Routes>
					</QueryClientProvider>
				</UserDataContextProvider>
			</RegisterBoxContextProvider>
		</LoginBoxContextProvider>
	);
}

export default App;
