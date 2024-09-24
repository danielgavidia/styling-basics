import { Outlet } from "react-router-dom";

const Root = () => {
    const arr = [
        { path: "/RouteTask", name: "Task" },
        { path: "/RouteTaskList", name: "Task List" },
        { path: "/RouteMessageThread", name: "Message Thread" },
        { path: "/RoutePost", name: "Post" },
        { path: "/RouteHeatGrid", name: "Heat Grid" },
        { path: "/RouteTabDescriptor", name: "Tab Descriptor" },
    ];
    return (
        <>
            <div className="flex sticky top-0 z-50 justify-between bg-neutral">
                <div className="flex">
                    <a className="text-xl p-2">Styling Basics</a>
                </div>
                <div className="flex-none">
                    <ul className="flex">
                        {arr.map((x, id) => {
                            return (
                                <li key={id} className="p-2">
                                    <a href={x.path}>{x.name}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
};

export default Root;
