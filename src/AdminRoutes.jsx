/** @format */

import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/dashboard";
import Plan from "./pages/admin/plan";
import Login from "./pages/admin/login"

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
    ],
  },
  {
    path : "login",
    element : <Login />
  },
];

export default routes;
