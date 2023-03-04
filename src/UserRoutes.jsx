import UserLayout from "./layouts/UserLayout";
import Home from "./pages/user/home"

const routes = [
    {
        path : "/",
        element : <UserLayout />,
        children : [
            {index : true , element : <Home />}
        ]
    }
]

export default routes;