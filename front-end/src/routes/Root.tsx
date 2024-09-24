import { Outlet } from "react-router-dom";

const Root = () => {
    const arr = [
        { path: "/task", name: "Task" },
        { path: "/taskList", name: "Task List" },
        { path: "/messageThread", name: "Message Thread" },
        { path: "/post", name: "Post" },
        { path: "/heatGrid", name: "Heat Grid" },
        { path: "/tabDescriptor", name: "Tab Descriptor" },
    ];
    return (
        <>
            <div className="navbar sticky top-0 z-50">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Styling Basics</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {arr.map((x, id) => {
                            return (
                                <li key={id}>
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
