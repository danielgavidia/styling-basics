import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Task from "./routes/Task";
import TaskList from "./routes/TaskList";
import MessageThread from "./routes/MessageThread";
import Post from "./routes/Post";
import HeatGrid from "./routes/HeatGrid";
import TabDescriptor from "./routes/TabDescriptor";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            { path: "task/", element: <Task /> },
            { path: "taskList/", element: <TaskList /> },
            { path: "messageThread/", element: <MessageThread /> },
            { path: "post/", element: <Post /> },
            { path: "heatGrid/", element: <HeatGrid /> },
            { path: "tabDescriptor/", element: <TabDescriptor /> },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <App /> */}
        <RouterProvider router={router} />
    </StrictMode>
);
