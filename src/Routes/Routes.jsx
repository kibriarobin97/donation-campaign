import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: '/donation',
        element: <h3>donation</h3>
    },
    {
        path: '/statistics',
        element: <h3>statistics</h3>
    }
]);

export default router;