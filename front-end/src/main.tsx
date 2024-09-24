import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import RouteTask from "./routes/RouteTask";
import RouteTaskList from "./routes/RouteTaskList";
import RouteMessageThread from "./routes/RouteMessageThread";
import RoutePost from "./routes/RoutePost";
import RouteHeatGrid from "./routes/RouteHeatGrid";
import RouteTabDescriptor from "./routes/RouteTabDescriptor";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "RouteTask/", element: <RouteTask /> },
            { path: "RouteTaskList/", element: <RouteTaskList /> },
            { path: "RouteMessageThread/", element: <RouteMessageThread /> },
            { path: "RoutePost/", element: <RoutePost /> },
            { path: "RouteHeatGrid/", element: <RouteHeatGrid /> },
            { path: "RouteTabDescriptor/", element: <RouteTabDescriptor /> },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </StrictMode>
);
