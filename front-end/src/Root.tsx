import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const Root = () => {
    const navbarButtons = [
        { path: "/RouteTask", name: "Task" },
        { path: "/RouteTaskList", name: "Task List" },
        { path: "/RouteMessageThread", name: "Message Thread" },
        { path: "/RoutePost", name: "Post" },
        { path: "/RouteHeatGrid", name: "Heat Grid" },
        { path: "/RouteTabDescriptor", name: "Tab Descriptor" },
    ];
    return (
        <>
            <Navbar navbarButtons={navbarButtons} />
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
};

export default Root;
