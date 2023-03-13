/** @format */

import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/dashboard";
import Plan from "./pages/admin/plan";
import Login from "./pages/admin/login";
import Subscription from "./pages/admin/subscription";
import CreateSubscription from "./pages/admin/subscription/CreateSubscription";
import EditSubscription from "./pages/admin/subscription/EditSubscription";

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
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
];

export default routes;
