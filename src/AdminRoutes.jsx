/** @format */

import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/dashboard";
import Plan from "./pages/admin/plan";
import Login from "./pages/admin/login";
import Subscription from "./pages/admin/subscription";
import CreateSubscription from "./pages/admin/subscription/CreateSubscription";
import EditSubscription from "./pages/admin/subscription/EditSubscription";
import Subscribers from "./pages/admin/subscribers";
import Categories from "./pages/admin/categories"
import ActiveUserPage from "./pages/admin/subscribers/ActiveUserPage";
import ExpiredUserPage from "./pages/admin/subscribers/ExpiredUserPage";

const routes = [
	{
		path: "admin",
		element: <AdminLayout />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: "plan",
				element: <Plan />,
			},
			{
				path: "subscription",
				children: [
					{ index: true, element: <Subscription /> },
					{ path: "create", element: <CreateSubscription /> },
					{ path: "edit/:id", element: <EditSubscription /> },
				],
			},
			{
				path: "subscribers",
				children: [
					{ index: true, element: <Subscribers /> },
					{ path: "active-user-details", element: <ActiveUserPage /> },
					{ path: "expired-user-details", element: <ExpiredUserPage />}
				],
			},
			{
				path: "categories",
				element: <Categories />,
			},
		],
	},
	{
		path: "login",
		element: <Login />,
	},
];

export default routes;
