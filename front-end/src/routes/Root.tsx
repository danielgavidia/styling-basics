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
            <div className="flex sticky top-0 z-50 justify-between">
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
