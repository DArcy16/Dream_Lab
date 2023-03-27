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
import Authors from "./pages/admin/authors"
import Books from "./pages/admin/books"
import UpdataBook from "./pages/admin/books/UpdataBook";
import CreateBook from "./pages/admin/books/CreateBook";
import Articles from "./pages/admin/articles"
import EditArticle from "./pages/admin/articles/EditArticle";
import CreateArticles from "./pages/admin/articles/CreateArticles";

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
				children: [{ index: true, element: <Subscribers /> }],
			},
			{
				path: "categories",
				element: <Categories />,
			},
			{
				path: "authors",
				element: <Authors />,
			},
			{
				path: "books",
				children: [
					{ index: true, element: <Books /> },
					{ path: "edit/:id", element: <UpdataBook /> },
					{ path: "create", element: <CreateBook /> },
				],
			},
			{
				path: "articles",
				children: [
					{ index: true, element: <Articles /> },
					{ path: "edit/:slug", element: <EditArticle /> },
					{ path: "create", element: <CreateArticles /> },
				],
			},
		],
	},
	{
		path: "login",
		element: <Login />,
	},
];

export default routes;
