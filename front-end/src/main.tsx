import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Task from "./routes/Task";
import TaskList from "./routes/TaskList";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "task/", element: <Task /> },
            { path: "taskList/", element: <TaskList /> },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </StrictMode>
);
