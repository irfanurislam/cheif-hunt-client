import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Chefs from "../pages/Home/Chefs";
import ChefDetails from "../pages/Home/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [

            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('https://cheif-hunt-server.vercel.app/chefs')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            },
            {
                path:'/chefs/:id',
                element:<PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://cheif-hunt-server.vercel.app/chefs/${params.id}`)
            },
            {
                path:'/blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>,
            }
        ]
    }
])


export default router