import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Chefs from "../pages/Home/Chefs";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [

            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chefs')
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            },
            // {
            //     path:'/chefs',
            //     element:<Chefs></Chefs>,
            //     loader: () => fetch('http://localhost:5000/chefs')
            // }
        ]
    }
])


export default router