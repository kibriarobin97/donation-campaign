import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/donation',
                element: <h3>donation</h3>
            },
            {
                path: '/statistics',
                element: <h3>statistics</h3>
            },
            {
                path: '/donation-details/:id',
                element: <DonationDetails></DonationDetails>
            }
        ]
    }
]);

export default router;