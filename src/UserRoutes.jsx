/** @format */

import UserLayout from "./layouts/UserLayout";
import Home from "./pages/user/home";
import Pricing from "./pages/user/pricing";
import PaymentDetails from "./pages/user/pricing/PaymentDetails";
import Category from "./pages/user/categories";
import CategorizedView from "./pages/user/categories/CategorizedView";
import Library from "./pages/user/library";
import UserInfo from "./pages/user/UserInfo";
import SubscriptionView from "./pages/user/UserInfo/SubscriptionView";
import { Navigate } from "react-router-dom";
import SampleView from "./pages/user/view/SampleView";
import DetailsView from "./pages/user/view/DetailsView";

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
			{
				path: "category",
				children: [
					{
						index: true,
						element: <Category />,
					},
					{
						path: ":slug",
						children: [
							{
								index: true,
								element: <Navigate to="book" />,
							},
							{
								path: ":type",
								children: [
									{index : true, element: <CategorizedView />},
								],
							},
						],
					},
				],
			},
			{
				path: "user",
				children: [
					{
						path: "info",
						element: <UserInfo />,
					},
					{
						path: "subscription",
						element: <SubscriptionView />,
					},
				],
			},
			{
				path: "library",
				children: [
					{
						index: true,
						element : <Navigate to="book" />
					},
					{
						path : ":type", element : <Library />
					}
				],
			},
			{
				path : ":type/:name",
				children : [
					{
						index: true,
						element : <SampleView />
					},
					{
						path: 'details',
						element : <DetailsView />
					}

				]
			}
		],
	},
	{ path: "/payment-details", element: <PaymentDetails /> },
];

export default routes;
