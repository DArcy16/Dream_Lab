/** @format */

import UserLayout from "./layouts/UserLayout";
import Home from "./pages/user/home";
import Pricing from "./pages/user/pricing";
import PaymentDetails from "./pages/user/pricing/PaymentDetails";

const routes = [
	{
		path: "/",
		element: <UserLayout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "pricing",
				children: [{ index: true, element: <Pricing /> }],
			},
		],
	},
	{ path: "/payment-details", element: <PaymentDetails /> },
];

export default routes;
