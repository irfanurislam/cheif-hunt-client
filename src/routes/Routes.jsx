import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [

            {
                path:'/',
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            }
        ]
    }
])


export default router